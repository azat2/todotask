export const addTodoItem = (text, uniqId) => ({
    type: 'ADD_TODO',
    text,
    id: uniqId
})

export const markIsCompleted = (statusType, id) => ({
    type: 'CHANGE_STATUS',
    status: statusType,
    id: id
})

export const deletodotItem = (id) => ({
    type: 'DELETE_TODO',
    id
})

export const editItemText = (id, newText) => ({
    type: 'EDIT_TEXT',
    id,
    newText
})

const fakePromise = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('Success')
           // throw 'Uncaught Exception!';
        },ms)
    })
}

export const addNewItemMiddleware = (text) => {
    return (dispatch) => {
        const uniqId =  Math.floor(Math.random() * 100)
        fakePromise(500).then((response) => {
            response === 'Success' && dispatch(addTodoItem(text, uniqId))
        }).catch(e => {
            console.log(e, 'error')
        })
}}