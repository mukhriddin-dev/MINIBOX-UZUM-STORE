import {lazy, Suspense} from "react";
import {Outlet} from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<h1>LOADING . . .</h1>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

export default App;
