import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editExercise, removeExercise } from "../actions";
import "../App.css";

const ExerciseList = () => {
  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();

  // State'leri tanımla
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    const exerciseToEdit = exercises.find((exercise) => exercise.id === id);
    setName(exerciseToEdit.name);
    setReps(exerciseToEdit.reps);
    setDuration(exerciseToEdit.duration);
    setType(exerciseToEdit.type);
    setDifficulty(exerciseToEdit.difficulty);
    setIsEditing(true);
    setEditId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type || !difficulty) {
      alert("Lütfen egzersiz türünü ve zorluk seviyesini seçiniz.");
      return;
    }

    const newExercise = {
      id: editId || Date.now(),
      name,
      reps,
      duration,
      type,
      difficulty,
    };

    if (isEditing) {
      dispatch(editExercise(newExercise)); // Düzenleme modunda ise egzersizi güncelle
      setIsEditing(false); // Düzenleme modunu kapat
      setEditId(null); // Düzenlenecek egzersiz id'sini sıfırla
    }

    // Formu sıfırla
    setName("");
    setReps("");
    setDuration("");
    setType("");
    setDifficulty("");
  };

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
          </button>{" "}
          <button onClick={() => handleEdit(exercise.id)}>Düzenle</button>
        </li>
      ))}
      {isEditing && ( // Düzenleme modunda ise, düzenleme formunu göster
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
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
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
          <button type="submit">{isEditing ? "Güncelle" : "Ekle"}</button>
        </form>
      )}
    </ul>
  );
};

export default ExerciseList;
