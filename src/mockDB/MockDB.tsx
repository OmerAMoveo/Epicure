import { default as claroimage } from '../images/claro-small-image.png'
import { default as tigerliliimage } from '../images/tiger-lili-small-image.png'
import { default as luminaimage } from '../images/lumina-small-image.png'
// import { default as kaltzone } from '../images/Kaltzone.png'
// import { default as garbanzoPrito } from '../images/garbanzo-prito-image.png'
// import { default as gespacho } from '../images/gespacho-image.png'
// import { default as padkimao } from '../images/pad-ki-mao-image.png'
// import { default as redfarm } from '../images/red-farm-image.png'
// import { default as smokedpizza } from '../images/smoked-pizza-image.png'
import { default as yossiShitrit } from '../images/yossi-shitrit-image.png'
import { default as spicyIcon } from '../images/spicy-icon.svg'
import { default as vegetarianIcon } from '../images/vegetarian-icon.svg'
import { default as veganIcon } from '../images/vegan-icon.svg'

export type restaurant = {
    name: string,
    id: number,
    chef: string,
    opens: {
        openingTime: string,
        closingTime: string,
    },
    smallImage: string,
    rating: number,
    cuisine: Cuisine,
    isPopular: boolean,
}
export enum Cuisine {
    Asian = 1,
    Israeli,
    Italian,
    Seafood,
}

export enum Meal {
    Breakfast = 1,
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
    id: number,
    description: string,
    image: string,
}

// //Mock data:

// //Chefs:
// export const Chefs: chef[] = [
//     {
//         name: 'Yossi Shitrit',
//         description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
//         image: yossiShitrit,
//     }
// ]

// //Restaurants:
// export const Restaurants: restaurant[] = [
//     {
//         name: 'Claro',
//         id: 1,
//         chef: 'Ran Shmueli',
//         opens: {
//             openingTime: '12:00',
//             closingTime: '22:00',
//         },
//         dished: [
//             'Pad Ki Mao',
//             'Ta Ma-La-Ko',
//             'Red Farm',
//         ],
//         smallImage: claroimage,
//         rating: 8.8,
//         cuisine: Cuisine.Israeli,
//     },

//     {
//         name: 'Lumina',
//         id: 2,
//         chef: 'Meir Adoni',
//         opens: {
//             openingTime: '11:30',
//             closingTime: '23:00',
//         },
//         dished: [
//             'Labrak',
//             'Piree`',
//         ],
//         smallImage: luminaimage,
//         rating: 8.5,
//         cuisine: Cuisine.Seafood,

//     },

//     {
//         name: 'Tiger Lili',
//         id: 3,
//         chef: 'Yanir Green',
//         opens: {
//             openingTime: '11:30',
//             closingTime: '21:30',
//         },
//         dished: [
//             'Pad Kepao',
//             'Sandwich Sushi',
//         ],
//         smallImage: tigerliliimage,
//         rating: 8.5,
//         cuisine: Cuisine.Asian,

//     },

//     {
//         name: 'Popina',
//         id: 4,
//         chef: 'Orel Kimchi',
//         opens: {
//             openingTime: '11:30',
//             closingTime: '23:00',
//         },
//         dished: [
//             'Smoked Pizza',
//             'Ravioli',
//             'Kaltzone',
//         ],
//         smallImage: '',
//         rating: 9.4,
//         cuisine: Cuisine.Italian,
//     },

//     {
//         name: 'Onza',
//         id: 5,
//         chef: 'Yossi Shitrit',
//         opens: {
//             openingTime: '11:30',
//             closingTime: '23:00',
//         },
//         dished: [
//             'Gespacho',
//         ],
//         smallImage: claroimage,
//         rating: 9.1,
//         cuisine: Cuisine.Italian,
//     },

//     {
//         name: 'Kitchen Market',
//         id: 6,
//         chef: 'Yossi Shitrit',
//         opens: {
//             openingTime: '11:00',
//             closingTime: '23:30',
//         },
//         dished: [
//             'Smoked Pizza',
//             'Sandwich Sushi',
//         ],
//         smallImage: claroimage,
//         rating: 9.1,
//         cuisine: Cuisine.Israeli,

//     }

// ]

//functions:
export const getRestaurants = () => {
    return [];
}

export const getCuisines = () => {
    const returnedVal = (Object.keys(Cuisine) as (keyof typeof Cuisine)[]).map(key => {

        return { text: Cuisine[key].toString() };
    },
    );
    console.log(returnedVal);
    return returnedVal;

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
