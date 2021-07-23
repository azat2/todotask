import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

import { deletItem, handleChange, editText } from "../../helpers";
import { getunComplectedStatus } from "../../store/selectors";

const InputForm = ({ title, checked, status}) => {
    const todosData  = useSelector(getunComplectedStatus(title))
    const dispatch = useDispatch();

    const [newText, setNewText] = useState('');
    const [editMode, setEditMode] = useState({});
    const [elementId, setElementId] = useState('')

    useEffect(() => {
        if(newText && !editMode[elementId]){
            editText(elementId, newText, dispatch);
            setNewText('')
        }
    },[newText, editMode])

    /**
     * @name handleTextChange
     * @description set new todo text and id
     * @param id
     * @param e
     */
    const handleTextChange = (id) => (e) => {
        setNewText(e.target.value)
        setElementId(id)
    }

    /**
     * @name changeMode
     * @description change view mode for field's
     * @param id
     */
    const changeMode = (id) => {
        setEditMode(prevState => {
          return {
           ...prevState,
           [id]: !prevState[id],
         }
        })
    }

    return (
        <div>
            <h3>{title}</h3>
            {
                todosData?.map(({id, text}) => {
                    return (
                        <div>
                            <ul className={classNames({
                                'completed-tasks' : title === 'COMPLEDET',
                                'incomplete-tasks': title === 'TODOS'
                            })}>
                                <li key={id} className={classNames({editMode: editMode[id]})}>
                                    <input type='checkbox' onClick={() => handleChange(status, id, dispatch)} defaultChecked={checked}/>
                                    <label>{text}</label>
                                    <input type="text" disabled={!editMode[id]} value={newText || text} onChange={handleTextChange(id)}/>
                                    <button className='edit' onClick={() => changeMode(id)}>Edit</button>
                                    <button className='delete' onClick={() => deletItem(id, dispatch)}>Delete</button>
                                </li>
                            </ul>
                        </div>

                    )
                })
            }
        </div>
    )
}
export default InputForm