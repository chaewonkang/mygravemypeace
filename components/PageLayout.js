import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
    const router = useRouter();
    const transparentPage = "/";
    const includePage = [];

    return (
        <div>
            {transparentPage === router.asPath ? (
                <Header isTransparent />
            ) : (
                <Header isTransparent={false} />
            )}
            <div id="body">{children}</div>
            {includePage.includes(router.asPath) && <Footer />}
        </div>
    );
};

export default PageLayout;
