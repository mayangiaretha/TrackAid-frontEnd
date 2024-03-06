import { Link } from 'react-router-dom';

import './navbar.css';
import Button from '../../elements/button/button';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-corner">
        <Link to="/">
          <span className="logo">covene</span>
        </Link>
      </div>
      <div className="right-corner">
        <Link to="/login">
          <Button name="Login" />
        </Link>
        <Link to="/register">
          <Button name="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
