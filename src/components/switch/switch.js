
import React from 'react';
import './switch.css';

export function Switch(props) {
  return (
    <div>
      <label className='switch'>
          <input type='checkbox' name='isCalculateByTotalAmont' onChange={props.onChange}/>
          <span className='slider round'></span>
      </label>
      <span className='label'>
        {props.title}
      </span>
    </div>
  )
}
