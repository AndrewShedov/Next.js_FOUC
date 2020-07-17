import React from 'react'
import classes from './About_ENG.module.scss'

const About_ENG = () => (
  <div className={classes.About_Wrap}>
<div className={classes.About_Text_Wrap}>
<div className={classes.About_Text}>
<p>Hi, I am developing websites, this is responsive websites for different screens of computers and mobile devices, also doing websites for the WordPres platform and other CMS. I do for the site - basic Search Engine Optimisation (SEO). </p>
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






export default About_ENG

