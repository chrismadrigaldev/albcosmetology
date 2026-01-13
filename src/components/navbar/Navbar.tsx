import { navbarContainerStyle } from "../../styles/navbar/navbarStyles";
import { FaHome } from 'react-icons/fa';
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
    return (
        <header style={navbarContainerStyle}>
            <nav>
                <a href="/" style={{ alignItems: "center", display: "flex" }}>
                    <FaHome size="2.5rem" style={{ color: "#A30059" }} />
                </a>
                <NavbarLinks />
                <button>
                    Book Now
                </button>
            </nav>
        </header>
    );
};