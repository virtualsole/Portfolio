import { useState } from 'react';
// import {Container} from 'react-bootstrap';

import { Button, Nav, Navbar, Offcanvas, Form, FormControl } from 'react-bootstrap';
import {CgMenuLeft} from 'react-icons/cg'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Logo from '../../assets/talhakhan_signature-01.png'

import { LinkContainer } from 'react-router-bootstrap';

import './MobileMenu.css'

function MobileMenu({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const closeNav = () => {
    setShow(false);
  };

    
  


  return (
    <div id='mobile_menu'>
      <Navbar.Brand href="#home">
        <LinkContainer to='./'>
          <img src={Logo} alt="" width={64} height={60} />
          </LinkContainer></Navbar.Brand>

   <Button className='lunchs' variant="primary" onClick={handleShow}>
      <CgMenuLeft />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} style={{
        background: "#f1fbf7",
     
        
        
    }}>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body>

        <div className="wid-title mt-5">

<span>Mobile Menu</span> 
</div>
<div className="">
<Navbar>

<Navbar.Collapse className="justify-content-end ">
<Nav className="ml-auto">
          <LinkContainer to='./'>
          <Nav.Link onClick={closeNav}>Home</Nav.Link>
          </LinkContainer>
          <hr />
          <LinkContainer to='about'>
          <Nav.Link onClick={closeNav}>About</Nav.Link>
</LinkContainer>
          <hr />
          <LinkContainer to='gallery'>
          <Nav.Link onClick={closeNav}>Gallery</Nav.Link>
</LinkContainer>
          <hr />
          <LinkContainer to='contact'>
                  <Nav.Link onClick={closeNav}>Contact</Nav.Link>     
</LinkContainer>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
</div>
        <hr className='mb-5'/>
        <Form className='mb-5 pt-2'>
          <Form.Group className="mb-4" controlId="name">
            
            <FormControl
              type="text"
              placeholder="Name"
              
             
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="name">
            
            <FormControl
              type="email"
              placeholder="Email"
            //   value={email}
              
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder='Message' />
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
               <div className='mt-lg-4 mb-lg-4 text-light icons'><a href="#"><FaFacebookF  /></a></div>
               <br></br>
               <div className='text-light mt-lg-4 icons'><a href="#"><FaTwitter /></a></div>
               <br></br>
               <div className='mt-lg-4 mb-lg-4 text-light icons'><a href="#"><FaLinkedinIn /></a></div>
               <br></br>
               <div className='text-light mt-lg-4 icons'><a href=""><FaInstagram /></a></div>
            
               
               </div>
            </div>
            <hr className='mt-3'/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MobileMenu
