export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <a href="#" className="logo">
          <div className="logo-dots">
            <div className="logo-dot" />
            <div className="logo-dot" />
            <div className="logo-dot" />
          </div>
          <div className="logo-text">
            TOBAMS<span>GROUP</span>
          </div>
        </a>
        <div className="nav-actions">
          <button type="button" className="btn-account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            Account <span className="nav-arrow">▾</span>
          </button>
          <button type="button" className="btn-assess">
            Take Assessment
          </button>
        </div>
      </div>
      <div className="navbar-links">
        <a href="#" className="active">
          About <span className="nav-arrow">▾</span>
        </a>
        <a href="#">
          What We Do <span className="nav-arrow">▾</span>
        </a>
        <a href="#">
          Jobs <span className="nav-arrow">▾</span>
        </a>
        <a href="#">Projects</a>
        <a href="#">TG Academy</a>
        <a href="#">Strategic Partnership</a>
        <a href="#">Pricing</a>
        <a href="#">Book a Consultation</a>
      </div>
    </nav>
  )
}
