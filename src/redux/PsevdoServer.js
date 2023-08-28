export const checkObj = {
    Markets: [
        {
            name: "PizzaSushiWok",
            MenuFilter: ["Pizza", "Sushi", "Wok"],
            Menu: {
                Pizza: [{id: 0, name: "Pizza0"}, {id: 1, name: "Pizza1"}, {id: 2, name: "Pizza2"}, {
                    id: 3,
                    name: "Pizza3"
                }],
                Sushi: [{id: 0, name: "Sushi0"}, {id: 1, name: "Sushi1"}, {id: 2, name: "Sushi2"}],
                Wok: [{id: 0, name: "Wok0"}, {id: 1, name: "Wok1"}, {id: 2, name: "Wok2"}]
            },
            recall : 100,
            valuation : 4.5,
            CountBuy : 500,
            isLoading: false,
            error: null,
            thisMenu: ""
        },
        {
            name : "PeterBurger",
            MenuFilter: ["Burger", "Chicken"],
            Menu : {
                Burger: [{id : 0, name : "Burger0"}, {id : 1, name : "Burger1"}],
                Chicken : [{id : 0, name : "Chicken0"}, {id : 1, name : "Chicken1"}]
            },
            recall : 80,
            valuation: 5,
            CountBuy: 242,
            isLoading: false,
            error : null,
            thisMenu: "",
        }
    ],
    isLoading: false,
    error: null,
}