import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'

function TodoItem() {
    const dispatch = useDispatch()

   const deletetodo = () =>{
    dispatch(deleteTodo())
   }
  return (
    <li className='mt-3'>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
					></input>
					todo
				</span>
				<button onClick={deletetodo}  className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
  )
}

export default TodoItem