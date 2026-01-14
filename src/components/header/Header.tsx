import { headerContainerStyle } from "../../styles/header/headerStyles";
import { ContactHeader } from "./ContactHeader";
import { Navbar } from "./navbar/Navbar";

export const Header = () => {
    return (
        <header style={headerContainerStyle}>
            <ContactHeader />
            <Navbar />
        </header>
    );
};