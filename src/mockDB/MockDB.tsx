// Types:
export type restaurant = {
    name: string,
    id: number,
    chef: string,
    opens: {
        openingTime: string,
        closingTime: string,
    },
    dished: string[],
    bigImage: string,
    smallImage: string,
    rating: number,
}

export enum Meal {
    Breakfest = 1,
    Lunch,
    Dinner,
}

export enum Comment {
    spicy = 1,
    vegeterian,
    vegan,
}

export type dish = {
    name: string,
    restaurantId: number,
    ingredients: string[],
    price: number,
    meal: Meal[],
    comment: null | Comment,
    sides: string[],
    changes: string[],
}

export type chef = {
    name: string,
    description: string,
    image: string,
}


//Mock data:
//Restaurants:
export const Restaurants: restaurant[] = [
    {
        name: 'Claro',
        id: 1,
        chef: 'Ran Shmueli',
        opens: {
            openingTime: '12:00',
            closingTime: '22:00',
        },
        dished: [
            'Pad Ki Mao',
            'Ta Ma-La-Ko',
            'Red Farm',
        ],
        bigImage: '',
        smallImage: '',
        rating: 8.8,
    },

    {
        name: 'Lumina',
        id: 2,
        chef: 'Meir Adoni',
        opens: {
            openingTime: '11:30',
            closingTime: '23:00',
        },
        dished: [
            'Labrak',
            'Piree`',
        ],
        bigImage: '',
        smallImage: '',
        rating: 8.5,
    },

    {
        name: 'Tiger Lili',
        id: 3,
        chef: 'Yanir Green',
        opens: {
            openingTime: '11:30',
            closingTime: '21:30',
        },
        dished: [
            'Pad Kepao',
            'Sandwich Sushi',
        ],
        bigImage: '',
        smallImage: '',
        rating: 8.5,
    },

    {
        name: 'Popina',
        id: 4,
        chef: 'Orel Kimchi',
        opens: {
            openingTime: '11:30',
            closingTime: '23:00',
        },
        dished: [
            'Smoked Pizza',
            'Ravioli',
            'Kaltzone',
        ],
        bigImage: '',
        smallImage: '',
        rating: 9.4,
    },

    {
        name: 'Onza',
        id: 5,
        chef: 'Yossi Shitrit',
        opens: {
            openingTime: '11:30',
            closingTime: '23:00',
        },
        dished: [
            'Gespacho',
        ],
        bigImage: '',
        smallImage: '',
        rating: 9.1,
    },

    {
        name: 'Kitchen Market',
        id: 6,
        chef: 'Yossi Shitrit',
        opens: {
            openingTime: '11:00',
            closingTime: '23:30',
        },
        dished: [
            'Smoked Pizza',
            'Sandwich Sushi',
        ],
        bigImage: '',
        smallImage: '',
        rating: 9.1,
    }

]

