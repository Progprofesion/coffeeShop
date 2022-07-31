import './footer.scss';
import coffeeBeansIconBlack from '../footer/img/coffeeBeansIconBlack.svg';
import IconLineBlack from '../iconLine/IconLineBlack';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapp">
                <img className="footer__img" src={coffeeBeansIconBlack} alt="coffee" />
                <a className="fz-14Black" href='#'>Coffee house</a>
                <a className="fz-14Black" href='#'>Our coffee</a>
                <a className="fz-14Black" href='#'>For your pleasure</a>
            </div>
            <IconLineBlack />
        </div>
    )
};

export default Footer;