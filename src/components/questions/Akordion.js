import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from "../button/Button";
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
  
    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 0px 3px 1px black',
          width: "100%",
          margin: "auto",
          background: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              color: 'black', // Apply black color to content
              fontFamily: 'RubikR',
              direction: "rtl",
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply white color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'RubikR'}}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            direction:"rtl",
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
      {/* <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000026" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,117.3C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    <div className={styles.title}>שאלות נפוצות</div>
    <div className={styles.description}>עשית לאחרונה איפור קבוע שתמיד חלמת עליו ? אז דבר ראשון מגיע לך מזל טוב על המראה החדש שלך!
המטרה הבאה היא להבטיח שההשקעה שלך באיפור קבוע תימשך זמן רב ככל האפשר.
אחת הדרכים הטובות ביותר לעשות זאת היא על ידי ביצוע ומעקב צמוד אחר ההנחיות המתאימות במהלך הטיפול הביתי.

אני  יענה על כמה שאלות נפוצות לגבי הטיפול הביתי באיפור קבוע ונספק לך טיפים והמלצות שישמרו על התוצאה לאורך זמן.</div>
    <DropdownAccordion title="מה אני צריכה לעשות לפני טיפול האיפור הקבוע?" content="גבות/שפתיים  -מומלץ יומיים לפני הטיפול לעשות פילינג קל באיזור כדי להסיר תאים מתים ולהכין את העור לקבלת פיגמנט. בתהליך הטיפול המחט יותר בקלות חודרת לרקמה ומחדירה צבע ואופן אחיד ומהר .בנוגע לפיגמנט שפתיים ,במידה ובעבר סבלת מהרפס אז מומלץ לפנות לרופא משפחה ולקבל מרשם לטיפול מונע , לפי המלצה של הרופא."/>
    <DropdownAccordion title="מה אסור לי לעשות אחרי שעשיתי איפור קבוע?" content="מיד עם סיום ההליך, יתנו לך הנחיות מפורטות, כיצד לטפל באזור וכיצד לשמור עליו.
באופן כללי, מומלץ להימנע מהרטבת האזור, להימנע ממריחה של כל מוצר ,מחשיפה ארוכה לשמש למשך שבועיים , איסור מוחלט בריכות, ג׳קוזי, סאונות, מיטות שיזוף, ים ועדיף גם לא לבקר במספרה בתקופה הראשונה . בסיום תקופה זו של שבועיים , חשוב לשמור על לחות וניקיון באזור שעבר את ההליך, בכדי למנוע זיהום ולעזור בתהליך הריפוי. חשוב מאוד להימנע משימוש בכל מוצר שוחק או פילינג באזור שבו נעשה ההליך, שגם כן מוצרים אלו עלולים לגרום לאיפור הקבוע לדהות מהר יותר."/>
      <DropdownAccordion title="כיצד למנוע זיהום לאחר איפור קבוע?" content="זיהום הוא סיכון עם כל סוג של קעקוע או איפור קבוע, ולכן חיוני לשמור על האיפור הקבוע שלך נקי ולהימנע מלגעת או לגרד את האזור. עליך להימנע משימוש בכל מוצרים המכילים אלכוהול, מי חמצן או ניחוח, מכיוון שהם יכולים לגרות את האזור ולגרום לזיהום. הקפידי לשטוף את הידיים שלך לפני שאת נוגעת באזור, הימנעי ממגע עם מים, והימנעי מחשיפה לאור השמש או לחום במשך מספר ימים לאחר ההליך" />
      <DropdownAccordion title="מהם המוצרים הטובים ביותר לטיפוח לאחר איפור קבוע?" content="בסיום העבודה לכל לקוחה אני נותנת תכשיר לטיפול ביתי באיפור קבוע .
מומלץ להישתמש בתכשיר ניקוי פנים עדינים ללא גרגירי פילינג. הימנעי משימוש במוצרים המכילים אלכוהול או כימיקלים קשים, מכיוון שהם עלולים לגרום לאיפור שלך לדהות."/>


 <div className={styles.center}><Button /></div>
      {/* <DropdownAccordion title="מה אני עושה אם אני אתקל בבעיה ? " content="אז סביר להניח שיהיו דברים מאתגרים, בשביל זה אני כאן. אני אלווה אותך בכל מהלך תוכנית ההכשרה מפתיחת החנות ועד לחנות יציבה ורווחית באיביי" />
      <Accordion
        disabled
        sx={{
          width: "50%",
          margin: "0 auto",
          background: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography></Typography>
        </AccordionSummary>
      </Accordion> */}

    </div>
  
  );
}
