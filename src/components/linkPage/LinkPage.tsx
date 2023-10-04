import './linkPage.scss';

interface LinkPageInterface {
    img?: string
    children?: React.ReactNode
    style?: object
    title?: string
    styleLine?: React.CSSProperties
    styleImg?: React.CSSProperties
}

const LinkPage = ({ img, children, style, styleImg }: LinkPageInterface) => {
    return (
        <nav className="linkPage animate__animated animate__fadeIn" style={style}>
            <img style={styleImg} className="linkPage__img" src={img} alt="coffee" />
            {children}
        </nav>
    )
};

export default LinkPage;

export { LinkPageInterface }