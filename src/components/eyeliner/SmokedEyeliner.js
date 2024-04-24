import { useEffect, useRef } from "react";
import styles from "./SmokedEyeliner.module.css"
import { Player } from "@lordicon/react";
const SmokedEyeliner=(props)=>{
    const playerRef1=useRef(null)
    const handleComplete=()=>{
      setTimeout(() => {
        playerRef1?.current?.playFromBeginning();
      }, 2000); // play again after 2.5 seconds
    
    }
    
        useEffect(()=>{
      
           playerRef1?.current?.playFromBeginning()
        },[])
return <>
<div className={styles.header}>איך כל הקסם קורה ?</div>
<div className={styles.wrapper}>
<div className={styles.left}>
<div className={styles.icon}><Player ref={playerRef1} onComplete={handleComplete} icon={props.icon} size="100%"/></div>


</div>

<div className={styles.right}>
<div className={styles.title}>שיטת הפודרה וההצללה</div>

<div className={styles.description}>אני מאמינה שאיפור קבוע הוא לא רק פשוט איפור, אלא חוויה מדהימה שמשנה את מראה הפנים של האדם. הוא מעניק ללקוח את הביטחון והרוגע שהם צריכים כשהם יוצאים לדרך בבוקר, באימון , בחופשה או בדייט וזה מה שהופך את התהליך למיוחד וחשוב.</div>
</div>

</div>
</>



}
export default SmokedEyeliner