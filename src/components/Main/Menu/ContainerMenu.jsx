import React, {useMemo, useReducer} from "react";


import menus from './menu.module.css'
import menusEl from './menuInner/MenuInner.module.css'

import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getMenuData} from "../../../redux/redux-main-menu";
import MenuInner from "./menuInner/MenuInner";
import MenuFilter from "./MenuFilter/MenuFilter";
import {postUpdateBasket} from "../../../redux/redux-main-basket";


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
        case 'CLEAR':{
            stateCopy.countObj[action.index].count = 0;
            return{
                countObj: stateCopy.countObj,
                thisMenu: state.thisMenu
            }
        }

        default:
            return stateCopy;
    }
}

const createActive = (str) => {
    let arr = [false, false, false];
    if (str === "Pizza")
        arr[0] = true;
    else if (str === "Sushi")
        arr[1] = true
    else if (str === "Wok")
        arr[2] = true

    return arr;
}

const containerMenu = () => {

    const dispatch = useDispatch();
    //
    let menu = useSelector(state => state.MenuReducer);


    const [stateLocale, dispatchLocale] = useReducer(reducer, localState);

    useMemo(() => {
        console.log("ChangeMemo")
        console.log(menu)
        if(stateLocale.thisMenu !== menu.thisMenu && !menu.isLoading && menu.Menu.length > 0) {
            stateLocale.thisMenu = menu.thisMenu;
            stateLocale.countObj = [];
            for (let el of menu.Menu) {
                stateLocale.countObj.push({
                    name : el.name,
                    count : 0
                })
            }
        }
    }, [menu]);


    useEffect(() => {
        dispatch(getMenuData("Pizza"))
    }, [])


    console.log("draw");
    console.log(stateLocale)
    return (
        <div className={menus.menu}>
            <MenuFilter SushiClick={() => dispatch(getMenuData("Sushi"))} styleButton={createActive(menu.thisMenu)}
                        PizzaClick={() => dispatch(getMenuData("Pizza"))}
                        WokClick={() => dispatch(getMenuData("Wok"))}
            />
            <MenuInner stateLocale = {stateLocale} dispatchLocale = {dispatchLocale} Menu = {menu.Menu} dispatch = {dispatch}/>
        </div>

    )
        ;
}

export default containerMenu;