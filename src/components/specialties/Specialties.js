import styles from "./Specialties.module.css"
import regina from "../../images/רגינה אטן.png"
import Button from "../button/Button"
const Specialties=()=>{

return <>
<div className={styles.header}><div className={styles.bold}>יחד</div>  נפתור לך</div>
<div className={styles.wrap}>

{/* מומחיות צד שמאל */}
<div className={styles.left}>
<div className={styles.specialty}>
<div className={styles.title}>פיגמנט שפתיים</div>
<div className={styles.description}>הפחד מההזרקות עוצר אותך אבל יחד איתי נגדיר לך במיוחד פיגמנט שפתיים ונגשים לך את החלום </div>
</div>

<div className={styles.specialty}>
<div className={styles.title}>אסימטרייה</div>
<div className={styles.description}>גם בגבות וגם בשפתיים - בעזרת איזון שני הצדדים ושמירה על פרופורציה טבעית</div>
</div>

<div className={styles.specialty}>
<div className={styles.title}>גבות דלילות</div>
<div className={styles.description}>בעזרת שיטת הפודרה אני אמלא לך את הגבה ותקבלי מראה טבעי ועמיד לאורך זמן</div>
</div>


</div>
{/* תמונה של רגינה */}
<div className={styles.center}>
<img className={styles.image} src={regina}/>
{/* <Button/> */}
</div>
 
 {/* מומחיות צד ימין */}
<div className={styles.right}>

<div className={styles.specialty}>
<div className={styles.title}>מראה פנים</div>
<div className={styles.description}> אין חלק בפנים שבעזרת הטכנקות והשיטות שלי לא ייראה אצלך טבעי ועמיד </div>
</div>

<div className={styles.specialty}>
<div className={styles.title}>עפעפיים ירודים</div>
<div className={styles.description}>פותרת את הבעיה בשיטת ההצללה והפודרה - מכהים את החלק החיצוני של הריסים מה שיוצר מראה טבעי</div>
</div>

<div className={styles.specialty}>
<div className={styles.title}>עיניים רגישות</div>
<div className={styles.description}>אני יודעת להתאים את שיטת העבודה לסוג העור שלך - אפילו אם העור שלך מאוד רגיש </div>
</div>
</div>
</div>
</>

}
export default Specialties