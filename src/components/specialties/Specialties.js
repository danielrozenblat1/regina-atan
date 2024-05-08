import React, { useEffect } from "react";
import styles from "./Specialties.module.css";
import regina from "../../images/רגינה אטן תוצאות מיקס.png";
import Button from "../button/Button";
import ScrollReveal from "scrollreveal";

const Specialties = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
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

    ScrollReveal().reveal(`.${styles.description}`, {
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
        <div className={styles.bold}>יחד</div> נפתור לך
      </div>
      <div className={styles.wrap}>
        {/* מומחיות צד שמאל */}
        <div className={styles.left}>
          <div className={styles.specialty} itemScope itemType="https://schema.org/Article">
            <div className={styles.title} itemProp="name">פיגמנט שפתיים</div>
            <div className={styles.description} itemProp="description">
              הפחד מההזרקות עוצר אותך אבל יחד איתי נגדיר לך במיוחד פיגמנט שפתיים ונגשים לך את החלום
            </div>
          </div>

          <div className={styles.specialty} itemScope itemType="https://schema.org/Article">
            <div className={styles.title} itemProp="name">אסימטרייה</div>
            <div className={styles.description} itemProp="description">
              גם בגבות וגם בשפתיים - בעזרת איזון שני הצדדים ושמירה על פרופורציה טבעית
            </div>
          </div>

          <div className={styles.specialty} itemScope itemType="https://schema.org/Article">
            <div className={styles.title} itemProp="name">גבות דלילות</div>
            <div className={styles.description} itemProp="description">
              בעזרת שיטת הפודרה אני אמלא לך את הגבה ותקבלי מראה טבעי ועמיד לאורך זמן
            </div>
          </div>
        </div>
        {/* תמונה של רגינה */}
        <div className={styles.center}>
          <img className={styles.image} src={regina} alt="רגינה" />
          {/* <Button/> */}
        </div>

        {/* מומחיות צד ימין */}
        <div className={styles.right}>
          <div className={styles.specialty} itemScope itemType="https://schema.org/Article">
            <div className={styles.title} itemProp="name">מראה פנים</div>
            <div className={styles.description} itemProp="description">
              אין חלק בפנים שבעזרת הטכנקות והשיטות שלי לא ייראה אצלך טבעי ועמיד
            </div>
          </div>

          <div className={styles.specialty} itemScope itemType="https://schema.org/Article">
            <div className={styles.title} itemProp="name">עפעפיים ירודים</div>
            <div className={styles.description} itemProp="description">
              פותרת את הבעיה בשיטת ההצללה והפודרה - מכהים את החלק החיצוני של הריסים מה שיוצר מראה טבעי
            </div>
          </div>

          <div className={styles.specialty} itemScope itemType="https://schema.org/Article">
            <div className={styles.title} itemProp="name">עיניים רגישות</div>
            <div className={styles.description} itemProp="description">
              אני יודעת להתאים את שיטת העבודה לסוג העור שלך - אפילו אם העור שלך מאוד רגיש
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialties;
