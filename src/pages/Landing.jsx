import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        background: "#07070A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "700",
          marginBottom: "35px",
          background: "linear-gradient(90deg,#7C3AED,#A855F7,#C084FC)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Genesis Studio
      </h1>

      <p
        style={{
          color: "#D4D4D8",
          fontSize: "24px",
          letterSpacing: "3px",
          marginBottom: "50px",
        }}
      >
        Powered by ELINA
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background: "linear-gradient(90deg,#7C3AED,#9333EA)",
          color: "white",
          border: "none",
          padding: "18px 48px",
          borderRadius: "14px",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        Begin Creating
      </button>
    </div>
  );
}

export default Landing;