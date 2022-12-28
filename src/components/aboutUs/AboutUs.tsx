import IconLine from "../iconLine/IconLine";
import Swiper from "../swiper/Swiper";

import coffeeBeansIconWhite from 'src/assets/icons/coffeeBeansIconWhite.svg'

import "./aboutUs.scss"

interface AboutUsInterface {
    style?: React.CSSProperties
    noneDescr?: object
}

const AboutUs = ({ style, noneDescr }: AboutUsInterface) => {
    return (
        <section className="aboutUs">
            <div className="aboutUs__wrapper">
                <Swiper style={style} />
                <div className="container">
                    <h2 style={noneDescr} className="aboutUs__title fz-24">About Us</h2>
                    <IconLine style={noneDescr} img={coffeeBeansIconWhite} />
                    <p style={noneDescr} className="aboutUs__descr fz-14">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                    <div className="aboutUs__coffeeFruit">
                        <p >Coffee is a fruit</p>
                        <p >Coffee is a fruit</p>
                    </div>
                    <p style={noneDescr} className="aboutUs__descr fz-14">Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;