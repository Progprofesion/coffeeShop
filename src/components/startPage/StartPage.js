import { Link } from 'react-router-dom';

import './startPage.scss';

const StartPage = () => {
    return (
        <section className="startPage">
            <div className="container">
                <h1 className="startPage__title">Добро пожаловать</h1>
                <h2>Меня завут Горбунов Дмитрий Алексеевич</h2>
                <p>Front-End Software Engineer</p>
                <p>Здесь расположенно мое портфолио и сслыка на основной пет проект React app Магазин по продаже кофе.</p>
                <p> Функционал: добавление, удаление, фильтрация, корзина товаров, поиск, авторизация на TS, localStorage, модальные окна, меню hamburger, оформление товаров, маски для почты и телефона, слайдер, анимации. </p>
                <h3>Languages:</h3>
                <img src="https://img.icons8.com/color/48/null/html-5--v1.png" />
                <img src="https://img.icons8.com/fluency/48/null/css3.png" />
                <img src="https://img.icons8.com/color/48/null/javascript--v1.png" />
                <img src="https://img.icons8.com/fluency/48/null/typescript--v2.png" />
                <h3>Tools:</h3>
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" />
                <img src="https://img.icons8.com/color/48/null/redux.png" />
                <img src="https://img.icons8.com/color/48/null/figma--v1.png" />
                <img src="https://img.icons8.com/color/48/null/visual-studio-code-2019.png" />
                <img src="https://img.icons8.com/color/48/null/git.png" />
                <img src="https://img.icons8.com/color/48/null/sass-avatar.png" />
                <img src="https://img.icons8.com/color/48/null/webpack.png" />
                <img src="https://img.icons8.com/color/48/null/bootstrap.png" />
                <Link to={'/'}>
                    <button className="startPage__btn">Click</button>
                </Link>
            </div>
        </section>
    )
}

export default StartPage