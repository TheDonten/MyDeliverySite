import React from "react";
import BasketSends from "./BasketSend.module.css"

const BasketSend = () =>{
    return(
        <div className={BasketSends.BasketSend}>
                <button>
                    BasketSend
                </button>
            <div>
                SumCost
            </div>

        </div>
    )
}

export default BasketSend;