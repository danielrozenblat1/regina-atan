import styles from "./SecondScreen.module.css"
import regina from "../images/רגינה אטן.png"
import method from "../icons/wired-lineal-978-project-management (1).json"
import needle from "../icons/wired-lineal-775-needle.json"
import paste from "../icons/wired-lineal-1216-tube.json"
import Box from "../components/box/Box"
import Button from "../components/button/Button"
const ScreenScreen=()=>{
  

return <>
<div className={styles.header}>איתי הפחד שלך  <div className={styles.bold}>נעלם</div></div>
<div className={styles.wrapper}>


<div className={styles.left}>
<div className={styles.imageWrapper}><img className={styles.image} src={regina}/></div>

</div>


<div className={styles.right}>
<div className={styles.title}>רגינה אטן</div>
<div className={styles.job}>מומחית לאיפור קבוע</div>
<div className={styles.description}>אני מאמינה שאיפור קבוע הוא לא רק פשוט איפור, אלא חוויה מדהימה שמשנה את מראה הפנים של האדם. הוא מעניק ללקוח את הביטחון והרוגע שהם צריכים כשהם יוצאים לדרך בבוקר, באימון , בחופשה או בדייט וזה מה שהופך את התהליך למיוחד וחשוב.</div>
</div>

</div>
<div className={styles.row}>
<Box icon={paste} title="חומר אלחוש מיוחד" description="כשאני נמצאת בסטודיו שלי ואני מבצעת איפור קבוע ללקוחותי, אני מרגישה כמה שהם רגועות ומנוחות בזמן שאני יוצרת אמנות על העור שלהם"/>
<Box icon={needle}title="התאמת מחט לסוג עור" description=" שלב מאוד חשוב ואחראי מבחינת המסטרית. בבחירת מחט נכונה אנחנו מבטיחים לעצמינו עבודה בטוחה ,קלה, פחות טראומטית ללקוחה ותוצאה מושלמת."/>
<Box icon={method} title="שיטת טיפול חדשנית" description="חשוב לראות איך העור שלך מגיב למחט שהתאמתי לך ולכן התהליך יתבצע ב-2 חלקים : 30% מהטיפול בפגישה הראשונה והשאר בפגישה השנייה"/>
</div>
<div className={styles.center}><Button buttonText="איפה אני רואה עבודות שלך ?" to="צור קשר"/></div>
</>


}
export default ScreenScreen