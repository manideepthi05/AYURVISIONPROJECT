import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        padding: "20px",
        background: "#f0fdf4",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#16a34a",
          textAlign: "center",
        }}
      >
        🌿 AyurVision
      </h1>

      <h2 style={{ color: "#166534" }}>
        Hello Bhavani 👋
      </h2>

      <p>What would you like to do today?</p>

      {/* Scanner Card */}
      <div
        style={{
          background: "#dcfce7",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "20px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>📷 Scan a Plant</h2>

        <p>
          Identify any Ayurvedic plant using AI
        </p>

        <Link to="/scan">
          <button
            style={{
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Open Scanner
          </button>
        </Link>
      </div>

      <br />

      <h2 style={{ color: "#166534" }}>
        💬 Recent Conversations
      </h2>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "15px",
          marginBottom: "10px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        Benefits of Aloe Vera
      </div>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "15px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        Uses of Tulsi
      </div>

      <br />

      <h2 style={{ color: "#166534" }}>
        🌿 Recent Scans
      </h2>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "15px",
          marginBottom: "10px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        🌿 Tulsi (95%)
      </div>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "15px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        🌱 Aloe Vera (92%)
      </div>

      <br />

      {/* Bottom Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "white",
          padding: "15px",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
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

export default Home;