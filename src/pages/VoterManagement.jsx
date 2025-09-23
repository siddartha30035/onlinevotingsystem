import React, { useEffect, useState } from "react";
import "../styles/VoterManagement.css";

const VoterManagement = () => {
  const [voters, setVoters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch voters from backend
  const fetchVoters = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/voters"); // adjust backend URL
      const data = await response.json();
      setVoters(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching voters:", error);
      setLoading(false);
    }
  };

  // Delete voter
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this voter?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/voters/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setVoters(voters.filter((voter) => voter.id !== id));
      } else {
        console.error("Failed to delete voter");
      }
    } catch (error) {
      console.error("Error deleting voter:", error);
    }
  };

  useEffect(() => {
    fetchVoters();
  }, []);

  return (
    <div className="voter-container">
      <h1 className="page-title">Voter Management</h1>
      {loading ? (
        <p className="loading">Loading voters...</p>
      ) : voters.length === 0 ? (
        <p className="empty">No voters found</p>
      ) : (
        <table className="voter-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {voters.map((voter) => (
              <tr key={voter.id}>
                <td>{voter.id}</td>
                <td>{voter.name}</td>
                <td>{voter.email}</td>
                <td>{voter.age}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(voter.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VoterManagement;
