import { useState } from 'react';

import { Button, Offcanvas, Form, FormControl } from 'react-bootstrap';
import {CgMenuLeft} from 'react-icons/cg'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import './Navigation.css'

function Offcan({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  
    
  


  return (
    <div className='menu'>
   <Button className='lunch' variant="primary" onClick={handleShow}>
      <CgMenuLeft />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} style={{
        background: "#f1fbf7",
     
        
        
    }}>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form className='mb-5 pt-2'>
          <Form.Group className="mb-4" controlId="name">
            
            <FormControl
              type="text"
              placeholder="Enter your name"
              
             
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="name">
            
            <FormControl
              type="email"
              placeholder="Enter your Email"
            //   value={email}
              
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder='Enter Your Message' />
      </Form.Group>
          <Button variant="primary" type="submit" style={{
            backgroundColor: "#000000",
            padding: "13px 45px",
            color: "#fff",
            border: "none"
          }}>
            Send Message
          </Button>
        </Form>
        <hr className='mb-5'/>
            <div className="wid-title mt-5">

            <span>SUBSCRIBE & FOLLOW</span>


            <div className='social-icons ms-lg-5 mt-lg-4'>
               <div className='mt-lg-4 mb-lg-4 text-light icons'><a href="https://www.facebook.com/profile.php?id=100007098705695"><FaFacebookF  /></a></div>
               <br></br>
               <div className='text-light mt-lg-4 icons'><a href="#"><FaTwitter /></a></div>
               <br></br>
               <div className='mt-lg-4 mb-lg-4 text-light icons'><a href="https://www.linkedin.com/in/talha-khan-2a72b3166/"><FaLinkedinIn /></a></div>
               <br></br>
               <div className='text-light mt-lg-4 icons'><a href="https://www.instagram.com/eagletalented/"><FaInstagram /></a></div>
            
               
               </div>
            </div>
            <hr className='mt-3'/>


        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Offcan
