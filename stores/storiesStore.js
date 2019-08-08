import { observable, action, runInAction } from 'mobx';
import remotedev from 'mobx-remotedev';
import axios from 'axios';

@remotedev
class StoriesStore {
  @observable loading = false;
  @observable topStories = [];

  @action getTopStories = async () => {
    runInAction(() => this.loading = true)
    try {
      const { data: storiesIds } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      const topStories = storiesIds.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
      const result = await Promise.all(topStories);
      const content = result.map(item => item.data);
      runInAction(() => {
        this.loading = false
        this.topStories = [ ...content ]
      })
    } catch (err) {
      runInAction(() => this.loading = false)
    }
  }
}

export default new StoriesStore();
