import React from "react";
import mains from './Market.module.css'

import ContainerMenu from "./Menu/ContainerMenu";
import ContainerBasket from "./Basket/ContainerBasket";

const ContainerDelMarket = ({match}) => {


    return (

        <div className={mains.main}>
            <ContainerMenu/>
            <ContainerBasket/>
        </div>

    );

}

export default ContainerDelMarket;