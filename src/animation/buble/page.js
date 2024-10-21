import React from 'react';
// import './BubbleAnimation.css'; 
import style from './style.module.css'// Jangan lupa untuk membuat file CSS

const BubbleAnimation = () => {
  return (
    <div className={style.bubbleContainer}>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
    </div>
  );
};

export default BubbleAnimation;
