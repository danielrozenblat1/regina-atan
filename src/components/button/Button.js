import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';
import ScrollReveal from 'scrollreveal';
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

 

  return <div className={styles.button}><button className={styles.Btn}></button></div>;
}

export default Button;
