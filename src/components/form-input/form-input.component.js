import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, ...props}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...props} required />
        {
            props.label ? (
                <label className={`${props.value.length > 0 ? 'shrink' : ''} form-input-label`}>{props.label}</label>
            )
            : null
        }
    </div>
);

export default FormInput;