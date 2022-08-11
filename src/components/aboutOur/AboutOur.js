import IconLineBlack from "../iconLine/IconLineBlack";
import './aboutOur.scss';

const AboutOur = ({ img, title }) => {
    return (
        <section className="aboutOur">
            <div className="aboutOur__wrapper">
                <img src={img} alt="" className="aboutOur__girl" />
                <div className="aboutOur__descr fz-24">
                    <h2 className="aboutOur__title fz-24">{title}</h2>
                    <IconLineBlack />
                    <p className="aboutOur__text fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention <br />
                        so questions.<br />
                        As greatly removed calling pleased improve an. Last ask him cold feel <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                        is song that held help face.</p>
                </div>
            </div>
            <div className="aboutOur__line"></div>
        </section>
    )
};

export default AboutOur;