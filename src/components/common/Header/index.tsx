import React from 'react'

export const Header = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>LGCode</a>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
