import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    column-count: 2;
    column-gap: 15px;
    max-width: 500px;
    margin: 0 auto;
`;

const ToppingLabel = styled.label`
    display: block;
    cursor: pointer;
`;

const ToppingCheckbox = styled.input`
    margin-right: 5px;
    cursor: pointer;
`;

export function Toppings({ toppings, checkToppings }) {
    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}