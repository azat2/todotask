export const todoState = (state = {todoList: []}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                id: action.id,
                text: action.text,
                completed: false
            };
            return {
                ...state,
                todoList: [...state.todoList, newTodo]
            }
        case 'CHANGE_STATUS':
            debugger
            return {
                ...state,
                todoList: state.todoList.map(todoItem =>
                    (todoItem.id === action.id) ?
                        {...todoItem, completed : action.status}: todoItem)
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todoItem =>
                    todoItem.id !== action.id)
            }
        case 'EDIT_TEXT':
            debugger
            return {
                ...state,
                todoList: state.todoList.map(todoItem =>
                    (todoItem.id === action.id) ?
                        {...todoItem, text : action.newText}: todoItem)
            }
        default:
            return state;
    }
}


