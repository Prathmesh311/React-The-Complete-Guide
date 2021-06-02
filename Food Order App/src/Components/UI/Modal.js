import React from 'react';
import ReactDOM from 'react-dom';
import styled from './Modal.module.css';

function Backdrop(props){
    return (
        <div className={styled.backdrop} onClick={props.onClick}></div>
    )
}

function ModalOverlay(props){
    return(
        <div className={styled.modal}>
            <div className={styled.content}>{props.children}</div>
        </div>
    )
}

function Modal(props){
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop  onClick={props.onClose}/>, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </React.Fragment>
    )

}

export default Modal;