import React from 'react';
import {Element} from 'react-scroll';
import './topContainer.css';


const topContainer = () => {
  return (

    <Element  name='About' className='topContainer'> 
    {/* <img src={TopContent} alt='top-content' className='top-content'/> */}
    <div className='text-content'>
      <h3 className='head' style={{color:"white"}}>Ignite Your Imaginations</h3>
    <p className='para1'>Reach your business through a large digital customer base. We’ll help your dream come true.</p>
    </div>
    </Element>
  )
}

export default topContainer;
   