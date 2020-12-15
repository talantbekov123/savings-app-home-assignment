import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 308px;
    height: 42px;
    background: #2F80ED;
    border-radius: 10px;
    border: none;
    color: white;
    text-decoration: none;
    display: inline-block;
`

export function Button(props) {
    return (
        <StyledButton className='button' type='button'>{props.title}
        </StyledButton>
    );
}