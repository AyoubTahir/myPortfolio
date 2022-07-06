import { FaSearch, FaBars, FaBell, FaExternalLinkAlt } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from '../../contexts/AuthProvider';
import './navbar.scss';

const Navbar = () => {

  const BASE_URL_SITE = "http://localhost:3000/";

  const { auth } = useContext(AuthContext);

  return (
    <nav>
        <FaBars className='bx' />
        <form action="#">
            <div className="form-input">
                <input type="search" placeholder="Search..." />
                  <button type="submit" className="search-btn">
                    <FaSearch className='bx' />
                  </button>
            </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden />
        <label htmlFor="switch-mode" className="switch-mode"></label>
        <a href="google.com" className="notification">
            <FaBell className='bx' />
            <span className="num">8</span>
        </a>
        <h4>Welcome <span style={{ color: "red" }}>{auth?.name}</span></h4>
        <a href={BASE_URL_SITE} rel="noreferrer" target="_blank" className="notification">
          <FaExternalLinkAlt style={{ fontSize: "15px"}} />
        </a>
    </nav>
  )
}

export default Navbar