import fabLogo from "./images/fab_logo_reg.png";
export default function Home() {
  return (
    <div className="mainRoute home">
      <div className="fabLogoContainer">
        <img src={fabLogo} className="fabLogo" alt="logo" />
      </div>
      <div className="title">Penalty Guidelines</div>
      <div className="subtitle">Version 1.7 (2021-09-24)</div>
      <p>See about for details</p>
    </div>
  );
}
