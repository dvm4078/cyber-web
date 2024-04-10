import { Link, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();

  const toggleMenu = () => {
    const hamburger = document.querySelector(".hamburger")
    const nav_menu = document.querySelector(".nav-menu")
    const btn_menu = document.querySelector(".btn-header")

    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
    btn_menu.classList.toggle("active");
  }

  const onMenuClick = () => {
    const hamburger = document.querySelector(".hamburger")
    const nav_menu = document.querySelector(".nav-menu")
    const btn_menu = document.querySelector(".btn-header")

    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
    btn_menu.classList.remove("active");
  }

  return (
    <header className="header">
      <h1 className="rs">
        <Link to="/" className="logo">
          Logo
        </Link>
        {/* <a href="#" className="logo">Logo</a> */}
      </h1>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item" onClick={onMenuClick}>
            <Link to="/" className={`nav-link ${location.pathname === '/' && 'active'}`}>
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={onMenuClick}>
            <Link to="/buy-token" className={`nav-link ${location.pathname === '/buy-token' && 'active'}`}>
              Buy Token
            </Link>
          </li>
          <li className="nav-item" onClick={onMenuClick}>
            <Link to="/mint" className={`nav-link ${location.pathname === '/mint' && 'active'}`}>
              Mint NFT
            </Link>
          </li>
          <li className="nav-item" onClick={onMenuClick}>
            <Link to="/market" className={`nav-link ${location.pathname === '/market' && 'active'}`}>
              Marketplace
            </Link>
          </li>
          <li className="nav-item" onClick={onMenuClick}>
            <Link to="/tokenomic" className={`nav-link ${location.pathname === '/tokenomic' && 'active'}`}>
              Tokenomic
            </Link>
          </li>
          <li className="nav-item" onClick={onMenuClick}>
            <Link to="/roadmap" className={`nav-link ${location.pathname === '/roadmap' && 'active'}`}>
              Roadmap
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="btn-header">
          <a href="#" className="youtube"></a>
          <a href="https://t.me/cyberneo_nft" target="_blank" className="telegram"></a>
          <a href="twitter.com/PlayCyberNEO" target="_blank" className="twitter"></a>
        </div>
      </nav>

    </header>
  )
}

export default Header
