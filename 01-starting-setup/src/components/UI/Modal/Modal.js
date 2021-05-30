import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Modal = props =>{
    const portalElement = document.getElementById('root-modal');
    return(
    <React.Fragment>
        {
            ReactDOM.createPortal(
            <div className={classes.backdrop} onClick={props.onClose}>
                <div className={classes.modal} onClick = {event => event.stopPropagation()}>
                    {props.children}
                </div>
            </div>, portalElement)
        }
    </React.Fragment>);
}
export default Modal;