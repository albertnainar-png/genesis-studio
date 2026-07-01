import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CreateCard from "../components/CreateCard";
import ElinaPanel from "../components/ElinaPanel";
import HeroOrb from "../components/HeroOrb";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />

      <div className="dashboard-layout">

        <Sidebar />

        <main className="dashboard-content">

          {/* HERO */}

          <section className="hero">

            <div className="hero-overlay">

              <div className="welcome">
                WELCOME BACK, ALBERT
              </div>

              <h1>
                One Idea.
                <br />
                <span>Endless Creation.</span>
              </h1>

              <p className="hero-text">
                Transform your imagination into cinematic videos,
                original music, breathtaking artwork and AI voices —
                all from one creative studio.
              </p>

              <button className="new-project">
                + New Project
              </button>

            </div>

            {/* ELINA AI CORE */}

            <HeroOrb />

          </section>

          {/* CONTENT */}

          <div className="dashboard-grid">

            <div className="left-column">

              <h2>Quick Create</h2>

              <div className="card-grid">

                <CreateCard
                  icon="🎬"
                  title="Video"
                  description="Create cinematic AI videos."
                />

                <CreateCard
                  icon="🎵"
                  title="Music"
                  description="Compose original music."
                />

                <CreateCard
                  icon="🎨"
                  title="Artwork"
                  description="Generate AI artwork."
                />

                <CreateCard
                  icon="🎙"
                  title="Voice"
                  description="Clone and generate voices."
                />

              </div>

            </div>

            <ElinaPanel />

          </div>

        </main>

      </div>

    </>
  );
}

export default Dashboard;