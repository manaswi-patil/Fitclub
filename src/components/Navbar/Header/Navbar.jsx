import { useState } from 'react';
import './Navbar.css';
import Register from './../../../components/Register/Register';

const Navbar = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };
  return (

    <div className="navbar">
      <nav>
        <ul className="navbar-links" >

          <li>
            <a href="#AboutUs">AboutUs</a>
          </li>
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#Login">Login</a>

          </li>
          <li className="register-link">
            <button onClick={toggleRegister}>Register</button>
          </li>
        </ul>
        {isRegisterOpen && <Register />}
      </nav>
    </div>

  );
};


export default Navbar;