import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="welcomeText">
          <h1>Hey, I'm <span>Grey</span>!<img width="90" src="react/assets/waving.gif" className="waver" alt="" />😄</h1>
          <span className="title">
            <h4>Web Developer</h4>
            </span>
        </div>
      </div>
      <div className="right">
        <div className="contactButton">
          <a href="#contact">Contact Me!</a>
        </div>
      </div>
    </div>
  )
}
