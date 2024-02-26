import "./navbar.css"
import Button from "../../elements/button/button";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-corner">
                <span className="logo">covene</span>
            </div>
            <div className="right-corner">
                <Button name="Login"/>
                <Button name="Sign In"/>
            </div>
        </div>
    );
};

export default Navbar;
