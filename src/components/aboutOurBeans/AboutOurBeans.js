import IconLineBlack from "../iconLine/IconLineBlack";
import girlCoffee from './girlCoffee.svg';
import './aboutOurBeans.scss';

const AboutOurBeans = () => {
    return (
        <>
            <section className="aboutBeans">
                <img src={girlCoffee} alt="" className="aboutBeans__girl" />
                <div className="aboutBeans__descr fz-24">
                    <h2 className="aboutBeans__title fz-24">About our beans</h2>
                    <IconLineBlack />
                    <p className="aboutBeans__text fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                        <br />

                        Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an. Last ask him cold feel <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                        is song that held help face.</p>
                </div>
            </section>
            <div className="aboutBeans__line"></div>
        </>
    )
};

export default AboutOurBeans;