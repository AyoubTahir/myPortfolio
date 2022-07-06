import { anchor, physics, contact, web } from '../../../assets'
import './services.scss'

const Services = () => {
  return (
    <section className="service" id="service">
		<div className="heading">
			<h3>Service</h3>
			<h2>What I Do For Clients</h2>
			<p>Most common methods for designing websites that work well on desktop is <br /> responsive and adaptive design</p>
		</div>

		<div className="service-content">
			<div className="row">
				<div className="s s-one">
					<img src={anchor} alt='' />
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

			<div className="row">
				<div className="s s-tow">
					<img src={physics} alt='' />
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

			<div className="row">
				<div className="s s-three">
					<img src={contact} alt='' />
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

			<div className="row">
				<div className="s s-four">
					<img src={web} alt='' />
				</div>
				<h3>Web Design</h3>
				<h5>Starts From <span>$99</span></h5>
				<p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
			</div>

		</div>
	</section>
  )
}

export default Services