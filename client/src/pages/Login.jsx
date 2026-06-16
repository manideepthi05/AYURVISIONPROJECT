import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await fetch(
        "https://ayurvisionproject.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      alert("Server Error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0fdf4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#16a34a" }}>
          🌿 AyurVision
        </h1>

        <h2 style={{ color: "#14532d" }}>
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            border: "2px solid #16a34a",
            borderRadius: "10px",
          }}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            border: "2px solid #16a34a",
            borderRadius: "10px",
          }}
        />

        <br />
        <br />

        <button
          onClick={loginUser}
          style={{
            width: "95%",
            padding: "12px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <br />
        <br />

        <Link
          to="/signup"
          style={{
            color: "#16a34a",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;