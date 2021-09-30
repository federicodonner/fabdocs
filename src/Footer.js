import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerElementsContainer">
        <NavLink
          to="/home"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-home"></i>
            <div className="label">Home</div>
          </div>
        </NavLink>
        <NavLink
          to="/section"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-file"></i>
            <div className="label">Doc</div>
          </div>
        </NavLink>
        <NavLink
          to="/table"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-table"></i>
            <div className="label">Reference</div>
          </div>
        </NavLink>
        <NavLink
          to="/search"
          className="footerElement"
          activeClassName="selectedButton"
        >
          <div className="icon">
            <i className="fas fa-search"></i>
            <div className="label">Search</div>
          </div>
        </NavLink>
        <NavLink
          to="/about"
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
