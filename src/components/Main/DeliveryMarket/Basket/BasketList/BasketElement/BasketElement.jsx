import React from "react";
import BasketElements from './BasketElement.module.css'

const BasketElement = (props) =>{
    return(
        <div className={BasketElements.BasketElement}>
            <div className={BasketElements.Image}>
                PNG
                {props.Element.name}
            </div>
            <div className={BasketElements.Cost}>
                Cost
            </div>
            <div className={BasketElements.Count}>
                <button className={BasketElements.dec} onClick={props.DecEl}>
                    -
                </button>
                <div className={BasketElements.coutIn}>
                    {props.Element.count}
                </div>
                <button className={BasketElements.inc} onClick={props.IncEl}>
                    +
                </button>
            </div>
            <button onClick={props.RemoveEl}>
                delete
            </button>
        </div>
    )
}

export default BasketElement;