import React from 'react'
import classes from './About_ENG.module.scss'

const About_ENG = () => (
  <div className={classes.About_Wrap}>
<div className={classes.About_Text_Wrap}>
<div className={classes.About_Text}>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</div>
    <div className={classes.About_Image_Wrap}>
<div className={classes.About_Image}>
  <img src={'/img/magritte.jpg'} alt="Gadget Hackwrench"/>
    </div>
</div>
<div className={classes.About_Image_Author}><p>By&nbsp;</p><a href="https://www.deviantart.com/mysticalpha/art/Gadget-Hackwrench-659345508" target="blank">Mysticalpha</a></div>
<div className={classes.About_Image_Author}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>

</div>
  );






export default About_ENG

