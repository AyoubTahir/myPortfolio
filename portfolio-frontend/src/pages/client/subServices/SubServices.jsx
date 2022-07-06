import { service1,service2,service3 } from '../../../assets';
import './subServices.scss';

const SubServices = () => {
  return (
    <section className="sub-service">
		<div className="items">
			<div className="sub-box">
				<div className="sub-img">
					<img src={service1} alt=""/>
				</div>
				<h3>Pixel Perfect</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

			<div className="sub-box">
				<div className="sub-img">
					<img src={service2} alt="" />
				</div>
				<h3>High Quality</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

			<div className="sub-box">
				<div className="sub-img">
					<img src={service3} alt="" />
				</div>
				<h3>Awesome Idea</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

		</div>
	</section>
  )
}

export default SubServices