import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../actions";
import "../App.css";

const AddExercise = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type || !difficulty) {
      alert("Lütfen egzersiz türünü ve zorluk seviyesini seçiniz.");
      return;
    }

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
    setType("");
    setDifficulty("");
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
        <option disabled value="">
          Egzersiz Türü Seçiniz
        </option>
        <option value="Kardiyo">Kardiyo</option>
        <option value="Güç">Güç</option>
        <option value="Esneklik">Esneklik</option>
      </select>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        required
      >
        <option disabled value="">
          Zorluk Seviyesi Seçiniz
        </option>
        <option value="Kolay">Kolay</option>
        <option value="Orta">Orta</option>
        <option value="Zor">Zor</option>
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddExercise;
