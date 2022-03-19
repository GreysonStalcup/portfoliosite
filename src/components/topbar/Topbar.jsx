import "./topbar.scss"
import {Mail, Person} from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Greyson</a>
        </div>
        <h1>Hello!</h1>
        <div className="right">
          <div className="itemContainer">
            <a href="#portfolio"><Person className="icon"/></a>
            
          </div>
          <div className="itemContainer">
            <a href="#contact"><Mail className="icon"/></a>
          </div>
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
