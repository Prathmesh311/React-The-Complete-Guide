import { NavLink } from 'react-router-dom';
import styled from './MainHeader.module.css';

function MainHeader(){
    return(
        <header className={styled.header}>
            <ul>
                <li>
                    <NavLink activeClassName={styled.active} to='/welcome'>
                        Welcome
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styled.active} to='/products'>
                        Products
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default MainHeader;