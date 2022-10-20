import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";


function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%', height: '40vh'}}/>
        <div className="f-content">
            <span>Joeljoshua1960@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='2rem' />
                <Facebook color='white' size='2rem' />
                <Github color='white' size='2rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer