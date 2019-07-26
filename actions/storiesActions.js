import axios from 'axios';
import { GET_TOP_STORIES } from '../constants/actionTypes';

export const getTopStories = () => async dispatch => {
  dispatch ({ type: GET_TOP_STORIES.REQUEST });
  try {
    const { data: storiesIds } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    const topStories = storiesIds.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
    const result = await Promise.all(topStories)
    const content = result.map(item => item.data)
    dispatch ({
      type: GET_TOP_STORIES.SUCCESS,
      payload: content
    });
  } catch (err) {
    dispatch ({
      type: GET_TOP_STORIES.FAIL,
      payload: err
    });
  }
};
