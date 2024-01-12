import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'


function AddTodo() {
  const [value,setValue] = useState()
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(
      addTodo({
          title:value
      })
      
      )
  }
  return (
    <form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
    <label className='sr-only'>Name</label>
    <input
      type='text'
      className='form-control mb-2 mr-sm-2'
      placeholder='Add todo...'
      value={value}
      onChange={(event) => setValue(event.target.value)}
    ></input>

    <button type='submit' className='btn btn-primary mb-2'>
      Submit
    </button>
  </form>
  )
}

export default AddTodo