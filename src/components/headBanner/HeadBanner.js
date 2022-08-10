import LinkPage from '../linkPage/LinkPage';

import './headBanner.scss';


const HeadBanner = () => {
    return (
        <header className="banner">
            <LinkPage />
            <h2 className="banner__title">Our Coffee</h2>
        </header>
    )
};

export default HeadBanner;