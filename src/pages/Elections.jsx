import React, { useState, useContext } from "react";
import "../styles/Elections.css";
import { ElectionContext } from "../context/ElectionContext";

const Elections = () => {
  const { elections, candidates } = useContext(ElectionContext);
  const [selectedElection, setSelectedElection] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleVote = () => {
    if (!selectedCandidate) return alert("Please select a candidate!");
    alert(`Thank you for voting for ${selectedCandidate}!`);
    setSelectedElection(null);
    setSelectedCandidate("");
  };

  return (
    <div className="elections-container">
      <h1>Available Elections</h1>
      {selectedElection === null ? (
        <ul>
          {elections.map((e) => (
            <li key={e.id}>
              <span>{e.name} — {e.date}</span>
              <button onClick={() => setSelectedElection(e)}>Vote</button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="vote-container">
          <h2>Vote for {selectedElection.name}</h2>
          {candidates.length === 0 ? (
            <p>No candidates available</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); handleVote(); }}>
              {candidates.map((c, index) => (
                <div key={index}>
                  <input type="radio" id={`c${index}`} name="candidate" value={c.name}
                    checked={selectedCandidate === c.name}
                    onChange={() => setSelectedCandidate(c.name)} />
                  <label htmlFor={`c${index}`}>{c.name} ({c.party})</label>
                </div>
              ))}
              <button type="submit">Submit Vote</button>
              <button type="button" onClick={() => setSelectedElection(null)}>Back</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Elections;
