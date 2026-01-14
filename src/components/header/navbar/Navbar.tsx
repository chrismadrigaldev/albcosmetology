import { FaHome } from 'react-icons/fa';
import { NavbarLinks } from "./NavbarLinks";
import { navbarContainerStyle } from '../../../styles/header/navbarStyles';
import { BookNowButton } from './BookNowButton';

export const Navbar = () => {
    return (
        <nav style={navbarContainerStyle}>
            <a href="/" style={{ alignItems: "center", display: "flex" }}>
                <FaHome size="2.5rem" style={{ color: "#A30059" }} />
            </a>
            <NavbarLinks />
            <BookNowButton />
        </nav>
    );
};