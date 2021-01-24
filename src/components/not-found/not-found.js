import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    console.log('NotFound')
    return (
        <section className={'not-found'}>
            <h2 className={'not-found__code'}>404</h2>
            <p className="not-found__back">
                back to <Link to={'/login'} className={'not-found__back-link'}>login</Link> or <Link to={'/signup'} className={'not-found__back-link'}>sign up</Link> page
            </p>
        </section>
    )
}

export default NotFound