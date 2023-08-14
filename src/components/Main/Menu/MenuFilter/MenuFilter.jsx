
import React from "react";
import menus from './MenuFilter.module.css'
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";

const MenuFilter = (props) =>{

    return (
        <div className={menus.menuFilter}>
        <a className={menus.clickablea}>
            <button className={ props.styleButton[0] ? menus.textActive : menus.text} onClick={props.PizzaClick}  disabled={props.styleButton[0]}>
                Pizza
            </button>
        </a>
        <a className={menus.clickablea}>
            <button className={props.styleButton[1] ? menus.textActive : menus.text} onClick={props.SushiClick} disabled={props.styleButton[1]} >
                Sushi
            </button>
        </a>
        <a className={menus.clickablea}>
            <button className={props.styleButton[2] ? menus.textActive : menus.text} onClick={props.WokClick} disabled={props.styleButton[2]} >
                Wok
            </button>
        </a>

    </div>);
}

export default MenuFilter;