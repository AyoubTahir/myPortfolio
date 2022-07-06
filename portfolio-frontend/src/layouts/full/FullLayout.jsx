import { Outlet, Navigate, useLocation } from 'react-router-dom';

const FullLayout = () => {

  const location = useLocation();

  if (localStorage.getItem('auth')) return <Navigate to="/admin" state={{ from: location }} replace />;


  return (
    <div className='full-layout'>
        <Outlet />
    </div>
  )
}

export default FullLayout