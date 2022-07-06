import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { heroBackground } from '../../../assets';
import { myImage } from '../../../assets';
import './hero.scss'

const Hero = () => {
  return (
    <section className="home" id="home" style={{background: `url(${heroBackground})`}}>
      <div className="home-text">
        <h3>Hello, I'm</h3>
        <h1>Tahir Ayoub</h1>
        <h5>A Creative Designer <span>From New York</span></h5>
        <p>I'm creative designer based in New York, and I'm very passionate <br /> and dedicated to my work.</p>
        <div className="social">
          <a href="#empty"><FaFacebookF /></a>
          <a href="#empty"><FaLinkedinIn /></a>
          <a href="#empty"><FaGithub /></a>
        </div>
        <a href="#empty" className="btn">About Me</a>
      </div>

      <div className="home-img">
        <img src={myImage} alt="" />
      </div>
    </section>
  )
}

export default Hero