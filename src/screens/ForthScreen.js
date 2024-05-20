import styles from "./ForthScreen.module.css"
import result from "../images/רגינה אטן לקוחות ממליצות 1.png"
import result1 from "../images/רגינה אטן לקוחות ממליצות 2.png"
import result2 from "../images/רגינה אטן לקוחות ממליצות 3.png"

import result4 from "../images/רגינה אטן לקוחות ממליצות 4.png"
import result5 from "../images/רגינה אטן לקוחות ממליצות 5.png"
import result6 from "../images/רגינה אטן לקוחות ממליצות 6.png"
import result7 from "../images/רגינה אטן לקוחות ממליצות 7.png"
import result8 from "../images/רגינה אטן לקוחות ממליצות 8.png"
import result9 from "../images/רגינה אטן לקוחות ממליצות 9.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../components/button/Button"
import Slider from "react-slick"
const ForthScreen=()=>{


const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2500,
  slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : 4,
  slidesToScroll: 1,
  // הוספת מרווח בין תמונות באמצעות padding
  style: {
    padding: '0 10px', // התאמת המרווח לפי הצורך שלך
  }
};
    const content = [
  
        {
          type: 'image',
          src: result,
        },
     

          {
            type: 'image',
            src: result1,
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
            src: result5,
          },
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },     {
            type: 'image',
            src: result8,
          },
          {
            type: 'image',
            src: result9,
          },
          
 
        // Add more images and videos as needed
      ];


return <>
<div className={styles.title} id="לקוחות ממליצות">תשמעו את זה מהלקוחות שלי</div>
<div className={styles.description}>אין דבר כזה אצלי שלקוחה לא יוצאת מרוצה מהקליניקה שלי ! , תשמעי את זה מהן..</div>

<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
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
export default ForthScreen