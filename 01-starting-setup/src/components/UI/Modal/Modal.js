import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Modal = props =>{
    const portalElement = document.getElementById('root-modal');
    const showCart = props.show;
    return(
    <React.Fragment>
        {
            ReactDOM.createPortal(
            <div className={classes.backdrop}>
                <div className={classes.modal}>
                    {props.children}
                </div>
            </div>, portalElement)
        }
    </React.Fragment>);
}
export default Modal;