import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Form } from "./components";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1 className="mg-2">Eden</h1>
      <Routes>
        <Route
          path="/"
          element={
            <button onClick={() => navigate("/adduser/name")}>Create</button>
          }
        />
        <Route
          path="/adduser/name"
          element={
            <Form
              title="Welcome! First things first..."
              subtitle="You can always change them later."
            />
          }
        />
        <Route
          path="/adduser/workspace"
          element={
            <Form
              title="Let's set up a home for all your work"
              subtitle="You can always create another workspace later"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
