import React, { createContext, useState } from "react";

// Create context
export const ElectionContext = createContext();

// Provider component
export const ElectionProvider = ({ children }) => {
  const [elections, setElections] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const addElection = (election) => {
    setElections([...elections, election]);
  };

  const deleteElection = (id) => {
    setElections(elections.filter((e) => e.id !== id));
  };

  const addCandidate = (candidate) => {
    setCandidates([...candidates, candidate]);
  };

  const removeCandidate = (index) => {
    setCandidates(candidates.filter((_, i) => i !== index));
  };

  return (
    <ElectionContext.Provider
      value={{
        elections,
        candidates,
        addElection,
        deleteElection,
        addCandidate,
        removeCandidate,
      }}
    >
      {children}
    </ElectionContext.Provider>
  );
};
