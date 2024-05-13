import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';
import ScrollReveal from 'scrollreveal';
import {Link as ScrollLink} from "react-scroll"
const Button = () => {
 
useEffect(()=>{

  ScrollReveal().reveal(`.${styles.Btn}`, {
    duration: 500,
    distance: "60px",
    origin: "top",
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
    interval: 300,
    delay: 200,
    scale: 1,
    zIndex:-1
  });
},[])

 

  return <ScrollLink to="צור קשר" smooth={true} duration={1000} offset={-100}><div className={styles.button}><button className={styles.Btn}></button></div></ScrollLink>;
}

export default Button;
