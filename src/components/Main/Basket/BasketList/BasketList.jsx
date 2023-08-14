import React from "react";
import BasketLists from './BasketList.module.css'
import BasketElement from "./BasketElement/BasketElement";
import {DELETE_ELEMENT} from "../../../../redux/redux-main-basket";

const BasketList = (props) =>{
    console.log("BasketList")
    console.log(props)
    return(
        <div className={BasketLists.BasketList}>
            { props.BasketList.map( (el,index) =>{
                return(
                    <BasketElement Element = {el} RemoveEl = { () => {props.dispatch({type : DELETE_ELEMENT, index : index})}}/>
                )
        })
            }
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}
            {/*<BasketElement/>*/}

        </div>
    )

}

export default BasketList;