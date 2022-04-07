import { default as claroimage } from '../images/claro-small-image.png'
import { default as tigerliliimage } from '../images/tiger-lili-small-image.png'
import { default as luminaimage } from '../images/lumina-small-image.png'
import { default as kaltzone } from '../images/Kaltzone.png'
import { default as garbanzoPrito } from '../images/garbanzo-prito-image.png'
import { default as gespacho } from '../images/gespacho-image.png'
import { default as padkimao } from '../images/pad-ki-mao-image.png'
import { default as redfarm } from '../images/red-farm-image.png'
import { default as smokedpizza } from '../images/smoked-pizza-image.png'
import { default as yossiShitrit } from '../images/yossi-shitrit-image.png'
import { default as spicyIcon } from '../images/spicy-icon.svg'
import { default as vegetarianIcon } from '../images/vegetarian-icon.svg'
import { default as veganIcon } from '../images/vegan-icon.svg'

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
    isSignatureDish: boolean,
    image: string,
}

export type chef = {
    name: string,
    description: string,
    image: string,
}

//Mock data:

//Chefs:
export const Chefs: chef[] = [
    {
        name: 'Yossi Shitrit',
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
        image: yossiShitrit,
    }
]

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
        smallImage: claroimage,
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
        smallImage: luminaimage,
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
        smallImage: tigerliliimage,
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
        smallImage: claroimage,
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
        smallImage: claroimage,
        rating: 9.1,
    }

]

//Dishes:
export const dishes: dish[] = [
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
        isSignatureDish: true,
        image: padkimao,
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
        isSignatureDish: false,
        image: padkimao,
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
        isSignatureDish: false,
        image: redfarm,
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
        isSignatureDish: true,
        image: redfarm,
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
        isSignatureDish: false,
        image: kaltzone,
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
        sides: ['More rice', 'Sticky rice'],
        changes: ['Without peanuts', 'No lemon', 'No Egg'],
        isSignatureDish: true,
        image: padkimao,
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
        isSignatureDish: false,
        image: garbanzoPrito,
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
        isSignatureDish: true,
        image: smokedpizza,
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
        isSignatureDish: false,
        image: smokedpizza,
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
        isSignatureDish: false,
        image: kaltzone,
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
        isSignatureDish: true,
        image: gespacho,
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
        isSignatureDish: true,
        image: smokedpizza,
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
        isSignatureDish: false,
        image: redfarm,
    },
]


//functions:
export const getRestaurants = () => {
    return Restaurants;
}

export const getDishes = () => {
    return dishes;
}

export const getChef = () => {
    return Chefs;
}

export const selectCommentIcon = (dishComment: Comment) => {
    switch (dishComment) {
        case Comment.spicy:
            return spicyIcon;
        case Comment.vegeterian:
            return vegetarianIcon;
        case Comment.vegan:
            return veganIcon;
        default: return 'error in returning comment icon';
    }

}
