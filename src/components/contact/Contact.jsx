import React, {useEffect} from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import { useRef } from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import emailjs from 'emailjs-com';
import $ from "jquery"
const Contact = () => {
 
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kde8cna', 'template_xbz4n23', form.current, 'Iie2MuIASZY1-v8k4')
  
    e.target.reset()
  };
  useEffect(() => {
        // Example jQuery code
        $('.full-landing-image').ripples({
          resolution: 256,
          perturbance: 0.05,
        });
      }, []);
  return (
    
    <section>
    <div className="container bg_home ml-3">
    <div className="row">
    <div className="col-lg-6 col-sm-12 img_men ">
             
             <div className="full-landing-image"></div>
                            </div>
                    <div className="col-lg-6 col-sm-12 p-lg-2 p-3">
                      
<div className="wid-titles mt-5">

<span>
Get in Touch</span> 
</div>



<Form className='mt-5 pt-2' ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-4" controlId="name">
            
            <FormControl
              type="text"
              placeholder="Enter your name"
              name='name'
             
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="name">
            
            <FormControl
              type="email"
              placeholder="Enter your Email"
            //   value={email}
            name='email'
              
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" name='message' rows={3} placeholder='Enter Your Message' />
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
        <hr className='mb-2'/>
            <div className="wid-title">

       



            </div>

                    </div>
        </div>
    </div>
    <div className="container">
                <div className="row">
                    <span className='mt-2'>Copyright © 2023 | All Rights Reserved | Mr.Talha</span>
                </div>
            </div>
 </section>
  )
}

export default Contact