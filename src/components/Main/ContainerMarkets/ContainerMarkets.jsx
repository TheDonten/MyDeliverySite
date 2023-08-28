import React, {useEffect} from "react";
import markets from './ContainerMarkets.module.css'
import Market from "./Market/market";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMarketData} from "../../../redux/redux-main-markets";

const ContainerMarkets = () => {
    let navigate = useNavigate();
    let locale = useLocation();
    let params = useParams();
    const dispatch = useDispatch();
    //
    let market = useSelector(state => state.MarketReducer);

    useEffect( () => {
        dispatch(getMarketData(market.ThisPage, market.LimitView));
    },[])

    return (
        <div className={markets.MarketMain}>
            <div className={markets.content}>
                {market.MarketInfo.map((market) => {return <Market navigate = {navigate} market = {market} location = {locale}/>})}
            </div>
            <div className={markets.choose_page}>
                {
                    Array.from( {length : market.limit}, (el,index) => index).map( (index) =>{
                    if(index === market.ThisPage)
                    return (
                        <span className={markets.selected}>
                            {index}
                        </span>
                    );
                    else {
                        return(
                        <span className={markets.choose_page} onClick={ () => {dispatch(getMarketData(index, market.LimitView)) }}>
                            {index}
                        </span>
                        );
                    }
                })}
                {/*<span>*/}
                {/*    1*/}
                {/*</span>*/}
                {/*<span>*/}
                {/*    2*/}
                {/*</span>*/}
            </div>
        </div>
    );
}

export default ContainerMarkets;