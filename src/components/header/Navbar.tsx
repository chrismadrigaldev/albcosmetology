import { navbarContainerStyle } from "../../styles/navbar/navbarStyles";
import { FaHome } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <header style={navbarContainerStyle}>
            <a href="/" style={{ alignItems: "center", display: "flex" }}>
                <FaHome size="2.5rem" style={{ color: "#A30059" }} />
            </a>
            <nav>
                <ul
                    style={{
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        display: "flex",
                        gap: "25px",
                        color: "#ffffff"
                    }}
                >
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <button>
                Book Now
            </button>
        </header>
    );
};