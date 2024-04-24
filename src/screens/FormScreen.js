import styles from "./FormScreen.module.css"
import regina from "../images/רגינה אטן - מומחיות.png"
const FormScreen=()=>{
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