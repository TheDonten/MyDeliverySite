
export const UPDATE_BASKET = "UPDATE_BASKET";
export const DELETE_ELEMENT = "DELETE_ELEMENT";
export const INC_BASKET_ELEMENT = "INC_BASKET_ELEMENT";
export const DEC_BASKET_ELEMENT = "DEC_BASKET_ELEMENT";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const GIVE_REST_NAME = "GIVE_REST_NAME";

let initialState =  {
    RestName : "",
    Basket : [],
}
export const GiveRestName = (Name) =>{
    return{
        type : GIVE_REST_NAME,
        data : Name,
    }
}

export const postUpdateBasket = (Data,Name) =>{
    return {
        type : UPDATE_BASKET,
        data : Data,
        name : Name,
    }
}

export const DeleteElementBasket = (index) =>{
    return{
        type : DELETE_ELEMENT,
        index : index
    }
}

export const IncElementBasket = (index) => {
    return{
        type : INC_BASKET_ELEMENT,
        index : index
    }
}

export const DecElementBasket = (index) =>{
    return{
        type : DEC_BASKET_ELEMENT,
        index : index
    }
}

export const ClearBasket = (name) =>{
    return{
        type : CLEAR_BASKET,
        data : name
    }
}

const reducer_basket = (state = initialState, action) =>{
    console.log(state);
    let localState = {...state};
    switch (action.type){
        case UPDATE_BASKET:{
            if(state.RestName === "")
                state.RestName = action.name;
            else if(state.RestName !== action.name) {
               state.RestName = action.name;
               localState.Basket = [];
            }
            if(action.data.count === 0)
                return state;
            let temp = localState.Basket.findIndex( (el) => el.name === action.data.name);
            if(temp !== -1)
                localState.Basket[temp].count += action.data.count;
            else
                localState.Basket.push(action.data);

            return {
                ...state,
                Basket: localState.Basket
            }
        }
        case CLEAR_BASKET : {
            debugger;
            if(state.RestName === action.data)
                return state;
            return {
                Basket: [],
            }
        }
        case GIVE_REST_NAME : {
            return{
                ...state,
                RestName: action.data,
            }
        }
        case DELETE_ELEMENT:{
                localState.Basket.splice(action.index,1)
            return{
                ...state,
                Basket: localState.Basket
            }
        }
        case INC_BASKET_ELEMENT:{
            localState.Basket[action.index].count++;
            return{
                ...state,
                Basket: localState.Basket
            }
        }
        case DEC_BASKET_ELEMENT:{
            if(localState.Basket[action.index].count - 1 === 0){
                localState.Basket.splice(action.index,1)
                return{
                    ...state,
                    Basket: localState.Basket
                }
            }
            localState.Basket[action.index].count--;
            return{
                ...state,
                Basket: localState.Basket
            }
        }
        default:
            return state;
    }
}

export default reducer_basket;