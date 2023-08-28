import {checkObj} from "./PsevdoServer";

export const COUNT_PAGES = "COUNT_PAGES";
export const GET_MARKETS = "GET_MARKETS";
export const SET_PAGE = "SET_PAGE";
export const GET_MARKET_DATA_REQUEST = "GET_MARKET_DATA_REQUEST";
export const GET_MARKET_DATA_SUCCESS = "GET_MARKET_DATA_SUCCESS";
/*
{
    name : "",
    recall : 100,
    valuation : 4.5,
    CountBuy : 500,
}

 */

let initialState = {
    MarketInfo : [],
    ThisPage : 0,
    LimitView : 1,
    limit : 3,//MaxPAge
    isLoading : false,
    error : null

}

export const getMarketDataRequest = () =>{
    return{
        type: GET_MARKET_DATA_REQUEST
    }
}

export const getMarketDataSuccess = (Data, Page) =>{
    return{
        type : GET_MARKET_DATA_SUCCESS,
        payload : Data,
        page : Page
    }
}

export const getMarketData = (ThisPage, LimitPage) =>{
    return (dispatch) => {
        dispatch(getMarketDataRequest());
        setTimeout( () =>{
            let localobj = checkObj.Markets.map( (el) => {
                return {
                    name : el.name,
                    recall : el.recall,
                    valuation : el.valuation,
                    CountBuy : el.CountBuy
                }
            })
            localobj = localobj.splice(ThisPage*LimitPage, ThisPage*LimitPage + LimitPage);
            dispatch(getMarketDataSuccess(localobj, ThisPage))
        }, 2000)

    }
}

const reducer_market = (state = initialState, action) =>{
    switch (action.type){
        case GET_MARKET_DATA_REQUEST :{
            return{
                ...state,
                MarketInfo : [],
                isLoading: true,
                error : null
            }

        }
        case GET_MARKET_DATA_SUCCESS :{
            console.log(GET_MARKET_DATA_SUCCESS)
            return {
                ...state,
                MarketInfo: action.payload,
                isLoading: false,
                ThisPage: action.page,
                error : null
            }
        }
        default : {
            return state;
        }
    }
}


export default reducer_market;