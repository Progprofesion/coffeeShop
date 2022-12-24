import './linkPage.scss';

interface LinkPageInterface {
    img: string,
    children?: any // !
    style?: object,
    title?: string,
}

const LinkPage = ({ img, children, style }: LinkPageInterface) => {
    return (
        <nav className="linkPage" style={style}>
            <img className="linkPage__img" src={img} alt="coffee" />
            {children}
        </nav>
    )
};

export default LinkPage;

export { LinkPageInterface }