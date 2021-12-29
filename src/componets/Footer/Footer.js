import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {IoLogoGooglePlaystore} from "react-icons/io5"
import './footer.css';

export const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer__social">
        <a href="https://www.instagram.com/loopbook_es/">
           <FaInstagram size="50" color="#ffa41b"/>
        </a>
        <a href="https://www.facebook.com/LoopBook-112711150576969/">
           <FaFacebookSquare size="50" color="#ffa41b" />
        </a>  
        <a href="https://play.google.com/store/apps/details?id=com.loopbook.loopbook&hl=es&gl=US">
           <IoLogoGooglePlaystore size="50" color="#ffa41b"/>
        </a>  
      </div>
      <p className="footer__copyright">Development by LoopBook Company </p>
    </footer>
  )
}

