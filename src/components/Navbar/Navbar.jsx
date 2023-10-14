import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const Navbar = () => {
    return (
        <div>
            <nav>
                <Logo></Logo>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;