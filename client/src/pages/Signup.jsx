import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (data.message === "Signup Successful") {
        navigate("/");
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
        <h1
          style={{
            color: "#16a34a",
          }}
        >
          🌿 AyurVision
        </h1>

        <h2
          style={{
            color: "#14532d",
          }}
        >
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="email"
          placeholder="Email"
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
          placeholder="Password"
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
          onClick={signupUser}
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
          Sign Up
        </button>

        <br />
        <br />

        <Link
          to="/"
          style={{
            color: "#16a34a",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Already Have Account?
        </Link>
      </div>
    </div>
  );
}

export default Signup;