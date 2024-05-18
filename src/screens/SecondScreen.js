import React, { useEffect } from "react";
import styles from "./SecondScreen.module.css";
import regina from "../images/רגינה אטן צילום תדמית.png";
import method from "../images/רגינה אטן שיטת טיפול.png" ;
import needle from "../images/רגינה אטן התאמת מחט.png" ;
import paste from "../images/רגינה אטן חומר אלחוש.png"
import Button from "../components/button/Button";
import ScrollReveal from "scrollreveal";
import Box from "../components/box/Box";

const SecondScreen = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.right}`, {
      duration: 500,
      distance: "60px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.left}`, {
      duration: 500,
      distance: "60px",
      origin: "left",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <>
      <div className={styles.header}>
        איתי הפחד שלך <div className={styles.bold}>נעלם</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={regina} alt="רגינה" />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.title} id="קצת עלי">רגינה אטן</div>
          <div className={styles.job}>מומחית לאיפור קבוע</div>
          <div className={styles.description}>
            אני מאמינה שאיפור קבוע הוא לא רק פשוט איפור, אלא חוויה מדהימה שמשנה את מראה הפנים של האדם. הוא מעניק ללקוח את הביטחון והרוגע שהם צריכים כשהם יוצאים לדרך בבוקר, באימון , בחופשה או בדייט וזה מה שהופך את התהליך למיוחד וחשוב.
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <Box
          src={paste}
          title="חומר אלחוש מיוחד"
          description="תפקידו של חומר האלחוש שלי הוא לנטרל את הכאב של המחט כמעט לגמרי! בעזרת חומר האלחוש הקסום שיש לי,  אני רואה איך תמיד הלקוחה רגועה ונינוחה בזמן הטיפול ."
        />
        <Box
          src={needle}
          title="התאמת מחט לסוג עור"
          description="שלב מאוד חשוב ואחראי מבחינת המסטרית. בבחירת מחט נכונה אנחנו מבטיחים לעצמינו עבודה בטוחה ,קלה, פחות טראומטית ללקוחה ותוצאה מושלמת."
        />
        <Box
          src={method}
          title="שיטת טיפול"
          description="התאמת שיטת טיפול הוא אינדיבידואלית לכל לקוחה. בטיפול הראשון אני עובדת מאוד זהיר ושטחי ,כדי להכיר את העור ולראות את התגובה שלו. בטיפול השני אני בוחנת את החלמתו ועובדת בהתאם."
        />
 
      </div>
      <div className={styles.center}>
          <Button buttonText="איפה אני רואה עבודות שלך ?" to="צור קשר" />
        </div>

    </>
  );
};

export default SecondScreen;
