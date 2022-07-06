import { about } from '../../../assets'
import './about.scss'

const About = () => {
  return (
    <section className="about" id="about">
		<div className="about-img">
			<img src={about} alt='' />
		</div>

		<div className="about-text">
			<h3>I'm a Designer</h3>
			<h2>I Can Design Anything You Want</h2>
			<p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
			<a href="#empty" className="btn">Hire Me</a>
		</div>
	</section>
  )
}

export default About