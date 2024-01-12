import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TotalItems from './components/TotalItems'


function App() {
 

  return (
    <div className='container bg-light p-4 mt-5'>
      <h1>Todo List</h1>
      <AddTodo/>
      <TodoList/>
      <TotalItems/>
    </div>
  )
}

export default App
