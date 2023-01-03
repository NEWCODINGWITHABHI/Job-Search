import React from 'react'
import upload from '../../assets/upload.png'
function CvUpload() {
  return (
    <div className='cv-section'>
    <div className='cv-container'>
      <div className='cv-content'>
    Get Matched The Most Valuable Jobs,Just Drop Your CV at Job-Place Solutions
      </div>
      <p className='cv-subcontent'>In the subject line of email, write your name, the description of the position you want to apply</p>
      <div className='upload-box'>
        <img src={upload} alt="upload"/>
        <button>Upload Your CV</button>
      </div>
     </div>
    </div>
  )
}

export default CvUpload
