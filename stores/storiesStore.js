import { observable, action, runInAction } from 'mobx';
import remotedev from 'mobx-remotedev';
import { uniqBy as _uniqBy } from 'lodash';
import axios from 'axios';

@remotedev
class StoriesStore {
  @observable loading = false;
  @observable topStories = [];

  currentIndex = 0;
  storiesIds = [];

  @action getTopStories = async () => {
    runInAction(() => this.loading = true)
    try {
      const { data: storiesIds } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      runInAction(() => this.storiesIds = storiesIds)
      await this.getSetOfStories(20)
    } catch (err) {
      runInAction(() => this.loading = false)
    }
  }

  @action getSetOfStories = async (idx) => {
    if (this.getSetOfStories >= this.storiesIds.length) {
      return
    }

    try {
      const topStoriesIds = this.storiesIds.slice(this.currentIndex, this.currentIndex + idx);
      const topStoriesPromises = topStoriesIds.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
      const result = await Promise.all(topStoriesPromises);
      const content = result.map(item => item.data);
      runInAction(() => {
        this.loading = false;
        this.topStories = _uniqBy([...this.topStories, ...content], 'id');
        this.currentIndex = this.currentIndex + idx
      })
    } catch (err) {
      runInAction(() => this.loading = false)
    }
  }
}

export default new StoriesStore();
