import React from 'react'
import classes from './About_RUS.module.scss'

const About_RUS = () => (
  <div className={classes.About_Wrap}>
<div className={classes.About_Text_Wrap}>
<div className={classes.About_Text}>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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

