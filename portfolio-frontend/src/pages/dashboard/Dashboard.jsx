import { FaCalendarCheck, FaProjectDiagram, FaRegEye } from "react-icons/fa";
import MainTitle from "../../components/mainTitle/MainTitle";
import './dashboard.scss';

const Dashboard = () => {
  return (
    <>
      <MainTitle title="Dashboard" />
      <ul className="box-info">
				<li>
					<FaCalendarCheck className='bx'/>
					<span className="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<FaRegEye className='bx' />
					<span className="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<FaProjectDiagram className='bx' />
					<span className="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
				</li>
			</ul>
    </>
  )
}

export default Dashboard