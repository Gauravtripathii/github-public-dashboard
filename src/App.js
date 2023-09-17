import "./App.css";

import { useState, useEffect } from "react";

// app components
import Search from "./components/search";

// api
import axios from "axios";

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
    <div className="app">
      <Search callback={searchCallback} />
    </div>
  );
}

export default App;
