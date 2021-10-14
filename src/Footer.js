import { NavLink } from "react-router-dom";

export default function Footer() {
  // Function to correct the selected highlight button in the footer
  // when home is active
  const checkIfHome = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  return (
    <footer className="footer">
      <div className="footerElementsContainer">
        <NavLink
          to="/"
          className="footerElement"
          activeClassName="selectedButton"
          isActive={checkIfHome}
        >
          <div className="icon">
            <i className="fas fa-home"></i>
            <div className="label">Home</div>
          </div>
        </NavLink>
        <NavLink
          to="/d/pg"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-balance-scale"></i>
            <div className="label">PG</div>
          </div>
        </NavLink>
        <NavLink
          to="/r"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-table"></i>
            <div className="label">Reference</div>
          </div>
        </NavLink>
        <NavLink
          to="/d/tr"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-trophy"></i>
            <div className="label">TR</div>
          </div>
        </NavLink>
        <NavLink
          to="/se"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-search"></i>
            <div className="label">Search</div>
          </div>
        </NavLink>
        <NavLink
          to="/a"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-info-circle"></i>
            <div className="label">About</div>
          </div>
        </NavLink>
      </div>
    </footer>
  );
}
