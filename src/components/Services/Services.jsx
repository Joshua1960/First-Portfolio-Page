import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
// import Github from '../../img/github.png'
import Card from '../Card/Card'
import Resume from './vo.jpg'
import { themeContext } from "../../Context";
import { useContext } from "react";

function Services() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span>The services I offer includes Web Design, App <br/> Design, Software Engineering and Data Analysis</span>
            <a href={Resume} download>
                <button className="button s-button"> Download CV </button>
            </a>
        <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        
        {/* right side */}
        <div className="cards">
            <div className='card1'>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Corel draw,Pixellab, Canva, Photoshop, Adobe Premiere,'}  
                />
            </div>
            {/* Second Card */}
            <div className='card2'>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {'HTML, CSS, Javascript, ReactJS'}  
                />
            </div>
            {/* 3rd Card */}
            <div className='card3'>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {'Figma, Sketch, Adobe XD, Lunacy'}  
                />
            </div>
        </div>
    </div>
  )
}

export default Services