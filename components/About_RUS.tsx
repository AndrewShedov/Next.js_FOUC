import React from 'react'
import classes from './About_RUS.module.scss'

const About_RUS = () => (
  <div className={classes.About_Wrap}>
<div className={classes.About_Text_Wrap}>
<div className={classes.About_Text}>
<p>Привет, я занимаюсь разработкой сайтов, это адаптивные сайты, которые будут хорошо смотреться на экранах любых размеров. Создаю сайты для платформы WordPres и других CMS, делаю базовую SEO оптимизацию.</p>
</div>
</div>
    <div className={classes.About_Image_Wrap}>
<div className={classes.About_Image}>
   <img src={'/img/magritte.jpg'} alt="Gadget Hackwrench"/>
   </div>
</div>
<div className={classes.About_Image_Author}><p>By&nbsp;</p><a href="https://www.deviantart.com/mysticalpha/art/Gadget-Hackwrench-659345508" target="blank">Mysticalpha</a></div>
</div>
  );


export default About_RUS

