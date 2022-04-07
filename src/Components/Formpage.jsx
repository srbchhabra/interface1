import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./formpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function Formpage() {
  return (
    <div className="formstyle" >
        <p className="text-start fw-normal fs-5 fw-normal">Personal Details</p>
         <Form>
    <Form.Group className="mb-3 mt-4 text-start d-flex  " controlId="formBasicEmail">
      
      <Form.Control type="text" className="rounded-0" placeholder="Display Name" />
      
      <Form.Control type="email" className="ms-3 rounded-0" placeholder="E-Mails" />
      
    </Form.Group>
  
    <Form.Group className="mt-4 text-start d-flex" controlId="formBasicPassword">
      
      <Form.Control type="text" className="rounded-0" placeholder="Phone number" />
      <Form.Control type="text" className="ms-3 rounded-0" placeholder="Zip Code" />
    </Form.Group>
    <div className="form">
  
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label text-start fw-bold">Teaching Bio(Min 1000 char)  </label>
  
  <textarea class="form-control w-100 rounded-0 " placeholder="enter" id="exampleFormControlTextarea1" rows="3"> </textarea>
</div>
  
    </div>
    <div className="form">
  
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label text-start fw-normal fs-5">Professional Details</label>
    <Form.Group className="mb-3 mt-2 text-start d-flex  " controlId="formBasicEmail">
      
      <Form.Control type="number" className="rounded-0" placeholder="Years Of Experience" />
      
      <Form.Control type="text" className="ms-3 rounded-0" placeholder="Stride Id" />
      
    </Form.Group>
  </div>
    
      </div>
      <div className="form">
  
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label text-start fw-bold">What grade levels are you qualified to teach?  </label>
   
    <textarea className="form-control w-100 rounded-0 " input type="text"  data-role="tagsinput" id="exampleFormControlTextarea1" rows="3"> </textarea>

  </div>
    
      </div>
    <Button variant="primary" type="submit">
     Save and Next
    </Button>
  </Form>
  
  
  </div>
  
  )
}

export default Formpage
