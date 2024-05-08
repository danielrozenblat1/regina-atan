import Box from "../components/box/Box"
import styles from "./FirstScreen.module.css"
import {useEffect,useRef} from "react"

const FirstScreen=(props)=>{


return <>
<div className={ !props.scrolled ? styles.question : styles.questionFixed }>רוצה לעשות איפור קבוע אבל מפחדת מהכאב בזמן הטיפול?</div>
{/* <div className={styles.title}>מפסיקות לפחד מהמחט</div> */}

</>


}
export default FirstScreen