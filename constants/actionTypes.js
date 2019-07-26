export const GET_TOP_STORIES = createActionType('GET_TOP_STORIES');

function createActionType (name) {
  return {
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
    FAIL: `${name}_FAIL`
  }
}