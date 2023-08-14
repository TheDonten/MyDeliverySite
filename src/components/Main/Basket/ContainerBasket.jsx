import React from "react";
import baskets from './basket.module.css'
import BasketList from "./BasketList/BasketList";
import BasketSend from "./BasketSend/BasketSend";
import {useDispatch, useSelector} from "react-redux";
const containerBasket = ()   =>{

    let dispatch = useDispatch();

    let stateThis = useSelector(state => state.BasketReducer);

    return(
      <div className={baskets.basket}>
          <BasketList BasketList = {stateThis.Basket} dispatch = {dispatch}/>
          <BasketSend/>
      </div>
    );
}

export default containerBasket;