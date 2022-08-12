import LinkPage from '../linkPage/LinkPage';

import './headBanner.scss';

const HeadBanner = () => {
    return (
        <header className="banner">
            <LinkPage />
            <div className="container">
                <h2 className="banner__title">Our Coffee</h2>
            </div>
        </header>
    )
};

export default HeadBanner;