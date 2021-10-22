import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    font-size: 30px;
    color: white;
    background-position: center;
    background-size: cover;
    background-image: ${({ img }) => `url(${img})`};
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: black;
        opacity: 0.3;
        z-index: -1;
    }
    &:hover {
        box-shadow: inset 0 0 50px 30px black;
        cursor: pointer;
        &:afet {
            opacity: 0;
        }
    }
`;

export const ListItem = ({ itemList }) => {
    const { openItem: { setOpenItem } } = useContext(Context);
    return (
        <List>
            {itemList.map(item => (
                <Item
                    key={item.id}
                    img={item.img}
                    onClick={() => setOpenItem(item)}>
                    <p>{item.name}</p>
                    <p>{formatCurrency(item.price)}</p>
                </Item>
            ))}
        </List >
    )
};