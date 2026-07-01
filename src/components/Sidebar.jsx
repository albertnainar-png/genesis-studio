import "../styles/sidebar.css";

const menuItems = [
  { title: "Dashboard", icon: "🏠" },
  { title: "Video Studio", icon: "🎬" },
  { title: "Music Studio", icon: "🎵" },
  { title: "Artwork Studio", icon: "🎨" },
  { title: "Voice Studio", icon: "🎙" },
  { title: "Projects", icon: "📁" },
  { title: "Settings", icon: "⚙️" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        Workspace
      </div>

      <nav>
        {menuItems.map((item) => (
          <button key={item.title} className="menu-item">
            <span>{item.icon}</span>
            {item.title}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="version">
          Alpha 1
        </div>

        <p>Genesis Studio</p>
      </div>
    </aside>
  );
}

export default Sidebar;