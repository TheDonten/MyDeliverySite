import React from "react";
import mains from './Main.module.css'

import ContainerMenu from "./Menu/ContainerMenu";
import ContainerBasket from "./Basket/ContainerBasket";


const ContainerMain = ({match}) => {


    return (

        <div className={mains.main}>
            <ContainerMenu/>
            <ContainerBasket/>
        </div>

    );

}

export default ContainerMain;