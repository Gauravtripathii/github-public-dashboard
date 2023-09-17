import "./App.css";

import { useState, useEffect } from "react";

// app components
import Search from "./components/search";

// api
import axios from "axios";

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  const [profileName, setProfileName] = useState("");
  const searchCallback = (name) => {
    setProfileName(name);
  };

  useEffect(() => {
    axios.get(`https://api.github.com/users/${profileName}/repos`).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
        setData();
      }
    );
  }, [profileName]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Search callback={searchCallback} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
