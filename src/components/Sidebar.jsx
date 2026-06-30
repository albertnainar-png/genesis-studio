import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>MENU</h2>

      <button>🏠 Dashboard</button>

      <button>🎬 Videos</button>

      <button>🎵 Music</button>

      <button>🎨 Artwork</button>

      <button>🎙 Voice</button>

      <button>⚙ Settings</button>

    </aside>
  );
}

export default Sidebar;