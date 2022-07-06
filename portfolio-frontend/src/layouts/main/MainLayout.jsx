import { useContext , useEffect} from 'react';
import { useLocation, Outlet,Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import AuthContext from '../../contexts/AuthProvider';
import axiosInstance from "../../apis/axios"
import './mainLayout.scss';

const MainLayout = () => {

  const authDetails = JSON.parse(localStorage.getItem('auth'));
  const { setAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    setAuth(JSON.parse(localStorage.getItem('auth')));

  },[setAuth]);

  useEffect(() => {

    const checkToken = async() => {

      try {

        const res = await axiosInstance.post('/check', {
          headers: { 'Content-Type': 'application/json' }
        });
  
        console.log(res.data);

        //setAuth(JSON.parse(localStorage.getItem('auth')));
  
      } catch (err) {
        
        localStorage.clear();
  
        setAuth({});
        
        navigate('/admin/login');
  
      }

    }

    checkToken();

  });
  
  if(!authDetails) return <Navigate to="/admin/login" state={{ from: location }} replace />;

  return (
    <>
      <Sidebar />
      <section id="content">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </section>
    </>
  )
}

export default MainLayout