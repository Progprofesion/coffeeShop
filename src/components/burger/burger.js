import './burger.scss';

const Burger = () => {

    const activeBurgerClass = (e) => {
        e.preventDefault()
        e.currentTarget.classList.toggle('active')
        return
    }

    return (
        <div className="hamburger"
            onClick={activeBurgerClass}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger