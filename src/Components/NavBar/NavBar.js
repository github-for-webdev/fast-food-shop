import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import siginImg from '../../image/sign.svg';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 15px;
    color: white;
    background-color: #299b01;
    z-index: 4;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    margin-left: 15px;
    font-size: 24px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    font-size: 16px;
    color: white;
    background-color: transparent;
    border: 0;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

const LogOut = styled.span`
    margin-right: 30px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

const Figure = styled.figure`
    margin: 0 30px;
`;

export const NavBar = () => {
    const { auth: { authentication, logIn, logOut } } = useContext(Context);
    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="лого" />
                <H1>MRDonald's</H1>
            </Logo>
            {authentication ?
                <User>
                    <Figure>
                        <img src={siginImg} alt={authentication.displayName} />
                        <figcaption>{authentication.displayName}</figcaption>
                    </Figure>
                    <LogOut title='Выйти' onClick={logOut}>X</LogOut>
                </User> :
                <Login onClick={logIn}>
                    <Figure>
                        <img src={siginImg} alt="войти" />
                        <figcaption>войти</figcaption>
                    </Figure>
                </Login>
            }
        </NavBarStyled>
    )
};
