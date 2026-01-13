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
                    }}
                >
                    <li><a href="/" style={{ textDecoration: "none", color: "#222222" }}>Home</a></li>
                    <li><a href="/contact" style={{ textDecoration: "none", color: "#222222" }}>Contact</a></li>
                    <li><a href="/portfolio" style={{ textDecoration: "none", color: "#222222" }}>Portfolio</a></li>
                    <li><a href="/services" style={{ textDecoration: "none", color: "#222222" }}>Services</a></li>
                    <li><a href="/pricing" style={{ textDecoration: "none", color: "#222222" }}>Pricing</a></li>
                </ul>
            </nav>
            <button>
                Book Now
            </button>
        </header>
    );
};