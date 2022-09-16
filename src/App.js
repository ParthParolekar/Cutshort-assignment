import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Form, FormComplete, UserSelection } from "./components";
import { navigateHandler } from "./utilities/FormButtonClickHandlers/formButtonClickHandlers";
import {
  displayNameChangeHandler,
  nameChangeHandler,
  workspaceNameChangeHandler,
  workspaceURLChangeHandler,
} from "./utilities/InputFunctions/inputFunctions";

function App() {
  const [user, setUser] = useState({
    name: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    forTeam: false,
  });
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className="App">
      <h1 className="mg-2">
        <i className="fas fa-leaf"></i>Eden
      </h1>
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
              inputs={[
                {
                  label: "Name",
                  type: "text",
                  placeholder: "Steve Jobs",
                  value: user.name,
                  onChangeHandler: nameChangeHandler,
                },
                {
                  label: "Display Name",
                  type: "text",
                  placeholder: "Steve",
                  value: user.displayName,
                  onChangeHandler: displayNameChangeHandler,
                },
              ]}
              navigateHandler={navigateHandler}
              navigateURL={"/adduser/workspace"}
              setUser={setUser}
              user={user}
            />
          }
        />

        <Route
          path="/adduser/workspace"
          element={
            <Form
              title="Let's set up a home for all your work"
              subtitle="You can always create another workspace later"
              inputs={[
                {
                  label: "Workspace Name",
                  type: "text",
                  placeholder: "Eden",
                  value: user.workspaceName,
                  onChangeHandler: workspaceNameChangeHandler,
                },
                {
                  label: "Worksapce URL",
                  type: "text",
                  placeholder: "Example",
                  prefix: "www.eden.com/",
                  value: user.workspaceURL,
                  onChangeHandler: workspaceURLChangeHandler,
                },
              ]}
              navigateHandler={navigateHandler}
              navigateURL={"/adduser/user-selection"}
              setUser={setUser}
              user={user}
            />
          }
        />
        <Route
          path="adduser/user-selection"
          element={<UserSelection user={user} setUser={setUser} />}
        />
        <Route
          path="adduser/complete"
          element={<FormComplete setUser={setUser} user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
