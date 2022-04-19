import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dish, Meal, restaurant } from "../mockDB/MockDB";
import { default as clockIcon } from '../images/clock-icon.svg'
import { getRestaurantByName, isRestaurantOpen, setCurrTime } from "../service/service";
import DishCard from "../Components/DishCard/DishCard";
import { RootStateOrAny, useSelector } from "react-redux";
import DishModal from "../Components/DishModal/DishModal";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    color: black;

    & h1 {
        height: 40px;
        font-family: HelveticaNeue;
        font-size: 35px;
        font-weight: bold;
        letter-spacing: 2.33px;
    }

    & h2 {
        height: 28px;
        margin: 0;
        font-family: HelveticaNeue-thin;
        font-size: 24px;
        font-weight: normal;
        letter-spacing: 1.6px;
    }

    & span {
        &.open-container{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            font-family: HelveticaNeue-thin;    
        }
    }

    & img {
        &.restaurant-image{
            @media only screen and (min-width: 600px){
                height: 395px;
                width: 1102px;
                object-fit: contain;
            }
        }

        &.clock {
            margin-right: 7px;
        }
    }

    & div {
        &.meal-time-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;

            & div.meal-time p {
                width: 100%;
                height: 20px;
                font-family: HelveticaNeue-thin;    
                margin: 10px 5px 10px 5px;
                font-size: 17px;
                font-weight: 100;
                letter-spacing: 1.21px;
                cursor: default;
                color: black;

                &:active,:hover {
                    border-bottom: 1px solid rgba(222, 146, 0, 0.9);
                    padding-bottom:3px;
                }
            }
        }
        &.food-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                margin-top: 20px;
            }
    }

`;

const FullRestaurant: React.FC = () => {

    const { restaurantParam } = useParams();

    const dishDisplay = useSelector((state: RootStateOrAny) => state.displayDish.toShowDish);
    const allDishes: dish[] = useSelector((state: RootStateOrAny) => state.displayDish.allDishes)

    const [showAll, setShowAll] = useState(false);
    const [restaurant, setRestaurant] = useState<restaurant | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [displayedElement, setDisplayElement] = useState<JSX.Element[]>([]);
    const [timeSelected, setTimeSelected] = useState<Meal>(setCurrTime());
    const [displayedDishes, setDisplayedDishes] = useState<dish[]>([]);


    useEffect(() => {
        setShowAll(!(dishDisplay))
    }, [dishDisplay]);

    useEffect(() => {
        const getRestaurant = async () => {
            const returnedVal = await getRestaurantByName(restaurantParam ? restaurantParam : '');
            if (returnedVal)
                setRestaurant(returnedVal)
        }
        getRestaurant();
        setIsOpen(isRestaurantOpen(restaurant));
    }, [])

    const reduceDishesArray = useCallback((currMeal: Meal) => {
        const newDishArray: dish[] = [];
        setDisplayedDishes([]);
        allDishes.forEach(dish => {
            if (isMealContained(dish.meal, currMeal) && dish.restaurantId === restaurant?.id) {
                newDishArray.push(dish);
            }
        })
        setDisplayedDishes(newDishArray);
        setDisplayElement(mapElements());
    }, [restaurant, timeSelected, allDishes])

    const mapElements = () => {
        return displayedDishes.map((dish, index) => <div key={index} className="single-card"><DishCard dish={dish} isSmall={true} /></div>)
    }

    const isMealContained = (dishMeals: Meal[], currMeal: Meal) => {
        let isSameMeal: boolean = false;
        dishMeals.forEach(dishMeal => {
            if (dishMeal === currMeal) {
                isSameMeal = true;
            }
        })
        return isSameMeal;
    }

    const onBreakfastClick = (e: any) => {
        setTimeSelected(Meal.Breakfast);
        reduceDishesArray(Meal.Breakfast);
    }

    const onLunchClick = () => {
        setTimeSelected(Meal.Lunch);
        reduceDishesArray(Meal.Lunch);
    }

    const onDinnerClick = () => {
        setTimeSelected(Meal.Dinner);
        reduceDishesArray(Meal.Dinner);
    }

    return (
        <>
            {dishDisplay && <DishModal />}
            {showAll &&
                <StyledDiv>
                    <img src={require(`../images/${restaurant?.smallImage}`)} className='restaurant-image' alt={`${restaurant?.name} photo`}></img>
                    <h1>{restaurant?.name}</h1>
                    <h2>{restaurant?.chef}</h2>
                    <span className="open-container">
                        <img className="clock" src={clockIcon} />
                        <p>{isOpen ? 'Open now' : 'Close now'}</p>
                    </span>
                    <div className="meal-time-container">
                        <div className="meal-time" onClick={onBreakfastClick}><p>Breakfast</p></div>
                        <div className="meal-time" onClick={onLunchClick}><p>Lunch</p></div>
                        <div className="meal-time" onClick={onDinnerClick}><p>Dinner</p></div>
                    </div>
                    <div className="food-container">{displayedElement}</div>
                </StyledDiv>}
        </>
    );
}

export default FullRestaurant;
