import React from 'react'
import logo from '../images/logo.svg'
import Menu from '../images/icon-menu.svg'
import Close from '../images/icon-menu-close.svg'
import './Header.css'

const handleMenu =()=>{
  let x:HTMLElement | null = document.getElementById('toggler');
  let y:HTMLElement | null = document.getElementById('nav-link')
  let status: String | null | undefined = x?.getAttribute('data-status');
  if(status){
    if(status === "1"){
      x?.setAttribute('data-status','0');
      y?.setAttribute('data-status','0');
    }else{
      x?.setAttribute('data-status','1');
      y?.setAttribute('data-status','1');
    }
  }
}

const Header = ():React.ReactElement => {
  return (
    <header className='header-wrapper flex align-center'>
        <img src={logo} />
        <nav className='nav-wrapper m-leftauto'>
          <button onClick={handleMenu} id="toggler" data-status='0'>
            <img src={Menu} id="MenuIco" className="toggle-menu"/>
            <img src={Close} id="CloseIco" className="toggle-close"/>
          </button>
          <ol className='gap2' id="nav-link" data-status="0">
            <li><a href="#" className='p1' target={`_blank`}>Home</a></li>
            <li><a href="#" className='p1' target={`_blank`}>New</a></li>
            <li><a href="#" className='p1' target={`_blank`}>Popular</a></li>
            <li><a href="#" className='p1' target={`_blank`}>Trending</a></li>
            <li><a href="#" className='p1' target={`_blank`}>Categories</a></li>
          </ol>
        </nav>
    </header>
  )
}

export default Header