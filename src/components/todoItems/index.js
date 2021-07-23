import React, {lazy} from 'react';
const InputForm = lazy(() => import('../inputForm'));

const TodoItems = () => <InputForm title='TODOS' checked={false} status={true}/>


export default TodoItems