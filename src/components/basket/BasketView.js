import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const BasketView = ({ id, img, title, country, price, quantity, incr, decr, ...rest }) => {

    const nodeRef = useRef(null);

    return (
        <CSSTransition {...rest} key={id} nodeRef={nodeRef} timeout={500} classNames="basketView__wrapper" >
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
                        <button onClick={() => incr(id, price)} className="basketView__btnWrapper-btn">+</button>
                        <button onClick={() => decr(id, price)} className="basketView__btnWrapper-btn">-</button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default BasketView