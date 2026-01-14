import { contactContainerStyle } from "../../styles/header/headerStyles";

export const ContactHeader = () => {
    return (
        <div style={contactContainerStyle}>
            <a 
                href="tel:+17326147713"
                style={{
                    textDecoration: "none",
                    color: "#222222",
                    fontSize: "14px"
                }}
            >
                Call: +1 (732) 614 - 7713
            </a>
            <img 
                src="src/assets/png/instagram.png"
                alt="Instagram Link"
                style={{
                    height: "1.5rem",
                    width: "auto"
                }}
            />
        </div>
    );
};