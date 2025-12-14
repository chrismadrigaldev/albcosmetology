import background from "../../assets/jpg/background.jpg";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <div
            style={{
                width: "100vw",
                minHeight: "100vh",
                backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25)),
                url(${background})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Navbar />
        </div>
    );
};