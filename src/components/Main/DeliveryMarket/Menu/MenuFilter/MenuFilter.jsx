
import React from "react";
import menus from './MenuFilter.module.css'
import {getMenuData} from "../../../../../redux/redux-main-menu";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";

const MenuFilter = (props) =>{

    return (
        <div className={menus.menuFilter}>
            {props.Menu.map( (el) =>{
                let flag = false;
                if(el === props.ThisMenu)
                    flag = true;
                return (
                <a className={menus.clickablea}>
                    <button className={  flag ? menus.textActive : menus.text} onClick={ () => {props.MenuClick(getMenuData(el, props.KeyMenu));}} disabled={flag}>
                        {el}
                    </button>
                </a>
                );
            })}
    </div>);
}

export default MenuFilter;