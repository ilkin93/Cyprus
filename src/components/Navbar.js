import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button'


export class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

                <Link to="/">
                    Home
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/card" className="ml-auto">
                    <ButtonContainer>
                       <span className="mr-2">
                           <i className="fa fa-cart-plus">My Cart</i>
                       </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform: capitalize !important;
    }



`;

export default Navbar;

