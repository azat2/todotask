import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewItemMiddleware } from '../../store/actions'

const AddItem = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewItemMiddleware(inputValue));
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>ADD ITEM</label>
            <input type='text' value={inputValue} onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddItem