import React from 'react';
import { StyledInput } from '../../styledComponents/index.js';

export function DateInput(props) {
    return (
        <div>
            <label for='date'>Start date:</label>
            <StyledInput
                type='date' id='date' name='selectedDate'
                value='2022-01-01'
                min='2022-01-01' max='2100-01-01'
                onChange={props.onChange}/>
        </div>
    );
}