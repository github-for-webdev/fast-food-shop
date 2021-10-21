import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    min-width: 65px;
    margin-right: 10px;
    margin-left: 20px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${trashImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
`;

const Toppings = styled.div`
    width: 100%;
    font-size: 14px;
    color: #9a9a9a;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked).map(item => item.name).join(', ');
    const refDeleteButton = useRef(null);
    return (
        <OrderItemStyled onClick={e => e.target !== refDeleteButton.current && setOpenItem({ ...order, index })}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} />
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
};