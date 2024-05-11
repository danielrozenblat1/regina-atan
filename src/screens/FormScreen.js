import styles from "./FormScreen.module.css"
import regina from "../images/רגינה אטן - מומחיות.png"
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";

const FormScreen=()=>{
    const [submitted ,setSubmitted]=useState(false)
const reciver="reginaatan@gmail.com";
const phoneRef=useRef('')
const nameRef=useRef('')


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

    const submitHandler=async(e)=>{
        e.preventDefault()
        const name=nameRef.current.value
        const phone=phoneRef.current.value
 
        if(name.trim().length<=2){
        
        alert("אנא הכנס שם מלא ")
        return;
        }
        if(phone.trim().length!==10){
        
        alert("אנא הכנס מספר טלפון הכולל 10 ספרות ")
        return;
            }

  
  
                
           
       const formData={
        name:name,
        phone:phone,

        
        reciver:reciver
       }
    const response= await fetch('https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
       })
            
            if(response.ok){
  
            alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
            nameRef.current.value=""
            phoneRef.current.value=""
         
           setSubmitted(true)
            }
        
    }
  
  


return <>
<div className={styles.title}>הגיע הזמן להתייפות ברוגע !</div> 
<div className={styles.wrapper}>







<form className={styles.form}>
<input ref={nameRef} className={styles.input} placeholder="שם פרטי"></input>
<input ref={phoneRef} className={styles.input} placeholder="טלפון"></input>

<button className={styles.button}  onClick={submitHandler}>רגינה , תחזרי אלי</button>
</form>

</div>


</>



}
export default FormScreen