import React, { useContext } from "react";
import "../styles/Results.css";
import { ElectionContext } from "../context/ElectionContext";

const Results = () => {
  const { candidates } = useContext(ElectionContext);

  if (!candidates || candidates.length === 0) {
    return <p className="no-results">No results available</p>;
  }

  // Find winner (candidate with max votes)
  const winner = candidates.reduce((max, c) =>
    c.votes > max.votes ? c : max
  );

  return (
    <div className="results-container">
      <h1>Election Results</h1>
      <table className="results-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Party</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c, i) => (
            <tr
              key={i}
              className={winner.name === c.name ? "winner-row" : ""}
            >
              <td>{c.name}</td>
              <td>{c.party}</td>
              <td>{c.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="winner-message">
        🏆 Winner: {winner.name} ({winner.party})
      </h2>
    </div>
  );
};

export default Results;
