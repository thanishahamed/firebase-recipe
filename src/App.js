import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import FireBaseAuthService from "./FirebaseAuthService";
// eslint-disable-next-line no-unused-vars
import firebase from "./FirebaseConfig";
function App() {
  const [user, setUser] = React.useState(null);

  FireBaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div>
        <h1>My web app is rudnnsdfsdafing!</h1>
        <LoginForm existingUser={user} />
      </div>
    </div>
  );
}

export default App;
