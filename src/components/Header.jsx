import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
    /* is better to have func out side */
    const styleLink=({isActive})=> 
        isActive ? {color:"green", fontWeight: 'bold'}: {}        /* when we have alot of style ,emplement differant styling with this func */
  return (
    <div>
        <nav>
           {/*  <a href='/'>Home</a>
            <a href='/about'>About</a> */}
            {/* in react we use link component stop a refrsh of the  page  */}

         {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
 
            {/* navlink component has active attribute  in css class ,or here directly (props),link dosnt have this*/}
            <NavLink to="/" style={styleLink} >Home</NavLink>
            <NavLink to="/about" style={styleLink} >About</NavLink>
            <NavLink to="/contact" style={styleLink} >Contact</NavLink>
            <NavLink to="/product" style={styleLink} >Product</NavLink>
            {/* dinimek entery here */}
            <NavLink to="/projects" style={styleLink}>
        Projects
      </NavLink>
        </nav>
    </div>
  )
}
