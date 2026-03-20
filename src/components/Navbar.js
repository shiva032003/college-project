import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Left - Logo */}
      <div className="navbar-logo">
        <img src="/college-logo.png" alt="College Logo" />
      </div>

      {/* Right - Menu */}
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Admission</li>
        <li>About</li>
        <li>Academic</li>
        <li>Contact</li>
        <li>
          <button className="login-btn">Login</button>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;