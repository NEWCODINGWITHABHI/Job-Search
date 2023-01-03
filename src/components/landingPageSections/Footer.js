import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
  
     <div className='footer-subscribe'>
      <div className='left-sub'>
        Never Want to Miss 
        Any <span>Job News ?</span>
      </div>
      <div className='right-sub'>
    
      <input type="text" placeholder='Enter your  email'/>
        <button>Subscribe</button>
      </div>
     </div>
     <div className='footer-body'>
      <ul>
        <li>Job<span>Solution</span></li>
        <li>About</li>
        <li>Jobs</li>
        <li>Contact Us</li>
        <li>Terms</li>
        <li>Privacy Policy</li>
        <li>About</li>

      </ul>
     </div>
     <div className='footer-bottom'>
      @JobSolution All right reserved
     </div>
    </div>
  )
}

export default Footer;
