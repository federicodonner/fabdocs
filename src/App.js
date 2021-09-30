import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
