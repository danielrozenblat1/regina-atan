import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import PhoneIcon from '@mui/icons-material/Phone';
import SpaIcon from '@mui/icons-material/Spa';
import WorkIcon from '@mui/icons-material/Work';

import TimelineIcon from '@mui/icons-material/Timeline';
import CheckIcon from '@mui/icons-material/Check';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EditIcon from '@mui/icons-material/Edit';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Typography from '@mui/material/Typography';
import ScrollReveal from 'scrollreveal';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import styles from "./FifthScreen.module.css";
import { Link } from 'react-scroll';
import Button from '../components/button/Button';

const CustomizedTimeline = () => {

  React.useEffect(() => {

    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 500,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item1`, {
      duration: 500,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item2`, {
      duration: 500,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item3`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

  }, []);

  return (
    <>
      <div className={styles.title} id="תהליך העבודה">תהליך הטיפול איתי</div>
      <div className={styles.description}> כדי שתהי בטוחה מספיק לעשות את הצעד ולעשות איפור קבוע - הנה תיאור קצר של תהליך הטיפול איתי מתחילתו ועד סופו</div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item1">
              1
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <HandshakeIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item1" textAlign="right" direction="rtl" marginBottom="0">
           הכרות
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item1" textAlign="right" marginBottom="0">
אני בוחנת את תווי הפנים והמימיקות שלך מהרגע הכניסה שלך לסלון 
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" color="black" id="item2">
             2
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <AssignmentIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
     מילוי הצהרת בריאות
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item2" textAlign="right" marginBottom="0">
מילוי הצהרת הבריאות עוזרת לתיאום הציפיות ויוצרת וודאות עבורי ועבורך
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
              3
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <AssignmentTurnedInIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
         התאמת ציפיות
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
בעזרת התאמת הציפיות אני אדע מה את מצפה לקבל ובעזרת ההכוונה המקצועית שלי נגיע לתוצאה המושלמת עבורך !
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" color="black" id="item2">
              4
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <CameraAltIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
         צילומי לפני
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item2" textAlign="right" marginBottom="0">
     נצלם את האזור שאנחנו הולכות לבצע עליו איפור קבוע כדי שנוכל להשוות את המצב הנוכחי שלך למצב העתידי שלך
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
              5
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <EditIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
          שרטוט סקיצה 
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
  לאחר הצילום - בישיבה שלך - כשתווי הפנים טבעיים אני מסמנת לעצמי נקודות ולאחר מכן - בשכיבה שלך אני משרטטת עלייך את הסקיצה - ולאחר בדיקה ואישור שלך אני עוברת למריחת חומר אלחוש 
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
            6
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <SpaIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
       חומר אלחוש
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
לאחר המתנה עם חומר האלחוש נתחיל לעבוד על האזור
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
           7
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <WorkIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
 עבודה 
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
אני איתך ומקשיבה לך לאורך כל תהליך העבודה - במידה ואת מרגישה לא בנוח וכאב מסויים - אנחנו נוסיף חומר אלחוש ונחכה שהאזור יירגע 
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
          8
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <CheckIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
סיום התהליך
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
מריחת קרם מיוחד לאחר סיום העבודה + צילומי אחרי להשוואה בין המצב הקודם למצב הנוכחי שלך  
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
          9
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <EditIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
    רישום ובקרה
            </Typography>
            <Typography fontFamily="RubikR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
בסוף הטיפול אני רושמת את כל תהליך העבודה שלנו כדי שברגע שתחזרי אלי לאחר ההחלמה, לטיפול השני נדע בדיוק מה עשינו בטיפול הראשון 
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

     <div className={styles.center}> <Button text="לשיחת ייעוץ חינמית" /></div>
    </>
  );
};

export default CustomizedTimeline;