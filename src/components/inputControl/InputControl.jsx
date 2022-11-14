import React from 'react'
import './inputControl.scss';

const InputControl = (props) => {
    return (
        <div className='container-InputControl'>
            {props.label && <label>{props.label}</label>}
            <input type="text" {...props}></input>
        </div>
    )
}

export default InputControl