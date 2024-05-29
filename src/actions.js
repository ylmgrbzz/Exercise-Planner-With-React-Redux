// Actions Types
export const ADD_EXERCISE = "ADD_EXERCISE";
export const REMOVE_EXERCISE = "REMOVE_EXERCISE";
export const EDIT_EXERCISE = "EDIT_EXERCISE";
// Action Creators
export const addExercise = (exercise) => ({
  type: ADD_EXERCISE,
  payload: exercise,
});

export const removeExercise = (id) => ({
  type: REMOVE_EXERCISE,
  payload: id,
});

export const editExercise = (exercise) => ({
  type: EDIT_EXERCISE,
  payload: exercise,
});
