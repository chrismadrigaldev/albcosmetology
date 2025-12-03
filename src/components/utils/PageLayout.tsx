import { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

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