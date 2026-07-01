import "../styles/header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">

        <div className="logo-icon">
          G
        </div>

        <div>
          <h1>Genesis Studio</h1>
          <span>Powered by ELINA</span>
        </div>

      </div>

      <div className="header-search">

        <input
          type="text"
          placeholder="Search projects..."
        />

      </div>

      <div className="header-user">

        <button className="notify">
          🔔
        </button>

        <div className="avatar">
          A
        </div>

      </div>

    </header>
  );
}

export default Header;