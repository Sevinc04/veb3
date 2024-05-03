import './App.css'
import React, { useState, useEffect } from "react";
import WorkerList from "./WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => response.json())
      .then((data) => {
        setWorkers(data);
      })
      .catch((error) => {
        console.error("Error fetching workers: ", error);
      });
  }, []);

  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search workers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <WorkerList workers={filteredWorkers} />
    </div>
  );
};

export default App;
