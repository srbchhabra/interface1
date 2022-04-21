import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./formpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import upload from "./upload.jpeg"
import { useRef } from 'react';
import {firestore} from "./firebase";
import{addDoc,collection} from "@firebase/firestore";
import {fireEvent} from "@testing-library/react";

function Formpage() {
  const messageRef =useRef();
  const ref= collection(firestore,"user_data");
  const handlesave = async(e) => {
    e.preventDefault();
  console.log(messageRef.current.value);
  let data={
    value:messageRef.current.value,
  };
  try{
    addDoc(ref, data);
  } catch (e) {console.log(e);
  }
};
  return (
    <div className="formstyle" >
        <p className="text-start fw-normal fs-5 fw-normal">Personal Details</p>
         <Form onSubmit= {handlesave} >
    <Form.Group className="mb-3 mt-4 text-start d-flex  " controlId="formBasicEmail">
      
      <Form.Control type="text" ref={messageRef} className="rounded-0" placeholder="Display Name" />
      
      <Form.Control type="email" ref={messageRef}  className="ms-3 rounded-0" placeholder="E-Mails" />
      
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
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label text-start fw-bold">What subjects are you qualified to teach?  </label>
   
    <textarea className="form-control w-100 rounded-0 " input type="text"  data-role="tagsinput" id="exampleFormControlTextarea1" rows="3"> </textarea>

  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label text-start fw-bold">What branches of math do you teach?  </label>
   
    <textarea className="form-control w-100 rounded-0 " input type="text"  data-role="tagsinput" id="exampleFormControlTextarea1" rows="3"> </textarea>

  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label text-start fw-bold">What branches of Science do you teach?  </label>
   
    <textarea className="form-control w-100 rounded-0 " input type="text"  data-role="tagsinput" id="exampleFormControlTextarea1" rows="3"> </textarea>

  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label text-start fw-bold">Describe your teaching specialization(s).  </label>
   
    <textarea className="form-control w-100 rounded-0 " input type="text"  data-role="tagsinput" id="exampleFormControlTextarea1" rows="3"> </textarea>

  </div>

  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
  Experience teaching students with disabilities
  </label>
</div>

<Form.Group controlId="formFile" className="mt-5 mb-3 text-start fw-bold">
    <Form.Label>Upload Teaching License</Form.Label>
    
    <Form.Control type="file" className="form2" />
  </Form.Group>
 
    
      </div>
      <div className="uploadSec">
      <img src={upload} className="uploadLogo" alt="" />
    Browse files or Drag and Drop here(Only pdf and jpeg)

  </div>
    <Button variant="primary" type="submit">
     Save and Next
    </Button>
  </Form>
  
  
  
  </div>
  
  )
}

export default Formpage
