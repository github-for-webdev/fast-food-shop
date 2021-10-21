import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    column-count: 2;
    column-gap: 15px;
    max-width: 500px;
    margin: 0 auto;
`;

const ChoiceRadio = styled.input`
    margin-right: 5px;
    cursor: pointer;
`;

const ChoiceLabel = styled.label`
    display: block;
    cursor: pointer;
`;

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выбирайте:</h3>
            <ChoiceWrap>
                {openItem.choices.map((item, i) => (
                    <ChoiceLabel key={i}>
                        <ChoiceRadio
                            type='radio'
                            name='choices'
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                        />
                        {item}
                    </ChoiceLabel>
                ))}
            </ChoiceWrap>
        </>
    )
}