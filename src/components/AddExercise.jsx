import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../actions";

const AddExercise = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("Kardiyo");
  const [difficulty, setDifficulty] = useState("Kolay");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = {
      id: Date.now(),
      name,
      reps,
      duration,
      type,
      difficulty,
    };
    dispatch(addExercise(newExercise));
    setName("");
    setReps("");
    setDuration("");
    setType("Kardiyo");
    setDifficulty("Kolay");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Egzersiz Adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Tekrar Sayısı"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Süre (dakika)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="Kardiyo">Kardiyo</option>
        <option value="Güç">Güç</option>
        <option value="Esneklik">Esneklik</option>
      </select>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        required
      >
        <option value="Kolay">Kolay</option>
        <option value="Orta">Orta</option>
        <option value="Zor">Zor</option>
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddExercise;
