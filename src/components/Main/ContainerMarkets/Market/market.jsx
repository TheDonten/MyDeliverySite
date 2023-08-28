import React from "react";
import markets from './market.module.css'

const Market = (props) =>{
    console.log(props);
    return(
      <div className={markets.market_main} onClick={ () => props.navigate(`${props.location.pathname}/${props.market.name}`)}>
            <div className={markets.png_market}>
                PNG {props.market.name}
            </div>
          <div className={markets.recall}>
              {props.market.recall}
          </div>
          <div className={markets.valuation}>
              {props.market.valuation}
          </div>
          <div className={markets.order}>
              {props.market.CountBuy}
          </div>
      </div>
    );
}

export default Market;