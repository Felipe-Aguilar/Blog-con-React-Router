import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return ( 
        <ContenedorHeader>
            <h1>Mi blog personal</h1>
            <nav>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerca de</NavLink>
            </nav>
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;

    h1{
        margin-bottom: 10px;
        font-size: 26px;
        text-transform: uppercase;
    }

    nav{
        a{
            text-decoration: none;
            color: #148148;
            margin: 0 10px;
            transition: all .3s ease;
            border-bottom: 2px solid transparent;

            &:hover{
                color: #15cc6d;
            }

            &.active{
                border-bottom: 2px solid #15cc6d;
                padding-bottom: 3px;
                color: #15cc6d;
            }
        }
    }

`;

export default Header;