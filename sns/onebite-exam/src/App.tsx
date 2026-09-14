import { Route, Routes } from "react-router";
import "./App.css";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/todo-list-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todo-list" element={<TodoListPage />} />
    </Routes>
  );
}

export default App;
