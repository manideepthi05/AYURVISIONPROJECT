import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
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
        👤 My Profile
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#16a34a",
            color: "white",
            fontSize: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          👤
        </div>

        <h2
          style={{
            color: "#14532d",
            marginTop: "15px",
          }}
        >
          S.Manideepthi
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          📧 manideepthi@gmail.com
        </p>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          🌿 Total Scans: 5
        </p>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          🤖 AI Plant Detection User
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            color: "#16a34a",
          }}
        >
          Account Information
        </h3>

        <p>✔️ Active Account</p>
        <p>✔️ Login Enabled</p>
        <p>✔️ Scan History Available</p>
      </div>

      <button
        onClick={logout}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Logout
      </button>

      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "20px",
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

export default Profile;