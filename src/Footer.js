export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerElementsContainer">
        <a href="/home">
          <div className="footerElement">
            <div className="icon">
              <i className="fas fa-home"></i>
              <div className="label">Home</div>
            </div>
          </div>
        </a>
        <a href="/section">
          <div className="footerElement">
            <div className="icon">
              <i className="fas fa-file"></i>
              <div className="label">Doc</div>
            </div>
          </div>
        </a>
        <a href="/search">
          <div className="footerElement">
            <div className="icon">
              <i className="fas fa-search"></i>
              <div className="label">Search</div>
            </div>
          </div>
        </a>
        <a href="/about">
          <div className="footerElement">
            <div className="icon">
              <i className="fas fa-info-circle"></i>
              <div className="label">About</div>
            </div>
          </div>
        </a>
      </div>
    </footer>
  );
}
