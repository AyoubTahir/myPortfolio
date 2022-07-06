import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './mainTitle.scss';

const MainTitle = ({title, addNewButton, link}) => {
  return (
    <div className="head-title">
        <div className="left">
            <h1>{title}</h1>
            <ul className="breadcrumb">
            <li>
                <Link to="/">{title}</Link>
            </li>
            <li><FaLongArrowAltRight className='bx sm' /></li>
            <li>
                <Link to="/" className="active">Home</Link>
            </li>
            </ul>
        </div>
        {!addNewButton ? '' : (
            <Link to={link} className="btn-download">
                <span className="text">{addNewButton}</span>
            </Link>
        )} 
    </div>
  )
}

export default MainTitle