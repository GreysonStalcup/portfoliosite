import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Porfolio from "./components/porfolio/Porfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Porfolio/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
