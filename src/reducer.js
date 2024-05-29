import { ADD_EXERCISE, REMOVE_EXERCISE } from "./actions";

const initialState = {
  exercises: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case REMOVE_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
