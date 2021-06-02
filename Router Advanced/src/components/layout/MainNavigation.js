import { NavLink } from 'react-router-dom';
import styled from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <header className={styled.header}>
            <div className={styled.logo}>Great Quotes</div>
            <nav className={styled.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={styled.active} to='/quotes'>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styled.active} to='/new-quote'>
                            New Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;