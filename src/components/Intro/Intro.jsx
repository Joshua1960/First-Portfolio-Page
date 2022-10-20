import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";
import { useContext } from "react";

function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode? 'white': ''}}>Hi! I am</span>
                <span>Joshua Joel</span>
                <span>A CS student and an aspiring Software Engineer to dethrone World Tecc Giants like Bill Gates, Mark Zuckerberg, Elon Musk and Jeff Bezoz</span>
            </div>
            
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div className='floatingdiv1'>
                <FloatingDiv image={Crown} txt1='Web' txt2="Developer"/>
            </div>
            <div className='floatingdiv2'>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>
        </div>
    </div>
  )
}

export default Intro