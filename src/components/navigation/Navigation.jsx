import React from 'react'
import {Container} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import Logo from '../../assets/talhakhan_signature-01.png'
import { LinkContainer } from 'react-router-bootstrap';

import './Navigation.css'
import Offcan from './Offcan';
const Navigation = () => {
  return (
    <Navbar className="bg-body-tertiary d-lg-block d-none Tabe">
      <Container className='mobile_res'>
   
        <Navbar.Brand href="#home">
        <LinkContainer to='./'>
          <img src={Logo} alt="" width={114} height={60} />
          </LinkContainer></Navbar.Brand>
         
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end mr-5">
      <Nav>
        <LinkContainer to='./'>
      <Nav.Link className="m-3">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='about'>
      <Nav.Link className="m-3">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to='gallery'>
      <Nav.Link className="m-3">Gallery</Nav.Link>
        </LinkContainer>
        <LinkContainer to='contact'>
      <Nav.Link className="m-3">Contact</Nav.Link>
        </LinkContainer>
        {['end'].map((placement, idx) => (
    <Offcan className="mobile" key={idx} placement={placement} name={placement} />
  ))}
      </Nav>


         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation