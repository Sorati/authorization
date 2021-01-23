import React from 'react'

const NotFound = () => {
    console.log('NotFound')
    return (
        <section className={'not-found'}>
            <h2 className={'not-found__code'}>404</h2>
            <p className="not-found__back">back to main page</p>
        </section>
    )
}

export default NotFound