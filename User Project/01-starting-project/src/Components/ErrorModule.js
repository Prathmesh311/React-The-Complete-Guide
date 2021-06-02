import ReactDOM from 'react-dom';
import Card from './Card';
import Wrapper from '../Helper/Wrapper';
import styled from './ErrorModule.module.css';
import but from './Button.module.css';

const Backdrop= props =>{
    return <div className={styled.backdrop} onClick={props.onConfirm}/>;

}

const Overlay= props =>{
    return(
                <Card className={styled.modal}>
                    <header className={styled.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={styled.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={styled.actions}>
                        <button className={but.button} onClick={props.onConfirm}>Ok</button>
                    </footer>

                </Card>
    );
};

function ErrorModule(props){
    return(
        <Wrapper>
            {ReactDOM.createPortal(<Backdrop 
                onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Overlay 
                title={props.title} 
                message={props.message}     
                onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root'))}
                
        </Wrapper>
    )
}

export default ErrorModule;