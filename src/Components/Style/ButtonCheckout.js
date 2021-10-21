import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    width: 250px;
    height: 65px;
    margin: 0 auto;
    font-size: inherit;
    font-family: inherit;
    color: white;
    background-color: #299b01;
    border-color: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: 0.3s;
    &:hover {
        color: #299b01;
        background-color: white;
        border-color: #299b01;
    }
    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`;