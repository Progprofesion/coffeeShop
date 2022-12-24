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
                <img src="https://img.icons8.com/color/48/null/html-5--v1.png" alt={'HTML'} />
                <img src="https://img.icons8.com/fluency/48/null/css3.png" alt={'CSS'} />
                <img src="https://img.icons8.com/color/48/null/javascript--v1.png" alt={'JS'} />
                <img src="https://img.icons8.com/fluency/48/null/typescript--v2.png" alt={'TS Icon'} />
                <h3>Tools:</h3>
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt={'React'} />
                <img src="https://img.icons8.com/color/48/null/redux.png" alt={'redux'} />
                <img src="https://img.icons8.com/color/48/null/figma--v1.png" alt={'Figma'} />
                <img src="https://img.icons8.com/color/48/null/visual-studio-code-2019.png" alt={'Icon'} />
                <img src="https://img.icons8.com/color/48/null/git.png" alt={'git'} />
                <img src="https://img.icons8.com/color/48/null/sass-avatar.png" alt={'SASS'} />
                <img src="https://img.icons8.com/color/48/null/webpack.png" alt={'webPack'} />
                <img src="https://img.icons8.com/color/48/null/bootstrap.png" alt={'Bootstrap'} />
                <Link to={'/'}>
                    <button className="startPage__btn">Click</button>
                </Link>
            </div>
        </section>
    )
}

export default StartPage