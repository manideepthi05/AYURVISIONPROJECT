import { useState } from "react";
import { Link } from "react-router-dom";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = () => {
    const msg = question.toLowerCase().trim();

    if (msg.includes("tulsi")) {
      setAnswer(`
🌿 Tulsi (Holy Basil)

Benefits:
• Boosts immunity
• Reduces stress
• Supports respiratory health

Uses:
• Tulsi Tea
• Herbal Medicine
• Treatment for Cough and Cold
      `);
    }

    else if (msg.includes("neem")) {
      setAnswer(`
🌿 Neem

Benefits:
• Purifies blood
• Improves skin health
• Fights bacterial infections

Uses:
• Neem Oil
• Neem Paste
• Dental Care Products
      `);
    }

    else if (
      msg.includes("aloe") ||
      msg.includes("aloe vera")
    ) {
      setAnswer(`
🌿 Aloe Vera

Benefits:
• Heals wounds
• Improves digestion
• Hydrates skin

Uses:
• Skin Care Gel
• Hair Care Products
• Aloe Juice
      `);
    }

    else if (msg.includes("ashwagandha")) {
      setAnswer(`
🌿 Ashwagandha

Benefits:
• Reduces stress
• Improves energy levels
• Supports brain health

Uses:
• Ayurvedic Medicine
• Herbal Supplements
• Stress Management
      `);
    }

    else if (
      msg.includes("mint") ||
      msg.includes("pudina")
    ) {
      setAnswer(`
🌿 Mint (Pudina)

Benefits:
• Improves digestion
• Freshens breath
• Relieves headaches

Uses:
• Mint Tea
• Cooking
• Herbal Remedies
      `);
    }

    else {
      setAnswer(`
Supported Plants:

🌿 Tulsi
🌿 Neem
🌿 Aloe Vera
🌿 Ashwagandha
🌿 Mint

Please ask about one of these plants.
      `);
    }
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
        🌿 AyurVision Chat
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Ask about a plant..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            width: "95%",
            padding: "12px",
            border: "2px solid #16a34a",
            borderRadius: "10px",
          }}
        />

        <br />
        <br />

        <button
          onClick={askQuestion}
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          whiteSpace: "pre-line",
          minHeight: "220px",
        }}
      >
        {answer || "Ask about Tulsi, Neem, Aloe Vera, Ashwagandha, or Mint 🌿"}
      </div>

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "15px",
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

export default Chat;