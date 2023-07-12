export const state = {
    pizzaFilters:[
        {
            id:1,
            name:"все"
        },
        {
            id:2,
            name:"мясные"
        },
        {
            id:3,
            name:"вегетарианская"
        },
        {
            id:4,
            name:"гриль"
        },
        {
            id:5,
            name:"острые"
        },
        {
            id:6,
            name:"закрытые"
        },
    ],

    pizzaSorts :[
        {
            id:1,
            name:"популярности"
        },
        {
            id:2,
            name:"по цене"
        },
        {
            id:3,
            name:"по алфавиту"
        },
    ],

    activePizzaFilter : {
        id:1,
        name:"все"
    },

    activePizzaSort : {
        id:1,
        name:"популярности"
    },

    pizzaList:[
        {
            id:1,
            name:"чизбургер-пицца",
            img:"images/pizza/pizza-cheeseburger.svg",
            breadSizes:[
                {
                    id:1,
                    name:"тонкое"
                },
                {
                    id:2,
                    name:"традиционное"
                }
            ],
            pizzaLengths: [
                {
                    id:1,
                    name:'26 см'
                },
                {
                    id:2,
                    name:'30 см'
                },
                {
                    id:3,
                    name:'40 см'
                }
            ],

            price:395,
        },
        {
            id:2,
            name:"сырная",
            img:"/images/pizza/pizza-cheese.svg",
            breadSizes:[
                {
                    id:1,
                    name:"тонкое"
                },
                {
                    id:2,
                    name:"традиционное"
                }
            ],
            pizzaLengths: [
                {
                    id:1,
                    name:'26 см'
                },
                {
                    id:2,
                    name:'30 см'
                },
                {
                    id:3,
                    name:'40 см'
                }
            ],
            price:450
        },

        {
            id:3,
            name:"креветки по-азиатски",
            img:"/images/pizza/pizza-asian.svg",
            breadSizes:[
                {
                    id:1,
                    name:"тонкое"
                },
                {
                    id:2,
                    name:"традиционное"
                }
            ],
            pizzaLengths: [
                {
                    id:1,
                    name:'26 см'
                },
                {
                    id:2,
                    name:'30 см'
                },
                {
                    id:3,
                    name:'40 см'
                }
            ],
            price:450
        },

        {
            id:4,
            name:"Сырный цыпленок",
            img:"/images/pizza/pizza-cheeseChicken.svg",
            breadSizes:[
                {
                    id:1,
                    name:"тонкое"
                },
                {
                    id:2,
                    name:"традиционное"
                }
            ],
            pizzaLengths: [
                {
                    id:1,
                    name:'26 см'
                },
                {
                    id:2,
                    name:'30 см'
                },
                {
                    id:3,
                    name:'40 см'
                }
            ],
            price:450
        },
    ]
}