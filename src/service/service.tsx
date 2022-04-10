import { Comment, Meal, restaurant } from "../mockDB/MockDB";
import { default as spicyIcon } from '../images/spicy-icon.svg'
import { default as vegetarianIcon } from '../images/vegetarian-icon.svg'
import { default as veganIcon } from '../images/vegan-icon.svg'
import { dish } from "../mockDB/MockDB";
import { itemInCart } from "../store/store";

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