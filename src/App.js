
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Switch to Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Switch to Light Mode");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "rgb(63 0 0)";
      showAlert("Dark Mode Enabled", "success");
      // document.title = "Hell's Service - Dark Mode";
      // setInterval(() => {
      //   document.title = "Hell's Service - Featured Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Hell's Service Now!";
      // }, 1500);
    }
    else {
      setMode("light");
      setModeText("Switch to Dark Mode");
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled", "success");
      // document.title = "Hell's Service - Light Mode";
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="Hell" home="UnderWorld" aboutText="About Hell's Service" modeTextColour={modeText} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <FormText showAlert={showAlert} heading="Hell's Service - Word Counter, Character Counter" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
