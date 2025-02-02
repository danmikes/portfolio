import { faGithub, faLinkedin, faYoutube, faResearchgate } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          <p>Daniel Mikes</p>
          <span> geologist &rarr; developer</span>
        </h1>
        <p className="h-sub-text">
          "this is the way"
        </p>
        <div className="icons">
          <a href="https://github.com/danmikes" className="icon-holder" >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://linkedin.com/in/dmikes" className="icon-holder" >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
          <a href="https://youtube.com" className="icon-holder" >
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </a>
          <a href="https://researchgate.net/profile/Daniel-Mikes" className="icon-holder" >
            <FontAwesomeIcon icon={faResearchgate} className="icon rg" />
          </a>
        </div>
      </header>
    </div>
  )
}

export default HomePage
