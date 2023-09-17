import "./App.css";

import { useState, useEffect } from "react";

// app components
import Search from "./components/search";
import Dashboard from "./components/dashboard";

// api
import axios from "axios";

// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // states
  const [data, setData] = useState();
  const [profileName, setProfileName] = useState("");
  const searchCallback = (name) => {
    setProfileName(name); // get name from search bar at homepage
  };

  // api from name set data state
  useEffect(() => {
    if (profileName) {
      // axios.get(`https://api.github.com/users/${profileName}/repos`).then(
      //   (response) => {
      //     setData(response.data);
      //   },
      //   (error) => {
      //     console.log(error);
      //     setData();
      //   }
      // );
      axios.get(`http://localhost:5000`).then(
        (response) => {
          setData(response.data);
          console.log("-", response.data);
        },
        (error) => {
          console.log("=", error);
          setData();
        }
      );
    }
  }, [profileName]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  // JSX
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Search callback={searchCallback} />} />
          {data ? (
            <Route path="/dashboard" element={<Dashboard data={data} />} />
          ) : (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
