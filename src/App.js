import { Provider } from "react-redux";
import store from "./store";
import AddExercise from "./components/AddExercise";
import ExerciseList from "./components/ExerciseList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Egzersiz Planlayıcı</h1>
        <AddExercise />
        <ExerciseList />
      </div>
    </Provider>
  );
}

export default App;
