import './linkPage.scss';

interface LinkPageInterface {
    img?: string
    children?: React.ReactNode
    style?: object
    title?: string
    styleLine?: React.CSSProperties
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