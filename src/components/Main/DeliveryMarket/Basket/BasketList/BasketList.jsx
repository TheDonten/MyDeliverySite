import React from "react";
import BasketLists from './BasketList.module.css'
import BasketElement from "./BasketElement/BasketElement";
import {DecElementBasket, DeleteElementBasket, IncElementBasket} from "../../../../../redux/redux-main-basket";

const BasketList = (props) =>{
    console.log("BasketList")
    console.log(props)
    return(
        <div className={BasketLists.BasketList}>
            { props.BasketList.map( (el,index) =>{
                return(
                    <BasketElement Element = {el} RemoveEl = { () => {props.dispatch(DeleteElementBasket(index))}}
                        IncEl = { () => {props.dispatch(IncElementBasket(index))}} DecEl = { () => {props.dispatch(DecElementBasket(index))}}/>
                )
        })
            }
        </div>
    )

}

export default BasketList;