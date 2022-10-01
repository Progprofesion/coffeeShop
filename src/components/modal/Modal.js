
import './modal.scss';

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal activeModal' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content activeModal' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default Modal;