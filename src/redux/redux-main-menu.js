export const GET_MENU_CHOOSE_REQUEST = "GET_MENU_CHOOSE_REQUEST";
export const GET_MENU_CHOOSE_SUCCESS = "GET_MENU_CHOOSE_SUCCESS";
export const PIZZA_CLICK = "PIZZA_CLICK";
export const SUSHI_CLICK = "SUSHI_CLICK";
export const WOK_CLICK = "WOK_CLICK";

let initialState =  {
    Menu : [],
    isLoading : false,
    error : null,
    thisMenu : "Pizza"
}

export const getMenuChooseRequest = () =>{
    return {
        type : GET_MENU_CHOOSE_REQUEST,
    };
}
export const getMenuChooseSuccess = (Data, MenuKey) =>{
    console.log(MenuKey);
    return {
        type: GET_MENU_CHOOSE_SUCCESS,
        payload : Data,
        thisMenu: MenuKey
    };
}

export const getMenuData = (NameMenu) => {
    return (dispatch) => {
        dispatch(getMenuChooseRequest());

        setTimeout( () =>{
            const data = {
                Pizza : [{id: 0, name : "Pizza0"}, {id: 1, name : "Pizza1"}, {id: 2, name : "Pizza2"}, {id: 3, name : "Pizza3"}],
                Sushi : [{id: 0, name : "Sushi0"}, {id: 1, name : "Sushi1"}, {id: 2, name : "Sushi2"}],
                Wok : [{id: 0, name : "Wok0"}, {id: 1, name : "Wok1"}, {id: 2, name : "Wok2"}],
            }

            dispatch(getMenuChooseSuccess(data[NameMenu], NameMenu))
        } , 2000) //Так как нету реального сервера, используется заглушка-симуляция.

    }
}

const reducer_menu = (state = initialState, action) =>{
    switch (action.type){
        case GET_MENU_CHOOSE_REQUEST:
            return {
                ...state,
                isLoading : true,
                error : null
            }
        case GET_MENU_CHOOSE_SUCCESS:
            return{
                Menu : action.payload,
                isLoading : false,
                error : null,
                thisMenu: action.thisMenu
            }
        default:
            return state;

    }

}

export default reducer_menu;