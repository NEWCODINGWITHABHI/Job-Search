import React from 'react'
import cardImg from '../../assets/Ellipse 89.png'
function FeatureJobs() {
  let arr=[1,2,3,4,5,6,7,8];
  return (
    <div className='featured-job '>
      <h2 className='heading'>Featured Job Circulars</h2>
      <div className='featured-card-wrapper'>
    {
    arr.map((curr,i)=>{
        return (
          <div className='featured-job-card' key={i}>
      <div className='card-heading'>
        <img src={cardImg}/>
        <div>
          <h4>Microsoft</h4>
          <h5>Freelance</h5>
        </div>

      </div>
      <h3 className='job-title'>Senior UI Designer</h3>
      <span className='full-time'>Fulltime</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos quae aliquid magni. Ipsa iusto quae, error quaerat aperiam .</p>
    <div className='month-apply'>
      <span className='month'>$2500/month</span>
      <span className='apply'>Apply Now</span>
    </div>
      </div>
        )
      })
    }
    

      </div>
      <div className='find-more-job'>
        <button>Find More Jobs</button>
      </div>
    </div>
  )
}

export default FeatureJobs
