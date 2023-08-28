
import {configureStore} from "@reduxjs/toolkit";
import reducer_menu from "./redux-main-menu";
import thunk from 'redux-thunk';
import reducer_basket from "./redux-main-basket";
import reducer_market from "./redux-main-markets";
// const reducer = {
//     main_app : MainAppReducer,
// }
export const store = configureStore({
    reducer : {
        MenuReducer : reducer_menu,
        BasketReducer : reducer_basket,
        MarketReducer : reducer_market,
    },
    middleware : [thunk]
})

window.store = store;

export default store;