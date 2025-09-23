import React, { useState, useContext } from "react";
import "../styles/ElectionManagement.css";
import { ElectionContext } from "../context/ElectionContext";

function ElectionManagement() {
  const { elections, addElection, deleteElection } = useContext(ElectionContext);
  const [electionName, setElectionName] = useState("");
  const [electionDate, setElectionDate] = useState("");

  const handleAddElection = () => {
    if (!electionName || !electionDate) {
      alert("Please fill in all fields!");
      return;
    }

    const newElection = { id: Date.now(), name: electionName, date: electionDate };
    addElection(newElection);
    setElectionName("");
    setElectionDate("");
  };

  return (
    <div className="election-container">
      <h2>Election Management</h2>

      <div className="form-container">
        <input type="text" placeholder="Election Name" value={electionName} onChange={(e) => setElectionName(e.target.value)} />
        <input type="date" value={electionDate} onChange={(e) => setElectionDate(e.target.value)} />
        <button className="add-btn" onClick={handleAddElection}>Add Election</button>
      </div>

      <div className="list-container">
        <h3>Available Elections</h3>
        {elections.length === 0 ? (
          <p className="empty-msg">No elections available</p>
        ) : (
          <ul>
            {elections.map((election) => (
              <li key={election.id}>
                <span>{election.name} — {election.date}</span>
                <button className="delete-btn" onClick={() => deleteElection(election.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ElectionManagement;
