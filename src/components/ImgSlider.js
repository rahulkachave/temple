import React from 'react'
import D7  from './/../staic/Du7.webp'
import D8 from './/../staic/Du8.png'
import D9  from './/../staic/Du9.jpg'
import D10  from './/../staic/Du10.webp'
import ImageSlider from './ImageSlider'

const ImgSlider = () => {
const slides =[
       { src: D7, alt: 'Durga 7' },
    { src: D8, alt: 'Durga 8' },
    { src: D9, alt: 'Durga 9' },
    { src: D10, alt: 'Durga 10' }
];
const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};
export default ImgSlider