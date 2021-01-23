import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className={'navigation'}>
            <ul className={'navigation__list'}>
                <li className={'navigation__item'}>
                    <div className={'navigation__item-profile'}>Profile</div>
                </li>
                <li className={'navigation__item'}>
                    <div className={'navigation__item-sign-up'}>Sign up</div>
                    <div className={'navigation__item-login'}>Log In</div>
                </li>
            </ul>
        </nav>
    )
}

export default Header