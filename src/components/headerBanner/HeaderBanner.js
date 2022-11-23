import { Link } from 'react-router-dom';

import ExitLink from '../exitLink/ExitLink';
import LinkPage from '../linkPage/LinkPage';

import coffeeIcon from 'src/assets/coffeeIcon.svg';

import './headerBanner.scss';

const HeaderPages = ({ style, title }) => {
    return (
        <section className="headerPages" style={style}>
            <LinkPage img={coffeeIcon}>
                <Link to="/" >
                    <div className="fz-14">Coffee house</div>
                </Link>
                <Link to="/ourcoffee">
                    <div className="fz-14">Our coffee</div>
                </Link>
                <Link to="/pleasure">
                    <div className="fz-14">For your pleasure</div>
                </Link>
                <Link to="/basket">
                    <div className="fz-14">Basket</div>
                </Link>
                <ExitLink />
            </LinkPage>
            <h2 className="headerPages__title" >{title}</h2>
            {/* <div className="container aboutOur__wrapper">
                <img src={img} alt="" className="aboutOur__girl" />
                <div className="aboutOur__descr fz-24">
                    <h2 className="aboutOur__title fz-24">{title}</h2>
                    <IconLine img={coffeeBeansIconBlack} style={{ border: "1px solid black" }} />
                    <p className="aboutOur__text fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an. Last ask him cold feel <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                        is song that held help face.</p>
                </div>
            </div> */}
            {/* <div className="aboutOur__line"></div> */}
        </section>
    )
};

export default HeaderPages;