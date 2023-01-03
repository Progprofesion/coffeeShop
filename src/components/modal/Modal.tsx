import './modal.scss';

interface Imodal {
    active: boolean;
    setActive: (value: boolean) => void
    children: []
}


const Modal = ({ active, setActive, children }: Imodal) => {
    return (
        <div className={active ? 'modal activeModal' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content activeModal' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default Modal;