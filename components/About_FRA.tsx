import React from 'react'


const About_RUS = () => (
  <div className="About_Wrap">
<div className="About_Text_Wrap">
<div className="classes.About_Text">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</div>
    <div className="About_Image_Wrap">
<div className="About_Image">
   <img src={'/img/magritte.jpg'} alt="Gadget Hackwrench"/>
   </div>
</div>
<div className="About_Image_Author"><p>By&nbsp;</p><a href="https://www.deviantart.com/mysticalpha/art/Gadget-Hackwrench-659345508" target="blank">Mysticalpha</a></div>
<style jsx>{`
@media screen and (min-width:0px) and (max-width: 900px) {
.About_Wrap{
}
}
.About_Text_Wrap{
display: flex;
justify-content: center;
margin-top: 13px;
}

@media screen and (min-width:1200px) and (max-width: 9999999px) {
.About_Text{
width: 1025px;
}
}
@media screen and (min-width:900px) and (max-width: 1200px) {
.About_Text_Wrap{
display: flex;
justify-content: space-evenly;
padding-left: 60px;
padding-right: 60px;
}
}

@media screen and (min-width:0px) and (max-width: 900px) {
.About_Text_Wrap{
display: flex;
justify-content: space-evenly;
padding-left: 15px;
padding-right: 15px;
}
}
.About_Text p{
Font-size: 18px;
margin-top: 0px;
margin-bottom: 0px;
}

.About_Image_Wrap{
display: flex;
justify-content: center;
margin-top: 9px;
}

.About_Image {
max-width: 170px;
}

.About_Image img{
max-width: 100%;
height: auto;
vertical-align: middle;
border-style: none;
}
.image_wrap img{
max-width: 100%;
height: auto;
vertical-align: middle;
border-style: none;

}
.About_Image_Author{
display: flex;
  justify-content: center;
  transition: all 500ms ease;
  color: rgba(87, 87, 87, 0.555);
  margin-bottom: 0px;
  text-align: center;
}
@import url('https://fonts.googleapis.com/css?family=Merienda');
.About_Image_Author a{
text-decoration: none;
font-family: 'Merienda', cursive;
  font-size: 7px;
  color: rgba(87, 87, 87, 0.486);
  /*color: rgb(223, 190, 99);*/
  transition: all 500ms ease;
}

.About_Image_Author p{
text-decoration: none;
font-family: 'Merienda', cursive;
  font-size: 7px;
  color: rgba(87, 87, 87, 0.486);
  /*color: rgb(223, 190, 99);*/
  transition: all 500ms ease;
position: relative;
bottom: 7px;
}
.About_Image_Author p{
cursor: default;
}
@media screen and (min-width:1000px) and (max-width: 99999999px) {
.About_Image_Author a:hover{
  /*color: rgb(223, 190, 99);*/
    color: rgb(0, 0, 0);
    transition: 0.5s;
  }}
      `}</style>
</div>

  );


export default About_RUS

