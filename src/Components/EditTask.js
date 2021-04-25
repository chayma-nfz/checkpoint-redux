import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editTask } from '../Redux/Actions/actions';
import 'bootstrap/dist/css/bootstrap.css'



const EditTask = ({ task }) => {

  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>Edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter the new task title ..."
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={() => { dispatch(editTask(task.id, newTitle)); handleClose(); setNewTitle("") }}>
            Edit Task
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask
