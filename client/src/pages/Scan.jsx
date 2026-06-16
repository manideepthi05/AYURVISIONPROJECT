import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Scan() {
  const [image, setImage] = useState(null);
  const [plant, setPlant] = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));

    const fileName = file.name.toLowerCase();

    if (fileName.includes("tulsi")) {
      setPlant("tulsi");
    } else if (fileName.includes("neem")) {
      setPlant("neem");
    } else if (
      fileName.includes("aloe") ||
      fileName.includes("aloevera")
    ) {
      setPlant("aloe");
    } else {
      setPlant("unknown");
    }
  };

  const handleScan = () => {
    if (!image) {
      alert("Please upload a plant image first");
      return;
    }

    navigate(`/result/${plant}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0fdf4",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#16a34a",
        }}
      >
        🌿 AyurVision Scanner
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "450px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            color: "#15803d",
          }}
        >
          Upload Plant Image
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          style={{
            marginTop: "15px",
          }}
        />

        <br />
        <br />

        {image && (
          <img
            src={image}
            alt="Plant"
            width="250"
            style={{
              borderRadius: "15px",
              border: "3px solid #16a34a",
            }}
          />
        )}

        <br />
        <br />

        <button
          onClick={handleScan}
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🔍 Scan Plant
        </button>
      </div>

      <br />

      <div
        style={{
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "15px",
          maxWidth: "450px",
          margin: "auto",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#16a34a" }}>
          Supported Plants
        </h3>

        <p>🌿 Tulsi</p>
        <p>🌳 Neem</p>
        <p>🌱 Aloe Vera</p>
      </div>
    </div>
  );
}

export default Scan;