import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeExercise } from "../actions";

const ExerciseList = () => {
  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();

  return (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <span>
            {exercise.name} - {exercise.reps} tekrar - {exercise.duration}{" "}
            dakika - {exercise.type} - {exercise.difficulty}
          </span>
          <button onClick={() => dispatch(removeExercise(exercise.id))}>
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExerciseList;
