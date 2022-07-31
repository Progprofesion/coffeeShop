import './footer.scss';
import IconLineBlack from '../iconLine/IconLineBlack';

import LinkPageBlack from '../linkPage/LinkPageBlack';

const Footer = () => {
    return (
        <div className="footer">
            {/* <div className="footer__wrapp"> */}
            <LinkPageBlack />
            {/* <img className="footer__img" src={coffeeBeansIconBlack} alt="coffee" />
                <a className="fz-14Black" href='#'>Coffee house</a>
                <a className="fz-14Black" href='#'>Our coffee</a>
                <a className="fz-14Black" href='#'>For your pleasure</a> */}
            {/* </div> */}
            <IconLineBlack />
        </div>
    )
};

export default Footer;