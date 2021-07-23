export const getState = state => state;

export const getunComplectedStatus = params => store => {
    const result = getState(store).todoList?.filter(todos => {
        return params === 'COMPLEDET' ? todos.completed : !todos.completed
    });
    return result
}