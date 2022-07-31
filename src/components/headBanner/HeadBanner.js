import LinkPage from '../linkPage/LinkPage';

import './headBanner.scss';


const HeadBanner = () => {
    return (
        <div className="banner">
            <LinkPage />
            <h2 className="banner__title">Our Coffee</h2>
        </div>
    )
};

export default HeadBanner;