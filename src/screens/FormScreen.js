import styles from "./FormScreen.module.css"
import regina from "../images/רגינה אטן - מומחיות.png"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const FormScreen=()=>{

    useEffect(()=>{
  
   

        // ScrollReveal().reveal(`.${styles.title}`, {
        //   duration: 500,
        //   distance: "60px",
        //   origin: "top",
        //   easing: "ease-out",
        //   reset: false,
        //   viewFactor: 0.2,
        //   interval: 300,
        //   delay: 200,
        //   scale: 1,
        // });
    },[])


return <>
<div className={styles.title}>הגיע הזמן להתייפות ברוגע !</div> 
<div className={styles.wrapper}>







<form className={styles.form}>
<input className={styles.input} placeholder="שם פרטי"></input>
<input className={styles.input} placeholder="טלפון"></input>
<input className={styles.input} placeholder="מייל"></input>
<button className={styles.button}>רגינה , תחזרי אלי</button>
</form>

</div>


</>



}
export default FormScreen