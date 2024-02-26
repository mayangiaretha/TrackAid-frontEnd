
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-corner">
                <span className="logo">covene</span>
            </div>
            <div className="right-corner">
                <button className="login-btn">Login</button>
                <button className="signin-btn">Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
