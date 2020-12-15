
import React from 'react';
import { StyledInput } from '../../styledComponents/index.js';

export function TextInput(props) {
    return (
        <div>
            <label for='text'>{(props.isCalculateByTotalAmont) ? 'Total amount' : 'Monthly amount'}:</label>
            <StyledInput
                className='input'
                value={(props.isCalculateByTotalAmont) ? props.totalAmount : props.monthlyAmount}
                name={(props.isCalculateByTotalAmont) ? 'totalAmount' : 'monthlyAmount'}
                onChange={props.onChange}
            />
        </div>
    );
}