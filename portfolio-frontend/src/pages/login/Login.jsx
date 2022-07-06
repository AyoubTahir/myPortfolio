import { useState, useContext } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axios";
import AuthContext from '../../contexts/AuthProvider';
import './login.scss'

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axiosInstance.post('/login', inputs, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(res);

      localStorage.setItem('auth', JSON.stringify({...res.data.user, token: res.data.token}))

      setAuth({...res.data.user, token: res.data.token});

      navigate('/admin');

    } catch (err) {
      
      console.log(err.response);

      setError(err.response.data);

    } finally {
      
      setLoading(false);

    }

  }

  return (
  <>
    {loading && <p>loading...</p> }
    {!loading &&
      <div className="container">
        <div className="forms">
            <div className="form login">
              <span className="title">Login</span>
              <span style={{color: "red", display: "block",marginTop: "15px",textAlign: "center"}}>{error.error}</span>

                <form action="#" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input type="text" placeholder="Enter your email" value={inputs.email} onChange={ (e)=> setInputs({...inputs, email: e.target.value }) } required/>
                        <FaCalendarCheck className="bx uil uil-envelope icon" />
                    </div>
                    <div className="input-field">
                        <input type="password" className="password" placeholder="Enter your password" value={inputs.password} onChange={ (e)=> setInputs({...inputs, password: e.target.value }) } required/>
                        <FaCalendarCheck className="bx uil uil-lock icon" />
                        <FaCalendarCheck className="bx uil uil-eye-slash" />
                    </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck"/>
                            <label htmlFor="logCheck" className="text">Remember me</label>
                        </div>
                        
                        <a href="/" className="text">Forgot password?</a>
                    </div>

                    <div className="input-field button">
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        </div>
      </div>
    }
  </>
  )
}

export default Login