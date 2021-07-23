import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { todoState } from './reducers/addTodo'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    todoState
}
const persistedReducer = persistReducer(persistConfig, todoState)
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(persistedReducer, composedEnhancer)
export const persistedStore = persistStore(store)
