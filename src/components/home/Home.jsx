import React, {useEffect} from 'react'


import './Home.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import $ from "jquery"


const Home = () => {
    
    useEffect(() => {
        // Example jQuery code
        $('.full-landing-image').ripples({
          resolution: 256,
          perturbance: 0.09,
        });
      }, []);
    return (
        <section>
            <div className="container bg_home ml-3">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 img_men ">
             
     <div className="full-landing-image"></div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5 ml-lg-3">
                        <h1 className='mt-5 stak-sd'>MR.Talha</h1>
                        <div class="animated-text mb-4 stak-sd">
        I am a <span></span>
    </div>

<Link to='about'>
<Button className='stak-sd mb-sm-5' variant="primary" type="submit" style={{
            backgroundColor: "#000000",
            padding: "13px 45px",
            color: "#fff",
            border: "none"

          }}>
            Know More
          </Button>
</Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <span className='mt-2 stak-sd'>Copyright © 2023 | All Rights Reserved | Mr.Talha</span>
                </div>
            </div>
        </section>
    )
}

export default Home
