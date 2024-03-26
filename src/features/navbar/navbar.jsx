import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './navbar.css';
import { Button } from '../../elements/button';

const Navbar = () => {
  const authState = useSelector((state) => state?.authentication);
  return (
    <div className="navbar">
      <div className="left-corner">
        <Link to="/">
          <span className="logo">Tracker-Aid</span>
        </Link>
      </div>
      <div className="right-corner">
        {authState.isAuthenticated ? (
          <div className="avatar">
            <div className="avatar-name">{authState.currentUser.username}</div>
          </div>
        ) : (
          <>
            {' '}
            <Link to="/login">
              <Button variant="text">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="text">Sign up</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
