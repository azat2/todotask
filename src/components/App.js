import { Suspense, lazy } from 'react'
import '../App.scss';

const AddItemComponent = lazy(() => import('./addItem/index'));
const TodoComponent = lazy(() => import('./todoItems/index'));
const CompletedToDos = lazy(() => import('./completed/index'));


const App = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <div className="container">
          <AddItemComponent/>
            <TodoComponent/>
            <CompletedToDos/>
        </div>
    </Suspense>
)

export default App;
