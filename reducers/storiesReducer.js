
import { GET_TOP_STORIES } from '../constants/actionTypes'

export default function stories (state = {}, action) {
  const { type, error, payload } = action;

  switch (type) {
    case GET_TOP_STORIES.REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_TOP_STORIES.SUCCESS: {
      return {
        ...state,
        loading: false,
        topStories: payload
      }
    }
    case GET_TOP_STORIES.FAIL: {
      return {
        ...state,
        loading: false,
        error: payload
      }
    }
    default: {
      return state;
    }
  };
};
