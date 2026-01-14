import { ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

type PageLayoutProps = { children : ReactNode };

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <>
            
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default PageLayout;