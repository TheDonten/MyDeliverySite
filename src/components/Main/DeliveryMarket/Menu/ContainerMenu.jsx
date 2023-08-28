import React, {useMemo, useReducer} from "react";


import menus from './menu.module.css'
import menusEl from './menuInner/MenuInner.module.css'

import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllInfoMarket, getMenuData} from "../../../../redux/redux-main-menu";
import MenuInner from "./menuInner/MenuInner";
import MenuFilter from "./MenuFilter/MenuFilter";
import {GiveRestName, postUpdateBasket} from "../../../../redux/redux-main-basket";
import {useLocation, useParams} from "react-router-dom";


const localState = {
    countObj: [],
    thisMenu: ""
};

function reducer(state, action) {
    let stateCopy = {...state};
    switch (action.type) {
        case 'INCREMENT': {
            stateCopy.countObj[action.index].count += 1;
            return {
                countObj: stateCopy.countObj,
                thisMenu: state.thisMenu
            }
        }
        case 'DECREMENT': {
            if (!(stateCopy.countObj[action.index].count - 1 < 0))
                stateCopy.countObj[action.index].count -= 1;
            return {
                countObj: stateCopy.countObj,
                thisMenu: state.thisMenu
            }
        }
        case 'CLEAR': {
            stateCopy.countObj[action.index].count = 0;
            return {
                countObj: stateCopy.countObj,
                thisMenu: state.thisMenu
            }
        }

        default:
            return stateCopy;
    }
}

const containerMenu = () => {

    const dispatch = useDispatch();
    //
    let menu = useSelector(state => state.MenuReducer);

    let params = useParams();

    //alert(params.name);
    const [stateLocale, dispatchLocale] = useReducer(reducer, localState);

    useMemo(() => {
        console.log("ChangeMemo")
        console.log(menu)
        stateLocale.countObj = [];
        // if(stateLocale.thisMenu !== menu.thisMenu && !menu.isLoading && menu.Menu.length > 0) {
         stateLocale.thisMenu = menu.thisMenu;
        //     stateLocale.countObj = [];
        for (let el of menu.Menu) {
            stateLocale.countObj.push({
                name: el.name,
                count: 0
            })
        }

    }, [menu]);


    useEffect(() => {
        dispatch(getAllInfoMarket(params.name));
        //dispatch(GiveRestName(params.name))
    }, [])

    return (
        <div className={menus.menu}>
            {menu.isLoading && <img src="https://i.gifer.com/ZKZg.gif"/>}

            <MenuFilter MenuClick={dispatch} Menu={menu.MenuFilter} ThisMenu={menu.thisMenu} KeyMenu={menu.name}
            />
            {!menu.isLoading && <MenuInner stateLocale={stateLocale} dispatchLocale={dispatchLocale} Menu={menu.Menu}
                                           dispatch={dispatch} name = {menu.name}/>}
        </div>

    )
        ;
}

export default containerMenu;