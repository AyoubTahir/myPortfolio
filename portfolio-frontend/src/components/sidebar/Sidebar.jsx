import { FaLayerGroup, FaBattleNet } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from '../../contexts/AuthProvider';
import { useContext } from "react";
import './sidebar.scss';

const Sidebar = () => {

	const location = useLocation();
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const isActive = (curentLink) => location.pathname === curentLink ? 'active' : '';

	const handleLogout = () => {
		if (window.confirm('Are you sure you wanna logout?'))
		{
			localStorage.clear();
			setAuth({});
			navigate('/admin/login')
		}
	}

  return (

	<section id="sidebar">
		<Link to="/admin" className="brand">
			<FaBattleNet className='bx'/>
			<span className="text">AdminHub</span>
		</Link>
		<ul className="side-menu top">
			<li className={isActive('/')}>
				<Link to="/admin">
                    <FaLayerGroup className="bx" />
					<span className="text">Dashboard</span>
				</Link>
			</li>
			<li className={isActive('/projects')}>
				<Link to="/admin/projects">
                    <FaLayerGroup className="bx" />
					<span className="text">Projects</span>
				</Link>
			</li>
		</ul>
		<ul className="side-menu">
			<li>
				<Link to="/">
                    <FaLayerGroup className="bx" />
					<span className="text">Settings</span>
				</Link>
			</li>
			<li>
				<Link to="#" className="logout" onClick={handleLogout}>
                    <FaLayerGroup className="bx" />
					<span className="text">Logout</span>
				</Link>
			</li>
		</ul>
	</section>

  )
}

export default Sidebar