import React from 'react'
import './header.css'

const Header = ({name='Moises'}) => {
  return (
    <div className='header'>
      <img className='imgHeader' alt="" src="https://ph-files.imgix.net/2fb378d7-0035-4a85-817c-e819d8f5dbaa.png?auto=format&auto=compress&codec=mozjpeg&cs=strip" />
      <h2>Hi I'm {name}, a frontend developer</h2>
    </div>
  )
}

export default Header