//Dishes:
export const Dishes: dish[] = [
    {
        name: 'Pad Ki Mao',
        restaurantId: 1,
        ingredients: [
            'Shrimps',
            'Glass Noodles',
            'Kemiri Nuts',
            'Shallots',
            'Lemon Grass',
            'Magic Chilli Brown Coconut',
        ],
        price: 88,
        meal: [Meal.Lunch, Meal.Dinner],
        comment: Comment.spicy,
        sides: ['White Bread', 'Sticky Rice',],
        changes: ['Without Peanuts', 'Sticky Rice'],
    },
    {
        name: 'Ta Ma-La-Ko',
        restaurantId: 1,
        ingredients: [
            'Green Papaya',
            'Mango',
            'Chukka Chili',
            'Mint',
            'Kaffir lime',
            'Cashew',
        ],
        price: 98,
        meal: [Meal.Lunch, Meal.Dinner],
        comment: Comment.spicy,
        sides: ['Sticky Rice',],
        changes: ['Without Peanuts', 'Sticky Rice'],
    },
    {
        name: 'Red Farm',
        restaurantId: 1,
        ingredients: [
            'Tofu',
            'Spekkoek',
            'Peanuts',
            'Spicy Manis',
            'Pear Yakitori',
        ],
        price: 98,
        meal: [Meal.Dinner],
        comment: null,
        sides: ['Sticky Rice',],
        changes: ['Without Peanuts', 'Sticky Rice'],
    },

    {
        name: 'Labrak',
        restaurantId: 2,
        ingredients: [
            'Tofu',
            'Spekkoek',
            'Peanuts',
            'Spicy Manis',
            'Pear Yakitori',
        ],
        price: 98,
        meal: [Meal.Dinner],
        comment: null,
        sides: ['Sticky Rice',],
        changes: ['Without Peanuts', 'Sticky Rice'],
    },

    {
        name: 'Piree',
        restaurantId: 2,
        ingredients: [
            'Potatoes',
            'Butter',
        ],
        price: 43,
        meal: [Meal.Breakfest, Meal.Lunch],
        comment: null,
        sides: [],
        changes: ['Without butter'],
    },

    {
        name: 'Pad Kepao',
        restaurantId: 3,
        ingredients: [
            'Noodles',
            'Soy',
            'Teriyaki',
            'Beef',
            'Lemon',
            'Egg',
        ],
        price: 71,
        meal: [Meal.Lunch, Meal.Dinner],
        comment: Comment.spicy,
        sides: [],
        changes: ['Without peanuts', 'No lemon', 'No Egg'],
    },

    {
        name: 'Sandwich Sushi',
        restaurantId: 3,
        ingredients: [
            'Rice',
            'Carrot',
            'Cucamber',
            'Cream Cheese',
            'Tamago',
            'Shitaki'
        ],
        price: 54,
        meal: [Meal.Breakfest, Meal.Lunch, Meal.Dinner],
        comment: Comment.spicy,
        sides: [],
        changes: ['Without peanuts', 'No lemon', 'No Egg'],
    },

    {
        name: 'Smoked Pizza',
        restaurantId: 4,
        ingredients: [
            'Tomatoes',
            'Hot Pepper',
            'Cheese',
        ],
        price: 63,
        meal: [Meal.Lunch, Meal.Dinner],
        comment: Comment.spicy,
        sides: [],
        changes: [],
    },
    {
        name: 'Ravioli',
        restaurantId: 4,
        ingredients: [
            'Tomatoes',
            'Cheese',
            'Ravioli pasta',
            'Basil',
        ],
        price: 67,
        meal: [Meal.Lunch, Meal.Dinner],
        comment: null,
        sides: [],
        changes: ['More parmagane'],
    },

    {
        name: 'Kaltzone',
        restaurantId: 4,
        ingredients: [
            'Tomatoes',
            'Cheese',
            'Basil',
        ],
        price: 61,
        meal: [Meal.Breakfest, Meal.Lunch, Meal.Dinner],
        comment: null,
        sides: [],
        changes: [],
    },

    {
        name: 'Gespacho',
        restaurantId: 5,
        ingredients: [
            'Beef',
            'Olive oil',
        ],
        price: 61,
        meal: [Meal.Dinner],
        comment: null,
        sides: [],
        changes: [],
    },

    {
        name: 'Smoked Pizza',
        restaurantId: 6,
        ingredients: [
            'Tomatoes',
            'Hot Pepper',
            'Cheese',
        ],
        price: 63,
        meal: [Meal.Lunch, Meal.Dinner],
        comment: Comment.spicy,
        sides: [],
        changes: [],
    },

    {
        name: 'Sandwich Sushi',
        restaurantId: 6,
        ingredients: [
            'Rice',
            'Carrot',
            'Cucamber',
            'Cream Cheese',
            'Tamago',
            'Shitaki'
        ],
        price: 54,
        meal: [Meal.Breakfest, Meal.Lunch, Meal.Dinner],
        comment: Comment.spicy,
        sides: [],
        changes: ['Without peanuts', 'No lemon', 'No Egg'],
    },
]