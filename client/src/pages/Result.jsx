import { Link, useParams } from "react-router-dom";

function Result() {
  const { plant } = useParams();

  const data = {
    tulsi: {
      name: "Tulsi",
      scientific: "Ocimum tenuiflorum",
      confidence: "99.9%",
      benefits: [
        "Boosts immunity",
        "Supports respiratory health",
        "Reduces stress and anxiety",
        "Anti-inflammatory properties",
      ],
      uses: "Tulsi tea, Kadha, Fresh leaf chewing",
      parts: "Leaves, Seeds, Root",
    },

    neem: {
      name: "Neem",
      scientific: "Azadirachta indica",
      confidence: "98.5%",
      benefits: [
        "Purifies blood",
        "Supports skin health",
        "Antibacterial properties",
        "Helps oral hygiene",
      ],
      uses: "Neem paste, Neem oil, Leaf decoction",
      parts: "Leaves, Bark, Seeds",
    },

    aloe: {
      name: "Aloe Vera",
      scientific: "Aloe barbadensis miller",
      confidence: "97.8%",
      benefits: [
        "Improves skin healing",
        "Supports digestion",
        "Soothes burns",
        "Hydrates skin",
      ],
      uses: "Aloe gel, Juice, Skin application",
      parts: "Leaf gel",
    },

    unknown: {
      name: "Unknown Plant",
      scientific: "Not identified",
      confidence: "0%",
      benefits: [
        "Please upload Tulsi, Neem or Aloe Vera image"
      ],
      uses: "No data available",
      parts: "No data available",
    },
  };

  const result = data[plant] || data.unknown;

  return (
    <div
      style={{
        backgroundColor: "#f0fdf4",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#16a34a",
            textAlign: "center",
          }}
        >
          🌿 {result.name}
        </h1>

        <h3
          style={{
            textAlign: "center",
            color: "#555",
          }}
        >
          {result.scientific}
        </h3>

        <div
          style={{
            backgroundColor: "#dcfce7",
            padding: "15px",
            borderRadius: "15px",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          <h2 style={{ color: "#15803d" }}>
            {result.confidence} Match
          </h2>
        </div>

        <br />

        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "15px",
            borderRadius: "15px",
          }}
        >
          <h2 style={{ color: "#16a34a" }}>
            Medicinal Benefits
          </h2>

          <ul>
            {result.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <br />

        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "15px",
            borderRadius: "15px",
          }}
        >
          <h2 style={{ color: "#16a34a" }}>
            Traditional Uses
          </h2>

          <p>{result.uses}</p>
        </div>

        <br />

        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "15px",
            borderRadius: "15px",
          }}
        >
          <h2 style={{ color: "#16a34a" }}>
            Plant Parts Used
          </h2>

          <p>{result.parts}</p>
        </div>

        <br />

        <Link to="/scan">
          <button
            style={{
              width: "100%",
              marginBottom: "10px",
            }}
          >
            📷 Scan Again
          </button>
        </Link>

        <Link to="/home">
          <button
            style={{
              width: "100%",
            }}
          >
            🏠 Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Result;