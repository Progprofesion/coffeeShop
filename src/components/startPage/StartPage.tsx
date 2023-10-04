import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./startPage.scss";

const StartPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Start page" />
        <title>Start</title>
      </Helmet>
      <section className="startPage">
        <div className="container">
          <h1 className="startPage__title">Добро пожаловать</h1>
          <h4>TS React app Coffee shop</h4>
          <h3>Languages:</h3>
          <img
            src="https://img.icons8.com/color/48/null/html-5--v1.png"
            alt={"HTML"}
          />
          <img
            src="https://img.icons8.com/fluency/48/null/css3.png"
            alt={"CSS"}
          />
          <img
            src="https://img.icons8.com/color/48/null/javascript--v1.png"
            alt={"JS"}
          />
          <img
            src="https://img.icons8.com/fluency/48/null/typescript--v2.png"
            alt={"TS Icon"}
          />
          <h3>Tools:</h3>
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
            alt={"React"}
          />
          <img
            src="https://img.icons8.com/color/48/null/typescript.png"
            alt="TypeScript"
          />
          <img
            src="https://img.icons8.com/color/48/null/redux.png"
            alt={"redux"}
          />
          <img
            src="https://img.icons8.com/color/48/null/figma--v1.png"
            alt={"Figma"}
          />
          <img
            src="https://img.icons8.com/color/48/null/visual-studio-code-2019.png"
            alt={"Icon"}
          />
          <img src="https://img.icons8.com/color/48/null/git.png" alt={"git"} />
          <img
            src="https://img.icons8.com/color/48/null/sass-avatar.png"
            alt={"SASS"}
          />
          <img
            src="https://img.icons8.com/color/48/null/webpack.png"
            alt={"webPack"}
          />
          <img
            src="https://img.icons8.com/color/48/null/bootstrap.png"
            alt={"Bootstrap"}
          />
          <a
            className="startPage__link"
            rel="stylesheet"
            href={"https://github.com/Progprofesion/coffeeShop"}
          >
            Link to Github
          </a>
          <Link to={"/main"}>
            <button className="startPage__btn">
              <span>Start</span>
            </button>
          </Link>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default StartPage;
