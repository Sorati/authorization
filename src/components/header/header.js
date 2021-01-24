import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className={'navigation'}>
            <ul className={'navigation__list'}>
                <li className={'navigation__item'}>
                    <Link to={'/'}>
                        <div className={'navigation__item-profile'}>Profile</div>
                    </Link>
                </li>
                <li className={'navigation__item'}>
                    <div className={'navigation__item-sign-up'}>
                        <Link to={'/signup'}>
                            Sign up
                        </Link>
                    </div>
                    <div className={'navigation__item-login'}>
                        <Link to={'/login'}>
                            Log In
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Header