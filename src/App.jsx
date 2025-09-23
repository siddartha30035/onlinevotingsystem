import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import VoterRegistration from "./pages/VoterRegistration";
import Dashboard from "./pages/Dashboard";
import VoterManagement from "./pages/VoterManagement";
import CandidateManagement from "./pages/CandidateManagement";
import Elections from "./pages/Elections";
import ElectionManagement from "./pages/ElectionManagement";
import Results from "./pages/Results"; // Import Results page

// Import ElectionProvider
import { ElectionProvider } from "./context/ElectionContext";

function App() {
  return (
    <ElectionProvider>
      <Router>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<VoterRegistration />} />

          {/* Dashboard + sub-pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/voters" element={<VoterManagement />} />
          <Route path="/dashboard/candidates" element={<CandidateManagement />} />
          <Route path="/dashboard/elections" element={<Elections />} />
          <Route path="/dashboard/manage-elections" element={<ElectionManagement />} />
          <Route path="/dashboard/results" element={<Results />} /> {/* Results route */}
        </Routes>
      </Router>
    </ElectionProvider>
  );
}

export default App;
