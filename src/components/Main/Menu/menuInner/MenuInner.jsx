
import React, {useReducer} from "react";
import menus from './MenuInner.module.css'
import {useLocation} from "react-router";
import {postUpdateBasket} from "../../../../redux/redux-main-basket";
// import menusEl from './MenuEl.module.css'
const localState = {
    count: 0,
};





const MenuInner = (props) =>{

    //useReduce for local state Count
    //Button - or + increment state Count
    //Add dispatch to Redux-Storage
    return(
        <div className={menus.menuInner}>
                {
                    props.stateLocale.countObj.map((el, index) => {
                        return (<div className={menus.MenuEl}>
                                <div className={menus.NameText}>
                                    {props.Menu[index].name}
                                </div>
                                <img className={menus.imagePizza}
                                     src="https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-a-popular-pizza-topping-in-american-style-pizzerias-isolated-on-white-background-still-life_639032-229.jpg?w=2000"
                                     alt="Pizza"/>
                                <button className={menus.subButton}
                                        onClick={() => props.dispatchLocale({type: 'DECREMENT', index: index})}>-
                                </button>
                                <div className={menus.countText}>{el.count}</div>
                                <button className={menus.plusButton}
                                        onClick={() => props.dispatchLocale({type: 'INCREMENT', index: index})}>+
                                </button>
                                <button className={menus.addbutton} onClick={() => {props.dispatchLocale({type : 'CLEAR', index : index}); props.dispatch(postUpdateBasket({...el}));}}>Add</button>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default MenuInner;