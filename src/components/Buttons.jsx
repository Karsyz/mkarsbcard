import React from 'react'

export default function Buttons() {
  return (
    <div className='buttons'>
      <a href='mailto:mattkars@gmail.com' target='_blank'>
        <button className='email'>
          <i className="fa-solid fa-envelope"></i>
          <span>Email</span>
        </button>
      </a>
      <a href='https://www.linkedin.com/in/mattkars/' target='_blank'>
        <button className='linkedIn'>
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </button>
      </a>
  </div>
  )
}