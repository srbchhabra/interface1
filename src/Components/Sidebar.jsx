import React from 'react'
import "./style.css"
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Formpage from './Formpage';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
  return (
    <div>
<div className="container-fluid" id="main" >
<div className="row">
<p className="text">Provide Details</p>
    <div className="col-lg-3">
     <p className="text2" >  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=" white" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>  <a href="#"> Basic Details</a></p>
      <p className="text4"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill=" white" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg><a href="#">Upload Photo</a></p>
      <p className="text3"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg><a href="#">Set Availability</a></p>
<div className="box">
<p className="text-start">Send us an email. </p>
  <p className="text-start">Support@edge.com</p>
</div>

</div>

    <div className="col-lg-9" >
      
    <Formpage/>
    </div>
</div>
</div>

    </div>
  )
}

export default Sidebar