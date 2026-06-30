import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CreateCard from "../components/CreateCard";
import ElinaPanel from "../components/ElinaPanel";

function Dashboard() {
  return (
    <>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            padding: "40px",
            color: "white",
          }}
        >
          <div>
            <h1>Welcome back, Albert 👋</h1>

            <p>What would you like to create today?</p>

            <div
              style={{
                display: "flex",
                gap: "25px",
                marginTop: "35px",
                flexWrap: "wrap",
              }}
            >
              <CreateCard
                icon="🎬"
                title="Video"
                description="Create cinematic AI videos"
              />

              <CreateCard
                icon="🎵"
                title="Music"
                description="Compose original music"
              />

              <CreateCard
                icon="🎨"
                title="Artwork"
                description="Generate AI artwork"
              />

              <CreateCard
                icon="🎙"
                title="Voice"
                description="Clone and generate voices"
              />
            </div>
          </div>

          <ElinaPanel />
        </div>
      </div>
    </>
  );
}

export default Dashboard;