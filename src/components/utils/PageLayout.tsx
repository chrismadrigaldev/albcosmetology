import { ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../header/Navbar";

type PageLayoutProps = { children : ReactNode };

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <>
            
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default PageLayout;