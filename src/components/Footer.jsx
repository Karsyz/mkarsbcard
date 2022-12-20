import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li> 
          <a href='https://twitter.com/karsyzz' target='_blank'>     
          <button className='ftBtn'>
            <i className="fa-brands fa-twitter"></i>
          </button>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/mattkars/' target='_blank'>      
          <button className='ftBtn'>
            <i className="fa-brands fa-linkedin"></i>
          </button>
          </a>
        </li>
        <li>
          <a href='https://mattkars.com' target='_blank'>     
          <button className='ftBtn'>
            <i className="fa-solid fa-briefcase"></i>
          </button>
          </a>
        </li>
        <li>
          <a href='https://github.com/Karsyz' target='_blank'>     
          <button className='ftBtn'>
            <i className="fa-brands fa-github"></i>
          </button>
          </a> 
        </li>
      </ul>
  </div>
  )
}