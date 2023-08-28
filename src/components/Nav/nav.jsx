import React from "react";
import navigs from './nav.module.css'
import {NavLink} from "react-router-dom";

const nav = () =>{
    return(
      <div className={navigs.nav}>
          <NavLink to = "/Resturan" className = {navData => navData.isActive? navigs.active : navigs.items}> Рестораны </NavLink>
          <NavLink to = "/Market" className = {navData => navData.isActive? navigs.active : navigs.items}> Магазины </NavLink>
      </div>
    );
}

export default nav;
