import { chef, Comment, Cuisine, Meal, restaurant } from "../mockDB/MockDB";
import { default as spicyIcon } from '../images/spicy-icon.svg'
import { default as vegetarianIcon } from '../images/vegetarian-icon.svg'
import { default as veganIcon } from '../images/vegan-icon.svg'
import { dish } from "../mockDB/MockDB";
import { itemInCart } from "../store/store";
import { network } from "./network";

const RESTAURANT_URL = 'restaurants/';
const DISH_URL = 'dishes/';
const CHEFS_URL = 'chefs/'

export const mapIngredients = (dish: dish) => {
    return dish.ingredients.join(', ')
}

export const selectCommentIcon = (dishComment: Comment) => {
    if (dishComment === Comment.spicy) return spicyIcon;
    if (dishComment === Comment.vegeterian) return vegetarianIcon;
    if (dishComment === Comment.vegan) return veganIcon;
    return 'error in returning comment icon';
}

const itemsComparison = (firstItem: itemInCart, secondItem: itemInCart) => {

    const arrayComparioson = (array1: string[], array2: string[]) => {
        if (array1.sort().join(',') === array2.sort().join(',')) {
            return true;
        }
        return false;
    };
    return (firstItem.name === secondItem.name
        && firstItem.side === secondItem.side
        && firstItem.changes.length === secondItem.changes.length
        && arrayComparioson(firstItem.changes, secondItem.changes)
    );
}

export const findDish = (dishes: itemInCart[], wantedDish: itemInCart) => {

    if (dishes.length === 0)
        return false;

    return dishes.find(singleDish => itemsComparison(singleDish, wantedDish));

}

export const deleteItemFromCart = (cart: itemInCart[], item: itemInCart) => {
    cart = cart.filter(cartItem => cartItem.name !== item.name);
}

export const isRestaurantOpen = (singleRestaurant: restaurant | null) => {
    if (singleRestaurant === null)
        return false;
    let today = new Date();
    const hour = today.getHours().toString();
    const restaurantOpeningTime = singleRestaurant.opens.openingTime.split(':');
    const restaurantClosingTime = singleRestaurant.opens.closingTime.split(':');
    return restaurantOpeningTime[0] <= hour && restaurantClosingTime[0] >= hour;
}

export const setCurrTime = () => {
    const today = new Date();
    const hour = today.getHours();

    if (hour >= 1 && hour < 12) return Meal.Breakfast;
    if (hour >= 12 && hour < 17) return Meal.Lunch;
    if (hour >= 17 && hour < 1) return Meal.Dinner;

    return Meal.Lunch;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
export type restaurant = {
    name: string,
    id: number,
    chef: string,
    opens: {
        openingTime: string,
        closingTime: string,
    },
    dished: string[],
    smallImage: string,
    rating: number,
    cuisine: Cuisine,
}
*/

const intToCuisine = (cuisineInt: number) => {
    switch (cuisineInt) {
        case 1:
            return Cuisine.Asian;
        case 2:
            return Cuisine.Israeli;
        case 3:
            return Cuisine.Italian;
        case 4:
            return Cuisine.Seafood;
        default:
            return Cuisine.Israeli;
    }

}

const parseSingleRestaurant = (restaurant: any) => {
    const returnedVal: restaurant = ({
        name: restaurant.name,
        id: restaurant.id,
        chef: 'Yossi',
        opens: {
            openingTime: restaurant.opening_time,
            closingTime: restaurant.closing_time,
        },
        smallImage: restaurant.image,
        rating: restaurant.rating,
        cuisine: intToCuisine(restaurant.cuisine),
        isPopular: restaurant.is_popular
    })
    return returnedVal;
}

const parseRestaurantToArray = (restaurantsData: any[]) => {
    return restaurantsData.map(singleRestaurant => parseSingleRestaurant(singleRestaurant));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
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
*/

const makeMealArray = (isBr: boolean, isLnch: boolean, isDinn: boolean) => {
    let res: Meal[] = [];
    if (isBr) res.push(Meal.Breakfast);
    if (isLnch) res.push(Meal.Lunch);
    if (isDinn) res.push(Meal.Dinner);
    return res;
}

const intToComment = (commentNumber: number | null) => {
    switch (commentNumber) {
        case 1:
            return Comment.spicy;
        case 2:
            return Comment.vegeterian;
        case 3:
            return Comment.vegan;
        default:
            return null;
    }
}

const parseSingleDish = (dish: any) => {
    const res: dish = ({
        name: dish.name,
        restaurantId: dish.restaurant_id,
        ingredients: dish.ingredients,
        price: dish.price,
        meal: makeMealArray(dish.is_breakfast, dish.is_lunch, dish.is_dinner),
        comment: intToComment(dish.comment),
        sides: dish.sides,
        changes: dish.changes,
        isSignatureDish: dish.is_signature,
        image: dish.image,
    });
    return res;
}

const parseDishToArray = (dishesData: any[]) => {
    return dishesData.map(singleDish => parseSingleDish(singleDish));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const parseSingleChef = (chef: any) => {
    const res: chef = ({
        name: chef.first_name + ' ' + chef.last_name,
        id: chef.id,
        description: chef.description,
        image: chef.image,
    });
    return res;
}

const parseChefsToArray = (chefsData: any[]) => {
    return chefsData.map(singleChef => parseSingleChef(singleChef));
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const getAllRestaurants = async () => {
    const allRes = await network.get(RESTAURANT_URL);
    const returnedData = parseRestaurantToArray(allRes.data);
    return returnedData;
}

export const getRestaurantById = async (resId: number) => {
    const url = RESTAURANT_URL + 'getRestaurantById/' + `${resId}`;
    const res = await network.get(url);
    const returnedData = parseSingleRestaurant(res.data);
    return returnedData;
}

export const getAllDishes = async () => {
    const allDishes = await network.get(DISH_URL);
    const dishData = parseDishToArray(allDishes.data);
    return dishData;
}

export const getDishByKey = async (resId: number, dishName: string) => {
    const url = DISH_URL + `${resId}/` + `${dishName}`
    const res = await network.get(url);
    const returnedVal = parseSingleDish(res.data);
    return returnedVal;
}

export const getRestaurantByName = async (resName: string) => {
    const url = RESTAURANT_URL + 'getByName/' + `${resName}`
    const res = await network.get(url);
    const returnedData = parseSingleRestaurant(res.data);
    return returnedData;
}

export const getPopularRestaurants = async () => {
    const url = RESTAURANT_URL + 'getPopular/';
    console.log('here!!');
    const res = await network.get(url);
    const returnedVal: restaurant[] = parseRestaurantToArray(res.data);
    console.log(res.data);

    return returnedVal;
}
export const getAllChefs = async () => {
    const res = await network.get(CHEFS_URL);
    const returnedData = parseChefsToArray(res.data);
    return returnedData;
}

export const getRestaurantsByChefId = async (chefId: number) => {
    const url = CHEFS_URL + 'getByChef/' + `${chefId}`
    const res = await network.get(url);
    const returnedData = parseRestaurantToArray(res.data);
    return returnedData;
}

export const getChefById = async (chefId: number) => {
    const url = CHEFS_URL + 'getChefById/' + `${chefId}`
    const res = await network.get(url);
    const returnedData = parseSingleChef(res.data);
    return returnedData;
}