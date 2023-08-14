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
                {props.Element.count}
            </div>

            <button onClick={props.RemoveEl}>
                delete
            </button>
        </div>
    )
}

export default BasketElement;