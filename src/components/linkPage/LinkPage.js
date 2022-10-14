import './style/linkPage.scss';

const LinkPage = ({ img, children, style }) => {
    return (
        <nav className="linkPage" style={style}>
            <img className="linkPage__img" src={img} alt="coffee" />
            {children}
        </nav>
    )
};

export default LinkPage;