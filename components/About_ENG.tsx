import React from 'react'
import styles from './About_ENG.module.scss'

const About_ENG = () => (
  <div className={styles.About_Wrap}>
<div className={styles.About_Text_Wrap}>
<div className={styles.About_Text}>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</div>
    <div className={styles.About_Image_Wrap}>
<div className={styles.About_Image}>
  <img src={'/img/1.jpg'} alt="1"/>
    </div>
</div>
<div className={styles.About_Image_Author}><p>By knight of the brush</p></div>
<div className={styles.About_Image_Author}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>

</div>
  );






export default About_ENG

