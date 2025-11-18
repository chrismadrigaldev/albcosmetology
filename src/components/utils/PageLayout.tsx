import { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";

type PageLayoutProps = { children : ReactNode };

const PageLayout = ({ children }: PageLayoutProps) => {
    <>
        <Navbar />
        {children}

    </>
};

export default PageLayout;