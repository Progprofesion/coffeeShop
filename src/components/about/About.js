import "./about.scss"
import "../../styles/fontSize.scss";
import coffeeBeansIconBlack from "./img/coffeeBeansIconBlack.svg";

const About = () => {
    return (
        <div className="about">
            <h2 className="about__title">About Us</h2>
            <div className="about__item">
                <div className="about__item-line"></div>
                <img src={coffeeBeansIconBlack} alt="coffeeBeans" />
                <div className="about__item-line"></div>
            </div>
            <h3 className="about__descr fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.</h3>
            <h3 className="about__descr fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</h3>

        </div>


    )
}

export default About;