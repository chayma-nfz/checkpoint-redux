import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { addTask } from '../Redux/Actions/actions'



const AddTask = () => {

  const [inputTitle, setInputTitle] = useState("");

  const dispatch = useDispatch()


  return (
    <div>
      <div className="row m-5">
        <Form.Control type="text"   onChange={(e) => setInputTitle(e.target.value)}
          value={inputTitle} className=" col form-control" 
        />
        <Button variant="primary" className=" btn btn-primary"
          onClick={() => {
            dispatch(addTask({ id: Math.random(), title: inputTitle, isDone: false }))
            setInputTitle("")
          }}
        >Add</Button>
      </div>
    </div>
  )
}

export default AddTask
