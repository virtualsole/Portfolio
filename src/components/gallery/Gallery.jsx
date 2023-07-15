import React, {useEffect} from 'react'
import $ from "jquery"
import Gall from '../../assets/B612_20210826_175456_724.jpg'
// import Gall1 from '../../assets/P8.jpg'
// import Gall2 from '../../assets/P7.jpg'
import Gall8 from '../../assets/B612_20200821_012356_497.jpg'
import Gall6 from '../../assets/B612_20201229_165927_827.jpg'
import Gall5 from '../../assets/B612_20210205_003401_466_cleanup.jpg'
import Gall4 from '../../assets/P13.jpg'
import Gall7 from '../../assets/B612_20200205_012205_461.jpg'
import Gall3 from '../../assets/IMG_0008 copy.jpg'
// import Gall9 from '../../assets/B612_20210101_010811_862.jpg'
const Gallery = () => {
  useEffect(() => {
    // Example jQuery code
    $('.full-landing-image').ripples({
      resolution: 256,
      perturbance: 0.05,
    });
  }, []);
  return (
    <section>
     <div className="container bg_home ml-3 ">
     <div className="row">
     <div className="col-lg-6 col-sm-12 img_men ">
             
             <div className="full-landing-image"></div>
                            </div>
                    <div className="col-lg-6 col-sm-12 scroll p-lg-2 p-3">
                    <div className="wid-titles mt-5">

<span>
Gallery</span> 
</div>
      <div className="row mt-5">
        <div className="col-12"><img className='img-fluid' src={Gall} alt="" /></div>
       
        
      </div>
      <div className="row mt-5">
        <div className="col-6"><img className='img-fluid change' src={Gall3} alt="" /></div>
        <div className="col-6"><img className='img-fluid' src={Gall4} alt="" /></div>
      </div>
      <div className="row mt-5">
        <div className="col-3"><img className='img-fluid' src={Gall5} alt="" /></div>
        <div className="col-3"><img className='img-fluid' src={Gall6} alt="" /></div>
        <div className="col-3"><img className='img-fluid' src={Gall7} alt="" /></div>
        <div className="col-3"><img className='img-fluid' src={Gall8} alt="" /></div>
     
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

export default Gallery