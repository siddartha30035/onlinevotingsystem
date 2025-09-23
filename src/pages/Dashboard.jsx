import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <Link to="/dashboard">🏠 Home</Link>
          <Link to="/dashboard/voters">Voter Management</Link>
          <Link to="/dashboard/candidates">Candidate Management</Link>
          <Link to="/dashboard/elections">Fetch Elections</Link>
          <Link to="/dashboard/manage-elections">Election Management</Link>
          <Link to="/dashboard/results">📊 Results</Link> {/* Added Results page link */}
        </div>

        <div className="nav-right">
          <div className="profile-menu">
            <span className="profile-icon">👤</span>
            <div className="dropdown">
              <button onClick={() => navigate("/dashboard/profile")}>Profile</button>
              <button onClick={() => navigate("/")}>Logout</button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="dashboard-content">
        <h1 className="welcome-message">Welcome, Voter!</h1>
        <p className="subtext">Manage elections, candidates, and voters from here.</p>
      </div>
    </div>
  );
}

export default Dashboard;
