//imrc + tab
import React, { useState } from 'react';
import { Button } from '../Button';
import { MenuItems } from './MenuItems';

import logo_loopbook_blanco from '../../assets/img/logo.png';
import './Navbar.css';

export const Navbar = () => {

   const [state, setstate] = useState(false);
    
  const handleClick = () => {
       setstate(!state);
   };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">LoopBook </h1>
            <img src={logo_loopbook_blanco} alt="LoopBook"className='fa-loopbook'/>
            <div className="menu-icon" onClick={handleClick}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
              <ul className={state ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>{

                        return(
                        
                                <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}</a>
                                </li>
                        
                        )
                        })}
                
                </ul> 
               
            <Button>Sign up (Proximamente)</Button>
           
        </nav>
    )

}