import React, { useState } from "react"
import Toggle from "../Toggle/Toggle"
import './Topbar.css'
import Openmenu from '../../img/openmenu.svg'
import Closedmenu from '../../img/closedmenu.svg'



function Topbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <div className="n-right">
        <div className="n-list">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                </ul>
            </div>
            <button className="button n-button">Contact me</button>
        </div>
  )

    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Skinyl Tech</div>
                <Toggle />
            </div>
            <div className="toggle-button">
                <div>
                    {toggleMenu
                        ? <img src={Closedmenu} alt="" onClick={() => setToggleMenu(false)} className="openmenu"/>
                        : <img src={Openmenu} alt="" onClick={() => setToggleMenu(true)} className="openmenu"/>
                    }
                </div>
                    {toggleMenu && (
                        <div className="t-menu"><Menu /></div>
                    )}
            </div>
            <div className="n-desktopmenu"><Menu /></div>
        </div>
    )
}

export default Topbar