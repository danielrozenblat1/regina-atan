import styles from "./ThirdScreen.module.css"
import result from "../images/רגינה אטן לפני אחרי.png"
import result1 from "../images/רגינה אטן לפני אחרי 2.png"
import result2 from "../images/רגינה אטן לפני אחרי 3.png"

import result4 from "../images/רגינה אטן לפני אחרי 4.png"
import result5 from "../images/רגינה אטן לפני אחרי 5.png"
import result6 from "../images/רגינה אטן לפני אחרי 6.png"
import result7 from "../images/רגינה אטן לפני אחרי 7.png"
import result8 from "../images/רגינה אטן לפני אחרי 8.png"
import result9 from "../images/רגינה אטן לפני אחרי 9.png"
import result10 from "../images/רגינה אטן לפני אחרי 10.png"
import result11 from "../images/רגינה אטן לפני אחרי 11.png"
import result12 from "../images/רגינה אטן לפני אחרי 12.png"
import result13 from "../images/רגינה אטן לפני אחרי 13.png"
import result14 from "../images/רגינה אטן לפני אחרי 14.png"
import result15 from "../images/רגינה אטן לפני אחרי 15.png"
import result16 from "../images/עיניים רגינה אטן תוצאות.png"
import result17 from "../images/שפתיים רגינה אטן תוצאות.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../components/button/Button"
import Slider from "react-slick"
import { Loop } from "@mui/icons-material"
const ThirdScreen=()=>{


const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  Loop:true,
  slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : 3,
  slidesToScroll: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : 3,
  // הוספת מרווח בין תמונות באמצעות padding
  style: {
    padding: '0 10px', // התאמת המרווח לפי הצורך שלך
  }
};
    const content1 = [
  
     

        
 
      
          {
            type: 'image',
            src: result5,
          },
        
        
        
          {
            type: 'image',
            src: result10,
          },
 
        
 
         
 
        
 
          {
            type: 'image',
            src: result16,
          },
      
 
 
        // Add more images and videos as needed
      ];
      const content2 = [
  
        {
          type: 'image',
          src: result,
        },
     

       
          {
            type: 'image',
            src: result2,
          },
 
          {
            type: 'image',
            src: result4,
          },
         
         
 
         
 
         
          {
            type: 'image',
            src: result15,
          },
          {
            type: 'image',
            src: result17,
          },
 
        // Add more images and videos as needed
      ];
      const content3 = [
  
     

          {
            type: 'image',
            src: result1,
          },
       
 
       
        
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
          {
            type: 'image',
            src: result8,
          },
          {
            type: 'image',
            src: result9,
          },
       
 
          {
            type: 'image',
            src: result11,
          },
 
          {
            type: 'image',
            src: result12,
          },
 
          {
            type: 'image',
            src: result13,
          },
 
          {
            type: 'image',
            src: result14,
          },
      
 
 
        // Add more images and videos as needed
      ];


return <>
<div className={styles.title}>מה שווה הכל בלי תוצאות?</div>
<div className={styles.description}>אני יכולה להמשיך להסביר לך עוד על איך אני יכולה להפוך אותך לבחורה שתמיד חלמת להיות , אבל אני מעדיפה שתראי את אלו שכבר עברו אצלי את התהליך</div>
<div className={styles.title}>עיניים</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content1.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`רגינה אטן לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {/* {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )} */}
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.title}>שפתיים</div>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content2.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`רגינה אטן לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {/* {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )} */}
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.title}>גבות</div>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content3.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`רגינה אטן לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {/* {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )} */}
            </div>
          ))}
        </Slider>
      </div>
</>

}
export default ThirdScreen