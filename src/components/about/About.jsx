import React, {useEffect} from 'react'
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import './About.css'
import $ from "jquery"
const About = () => {
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
                    <div className="col-lg-6 col-sm-12 scroll p-lg-2 p-3">
<div className="wid-titles mt-5">

<span>
About Me</span> 
</div>
<div class="about-text mt-5 stak-sd">
Co-Founder of V-Tech & V-Zone Solutions | Blockchain & Cryptocurrency Expert | Developer | Motivational Speaker | I am a successful Entrepreneur and one of the best Youngest Motivational Speaker of Pakistan. My motto is helping others to fulfil their dreams by using the power of technology.

So, i worked on Blockchain Technology because of decentralization, transparency, security, and Immutability &  it has the potential to revolutionize various sectors by providing trust, security, and efficiency in peer-to-peer transactions and data management.

I want to use my skills and knowledge to make other people's jobs easier and more productive.

Technology is a passion of mine, and i enjoy nothing more than learning and teaching others.

</div>
                    <div className="wid-titles mt-5">

<span>
PROFESSIONAL OBJECTIVE</span> 
</div>
<div class="about-text mt-5 stak-sd col-sm-12 d-block">
   <span className='About_to'>
      <BiSolidRightArrowAlt  />
To build a long-term career in a new technology industry with opportunities for career growth.

   </span>
   <br></br>
   <br></br>
   <span className='About_to'>
      <BiSolidRightArrowAlt  />
   To enhance my educational and professional skills in a stable and dynamic workplace

   </span>
   <br></br>
   <br></br>
   <span className='About_to'>
      <BiSolidRightArrowAlt  />
   To solve problems in a creative and effective manner in a challenging position.

   </span>
   <br></br>
   <br></br>
   <span className='About_to'>
      <BiSolidRightArrowAlt  />
To obtain employment with a company that offers a positive atmosphere to learn and implement new skills and technologies for the betterment of the organization.

   </span>

</div>
<div className="wid-titles mt-5">

<span>
Skils</span> 
</div>
<div class="about-text mt-5 stak-sd">
<div class="fn_cs_progress_wrap" data-strip="off"><div class="fn_cs_progress" data-value="100"><span><span class="label"> Entrepreneurship</span><span class="number">100%</span></span><div class="fn_cs_bar_bg"><div class="fn_cs_bar_wrap open"><div class="fn_cs_bar" style={{width: "100%"}}></div></div></div></div></div>
</div>
<div class="about-text mt-5 stak-sd">
<div class="fn_cs_progress_wrap" data-strip="off"><div class="fn_cs_progress" data-value="100"><span><span class="label"> Business Development
</span><span class="number">90%</span></span><div class="fn_cs_bar_bg"><div class="fn_cs_bar_wrap open"><div class="fn_cs_bar" style={{width: "90%"}}></div></div></div></div></div>
</div>
<div class="about-text mt-5 stak-sd">
<div class="fn_cs_progress_wrap" data-strip="off"><div class="fn_cs_progress" data-value="100"><span><span class="label"> Business Strategy
</span><span class="number">90%</span></span><div class="fn_cs_bar_bg"><div class="fn_cs_bar_wrap open"><div class="fn_cs_bar" style={{width: "90%"}}></div></div></div></div></div>
</div>
<div class="about-text mt-5 stak-sd">
<div class="fn_cs_progress_wrap" data-strip="off"><div class="fn_cs_progress" data-value="100"><span><span class="label"> Market Analysis
</span><span class="number">86%</span></span><div class="fn_cs_bar_bg"><div class="fn_cs_bar_wrap open"><div class="fn_cs_bar" style={{width: "86%"}}></div></div></div></div></div>
</div>
<div class="about-text mt-5 stak-sd">
<div class="fn_cs_progress_wrap" data-strip="off"><div class="fn_cs_progress" data-value="100"><span><span class="label"> Negotiation
</span><span class="number">88%</span></span><div class="fn_cs_bar_bg"><div class="fn_cs_bar_wrap open"><div class="fn_cs_bar" style={{width: "88%"}}></div></div></div></div></div>
</div>
<div class="about-text mt-5 stak-sd">
<div class="fn_cs_progress_wrap" data-strip="off"><div class="fn_cs_progress" data-value="100"><span><span class="label"> Team Management
</span><span class="number">97%</span></span><div class="fn_cs_bar_bg"><div class="fn_cs_bar_wrap open"><div class="fn_cs_bar" style={{width: "97%"}}></div></div></div></div></div>
</div>
<div class="about-text mt-5 stak-sd">
<div class="fn_cs_progress_wrap" data-strip="off"><div class="fn_cs_progress" data-value="100"><span><span class="label"> Market Research
</span><span class="number">87%</span></span><div class="fn_cs_bar_bg"><div class="fn_cs_bar_wrap open"><div class="fn_cs_bar" style={{width: "87%"}}></div></div></div></div></div>
</div>

<div className="wid-titles mt-5">

<span>
EXPERIENCE</span> 
</div>

<div class="about-text mt-5 stak-sd d-block">
   <p className="mb-3 about_bt stak-sd">Feb 2021 - Now</p>
<h4 className='mb-3 fs-lg-5'>V ZONE SOLUTION<br></br>Co-Founder</h4>
Blockchain technology revolutionizes identity management by providing
a decentralized, tamper-proof, and user-centric approach. It empowers
ndividuals with greater control over their digital identities while enhancing
security and privacy.
</div>
<div class="about-text mt-5 stak-sd d-block">
<p className="mb-3 about_bt stak-sd">2020 - Now</p>
<h4 className='mb-3'> Virtual Tech<br></br>CEO</h4>
We are in the business of developing world quality blockchain-based development services that are readily accessible and highly affordable. Get in touch with us and enrich your business with expertise.
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

export default About
