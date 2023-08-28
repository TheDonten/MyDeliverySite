import React from "react";
import ContainerDelMarket from "./DeliveryMarket/ContainerDelMarket";
import {Route, Routes} from "react-router-dom";
import ContainerMarkets from "./ContainerMarkets/ContainerMarkets";
import mains from './Main.module.css'

const ChooseMarketContainer = ({match}) => {


    return (

        <div className={mains.main}>
            <Routes>
                <Route path = '/Resturan/' element = {<ContainerMarkets/>}/>
                <Route path='/Resturan/:name' element = {<ContainerDelMarket />}/>
            </Routes>
        </div>

    );

}

export default ChooseMarketContainer;