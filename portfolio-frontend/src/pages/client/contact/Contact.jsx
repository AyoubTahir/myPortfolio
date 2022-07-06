import { intro } from '../../../assets'
import './contact.scss'

const Contact = () => {
  return (
    <section className="contact" id="contact" style={{backgroundImage: `url(${intro})`}}>
		<div className="container-c">
			<div className="center">
				<h3>Let's talk about everything</h3>
				<p>Don't like forms? Send me an email.</p>
			</div>

			<div className="action">
				<form>
					<input type="email" name="email" placeholder="Enter Your email" required />
					<input type="submit" name="submit" value="Submit" />
				</form>
			</div>
		</div>
	</section>
  )
}

export default Contact