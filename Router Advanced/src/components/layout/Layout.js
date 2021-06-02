import React from "react";
import MainNavigation from './MainNavigation';
import Styled from './Layout.module.css';

function Layout(props){
    return(
        <React.Fragment>
            <MainNavigation />
            <main className={Styled.main}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout;