import React, { useState, useContext } from "react";
import "../styles/CandidateManagement.css";
import { ElectionContext } from "../context/ElectionContext";

const CandidateManagement = () => {
  const { candidates, addCandidate, removeCandidate } = useContext(ElectionContext);
  const [formData, setFormData] = useState({ name: "", party: "", age: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (formData.name && formData.party && formData.age) {
      addCandidate({ ...formData });
      setFormData({ name: "", party: "", age: "" });
    }
  };

  return (
    <div className="candidate-container">
      <h1>Candidate Management</h1>

      <form onSubmit={handleAdd} className="candidate-form">
        <input type="text" name="name" placeholder="Candidate Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="party" placeholder="Party" value={formData.party} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <button type="submit">Add Candidate</button>
      </form>

      <div className="candidate-list">
        {candidates.length === 0 ? (
          <p className="no-candidate">No candidates added yet.</p>
        ) : (
          <ul>
            {candidates.map((c, index) => (
              <li key={index}>
                <span>{c.name} - {c.party} ({c.age} years)</span>
                <button onClick={() => removeCandidate(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CandidateManagement;
