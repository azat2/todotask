import {deletodotItem, markIsCompleted, editItemText } from "../store/actions";

export const handleChange = (status, id, dispatch) => {
    dispatch(markIsCompleted(status, id))
}
export const deletItem = (id, dispatch) => {
    dispatch(deletodotItem(id))
}

export const editText = (id, newText, dispatch) => {
    dispatch(editItemText(id, newText))
}