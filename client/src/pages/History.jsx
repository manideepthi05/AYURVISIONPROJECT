import { useState } from "react";
import { Link } from "react-router-dom";

function History() {
  const [scans, setScans] = useState([
    { id: 1, plant: "Tulsi", confidence: "95%", date: "Today" },
    { id: 2, plant: "Aloe Vera", confidence: "92%", date: "Yesterday" },
    { id: 3, plant: "Neem", confidence: "89%", date: "2 days ago" },
  ]);

  const deleteHistory = (id) => {
    setScans(scans.filter((scan) => scan.id !== id));
  };

  const clearAllHistory = () => {
    setScans([]);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0fdf4",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#16a34a",
          textAlign: "center",
        }}
      >
        🌿 Scan History
      </h1>

      <p style={{ textAlign: "center" }}>
        Your previous plant scan results
      </p>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={clearAllHistory}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          🗑️ Clear All History
        </button>
      </div>

      {scans.length === 0 ? (
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          No Scan History Available
        </div>
      ) : (
        scans.map((scan) => (
          <div
            key={scan.id}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "15px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#166534" }}>
              🌿 {scan.plant}
            </h2>

            <p>
              <b>Confidence:</b> {scan.confidence}
            </p>

            <p>
              <b>Date:</b> {scan.date}
            </p>

            <button
              onClick={() => deleteHistory(scan.id)}
              style={{
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Link to="/home">🏠 Home</Link>
        <Link to="/history">📜 History</Link>
        <Link to="/scan">📷 Scan</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/profile">👤 Profile</Link>
      </div>
    </div>
  );
}

export default History;