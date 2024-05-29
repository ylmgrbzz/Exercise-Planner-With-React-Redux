import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../actions";

const AddExercise = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = {
      id: Date.now(),
      name,
      reps,
    };
    dispatch(addExercise(newExercise));
    setName("");
    setReps("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Egzersiz Adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tekrar Sayısı"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddExercise;
