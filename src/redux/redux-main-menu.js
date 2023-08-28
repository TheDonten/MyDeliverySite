import {checkObj} from "./PsevdoServer";

export const GET_MENU_CHOOSE_REQUEST = "GET_MENU_CHOOSE_REQUEST";
export const GET_MENU_CHOOSE_SUCCESS = "GET_MENU_CHOOSE_SUCCESS";
export const GET_MENU_FILTER = "GET_MENU_FILTER";
export const GET_ALL_INFO_MARKET_REQUEST = "GET_ALL_INFO_MARKET_REQUEST";
export const GET_ALL_INFO_MARKET_SUCCESS = "GET_ALL_INFO_MARKET_SUCCESS";



export const PIZZA_CLICK = "PIZZA_CLICK";
export const SUSHI_CLICK = "SUSHI_CLICK";
export const WOK_CLICK = "WOK_CLICK";




let initialState = {
    name : "",
    Menu: [],
    MenuFilter: [],
    isLoading: false,
    error: null,
    thisMenu: ""
}

let data = {}


export const getMenuChooseRequest = () => {
    return {
        type: GET_MENU_CHOOSE_REQUEST,
    };
}

export const getAllInfoMarketRequest = (data) =>{
    return {
        type : GET_ALL_INFO_MARKET_REQUEST,
        name : data,
    }
}

export const getAllInfoMarketSuccess = (Data) =>{
    return {
        type : GET_ALL_INFO_MARKET_SUCCESS,
        payload : Data,
    }
}

export const getMenuChooseSuccess = (Data, MenuKey) => {
    return {
        type: GET_MENU_CHOOSE_SUCCESS,
        payload: Data,
        thisMenu: MenuKey
    };
}

export const getAllInfoMarket = (NameMarket) => {
    return (dispatch) =>{
        dispatch(getAllInfoMarketRequest(NameMarket));

        setTimeout( () => {
            let localObj = checkObj.Markets.find( (el) => {
                return el.name === NameMarket;
            });

            dispatch(getAllInfoMarketSuccess({name : NameMarket, filter : localObj.MenuFilter}))
        }, 2000)
    }
}

export const getMenuData = (NameMenu, KeyMarket) => {
    return (dispatch) => {
        dispatch(getMenuChooseRequest());

        setTimeout(() => {

            let localObj = checkObj.Markets.find(el => el.name === KeyMarket);
            dispatch(getMenuChooseSuccess(localObj.Menu[NameMenu], NameMenu))
        }, 2000) //Так как нету реального сервера, используется заглушка-симуляция.

    }
}

const reducer_menu = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU_CHOOSE_REQUEST:

            return {
                ...state,
                Menu: [],
                thisMenu: "",
                isLoading: true,
                error: null
            }
        case GET_MENU_CHOOSE_SUCCESS:
            return {
                ...state,
                Menu: action.payload,
                isLoading: false,
                error: null,
                thisMenu: action.thisMenu
            }
        case GET_ALL_INFO_MARKET_REQUEST:{
            if(state.name !== action.name) {
                state.MenuFilter = [];
                state.Menu = [];
            }
            return{
                ...state,
                error : null,
                isLoading: true,
            }

        }
        case GET_ALL_INFO_MARKET_SUCCESS: {
            return{
                ...state,
                name : action.payload.name,
                MenuFilter: action.payload.filter,
                error : null,
                isLoading: false
            }

        }
        default:
            return state;

    }

}

export default reducer_menu;