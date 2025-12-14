import { ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

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