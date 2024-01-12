import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux';



function TodoList() {
  const todos = useSelector((state)=>state.todos)

  return (
    <ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
  )
}

export default TodoList