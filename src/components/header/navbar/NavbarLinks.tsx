import { navbarLinksListStyle } from "../../../styles/header/navbarStyles";

export const NavbarLinks = () => {
    return (
        <ul style={navbarLinksListStyle}>
            <li><a href="/" style={{ textDecoration: "none", color: "#222222" }}>Home</a></li>
            <li><a href="/contact" style={{ textDecoration: "none", color: "#222222" }}>Contact</a></li>
            <li><a href="/portfolio" style={{ textDecoration: "none", color: "#222222" }}>Portfolio</a></li>
            <li><a href="/services" style={{ textDecoration: "none", color: "#222222" }}>Services</a></li>
            <li><a href="/pricing" style={{ textDecoration: "none", color: "#222222" }}>Pricing</a></li>
        </ul>
    );
};