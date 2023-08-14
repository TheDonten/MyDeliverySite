
export const UPDATE_BASKET = "UPDATE_BASKET";
export const DELETE_ELEMENT = "DELETE_ELEMENT";


let initialState =  {
    Basket : [],
}

export const postUpdateBasket = (Data) =>{
    return {
        type : UPDATE_BASKET,
        data : Data
    }
}


const reducer_basket = (state = initialState, action) =>{
    console.log(state);
    let localState = {...state};
    switch (action.type){
        case UPDATE_BASKET:{
            if(action.data.count === 0)
                return state;
            let temp = localState.Basket.findIndex( (el) => el.name === action.data.name);
            if(temp !== -1)
                localState.Basket[temp].count += action.data.count;
            else
                localState.Basket.push(action.data);

            return {
                Basket: localState.Basket
            }
        }
        case DELETE_ELEMENT:{
                let temp = localState.Basket.splice(action.index,1)
            return{
                Basket: localState.Basket
            }
        }
        default:
            return state;
    }
}

export default reducer_basket;