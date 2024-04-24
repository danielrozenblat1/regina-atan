import styles from "./Box.module.css"
import { Player } from "@lordicon/react"
import { useEffect, useRef } from "react"


const Box=(props)=>{
 const playerRef1=useRef(null)
const handleComplete=()=>{
  setTimeout(() => {
    playerRef1?.current?.playFromBeginning();
  }, 2000); // play again after 2.5 seconds

}



    useEffect(()=>{
  
       playerRef1?.current?.playFromBeginning()
        // ScrollReveal().reveal(`.${styles.description}`, {
        //     duration: 500,
        //     distance: "60px",
        //     origin: "bottom",
        //     easing: "ease-out",
        //     reset: false,
        //     viewFactor: 0.2,
        //     interval: 300,
        //     delay: 200,
        //     scale: 1,
        //   });
 
      },[])

    
    return <>
    <div className={styles.box} id={props.id}>
    <div className={styles.icon}><Player ref={playerRef1} onComplete={handleComplete} icon={props.icon} size="100%"   /></div>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.description}>{props.description}</div>
    </div>
    </>
}
export default Box