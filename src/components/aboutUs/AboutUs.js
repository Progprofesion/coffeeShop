import IconLine from "../iconLine/IconLine";

import coffeeBeansIconBlack from "src/assets/coffeeBeansIconBlack.svg";

import "./aboutUs.scss"

const AboutUs = () => {
    return (
        <section className="aboutUs">
            <div className="container">
                <h2 className="aboutUs__title fz-24">About Us</h2>
                <IconLine img={coffeeBeansIconBlack} style={{ border: '1px solid black' }} />
                <p className="aboutUs__descr fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
                <p className="aboutUs__descr fz-14">Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</p>
            </div>
        </section>
    )
}

export default AboutUs;