import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import Navigation from './Navigation';

const index = () => {
    return (
        <header>
            <div className="container">
                <HeaderTop />
                <HeaderMiddle />
                <Navigation/>
            </div>
        </header>
    );
};

export default index;