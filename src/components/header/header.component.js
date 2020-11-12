import React from 'react';
import { MDBIcon, MDBNavItem, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import './header.styles.css';

class Header extends React.Component {
    state = { isOpen: false };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <strong>COLD ASSETS</strong>
                    </div>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse isOpen={this.state.isOpen} navbar>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item active'>
                                <NavLink className='navlink' to='/'>
                                    Home
                                    <span className='sr-only'>(current)</span>
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                {/* <a className='nav-link' href='#' target='_blank'> */}
                                <NavLink className='navlink' to='/services'>
                                    Services and Support
                                </NavLink>
                                {/* </a> */}
                            </li>
                            <li className='nav-item'>
                                <NavLink className='navlink' to='/aboutus'>
                                    About us
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='navlink' to='/contactus'>
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                        <ul className='navbar-nav nav-flex-icons'>
                            <MDBNavItem>
                                <a href='https://www.facebook.com' className='nav-link' target='_blank' rel='noreferrer'>
                                    <i className='fab fa-facebook-f'></i>
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='https://twitter.com' className='nav-link' target='_blank' rel='noreferrer'>
                                    <i className='fab fa-twitter'></i>
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='tel: 972-302-9892' className='nav-link' target='_blank' rel='noreferrer'>
                                    <MDBIcon icon='phone' className='pr-2' />
                                    817 876 4673
                                </a>
                            </MDBNavItem>
                        </ul>
                    </MDBCollapse>
                </div>
            </nav>
        );
    }
}

export default Header;
