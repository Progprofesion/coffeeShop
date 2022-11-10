import { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const BasketView = ({ id, img, title, country, price, quantity, incr, decr, isDisabled, ...rest }) => {

    const nodeRef = useRef(null);

    useEffect(() => {

    }, [isDisabled])


    const test = setTimeout(() => {
        isDisabled = false;
        console.log(isDisabled)
    }, 500)

    console.log(test)
    return (
        <CSSTransition {...rest} key={id} nodeRef={nodeRef} timeout={500}
            classNames="basketView__wrapper" >
            <div key={id}
                ref={nodeRef}
                className="basketView__wrapper">
                <Link to={`/ourcoffee/${id}`}>
                    <img src={img} alt="coffee" className="basketView__img" />
                </Link>
                <div className="basketView__quantity">{quantity}</div>
                <div className="basketView__result">
                    <div className="basketView__subtitle">{title}</div>
                    <div className="basketView__country">{country}</div>
                    <div className="basketView__price">{price}</div>
                    <div className="basketView__btnWrapper">
                        <button
                            disabled={isDisabled ? test : false}
                            onClick={decr}
                            className="basketView__btnWrapper-btn">-</button>
                        <button
                            onClick={incr}
                            className="basketView__btnWrapper-btn">+</button>
                    </div>
                </div>
            </div>
        </CSSTransition>

    )
}

export default BasketView