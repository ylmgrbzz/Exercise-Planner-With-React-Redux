import { ADD_EXERCISE, REMOVE_EXERCISE, EDIT_EXERCISE } from "./actions";

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
    case EDIT_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise.id === action.payload.id ? action.payload : exercise
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
