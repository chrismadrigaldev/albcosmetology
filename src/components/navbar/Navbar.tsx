import { navbarContainerStyle } from "../../styles/navbar/navbarStyles";
import { FaHome } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <header style={navbarContainerStyle}>
            <a href="/" style={{ alignItems: "center", display: "flex" }}>
                <FaHome size="3rem" style={{ color: "#A30059" }} />
            </a>
            <nav>
                {/* TODO: START CREATING THE BUTTONS FOR THE NAVBAR */}
            </nav>
        </header>
    );
};