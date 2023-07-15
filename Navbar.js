import React from 'react'
import "./Navbar.css"
import {GrEdge} from "react-icons/gr"
import {BiSolidBookReader} from "react-icons/bi"
const Navbar = (props) => {
  return (
    <>
    <nav className='navbar'>

        <h2>
            <span><GrEdge/></span>Grese
        </h2>

        <div className='menu-link'>
            <ul className='menu-desk'>
                <li>
                    <a href='#'>About us</a>
                </li>
                <li>
                    <a href='#'>Tecnology</a>
                </li>
                <li>
                    <a href='#'>Case studies</a>
                </li>
                <button className='btn'>Let's talk</button>
            </ul>
            

        </div>

    </nav>
      <section className='hero-section'>

        <h1>Unleashing <br/>the Power of <br/> Automation.</h1>
        <p>We revolutionize the way tomatoes are grown and <br/> monitiored, enabling  efficient and precise data <br/> collection for improved crop management.</p>
        <div className="wrapper">
      <input type="text" name="" placeholder='e.g hello@creative.com'></input>
      <button><span><BiSolidBookReader/></span>Book a demo</button>

     </div>

 

      </section>
    </>
  )
}

export default Navbar
