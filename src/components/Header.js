import React from 'react'
import '../styles/components/Header.css';

const Header = ({title, center}) => {
  return (
    <div className='universal_container'>
      <h1 className={'header_text_style '+(center?'text-center':'')}>{title}</h1>
    </div>
  )
}

export default Header
