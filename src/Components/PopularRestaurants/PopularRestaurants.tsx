import RestaurantCard from "../RestaurantCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getRestaurants, restaurant } from "../../mockDB/MockDB";

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h3{
        white-space: nowrap;
        height: 22px;
        margin-bottom: 40px;
        margin-top: 20px;
        font-family: HelveticaNeue;
        font-size: 15px;
        font-weight: 100;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: 0.93px;
        text-align: center;
        color: black;
    }

    & div{
        &.scrolling-wrapper {
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            border: solid red;
         }

         &.card {
            display: inline-block;
            border: solid blue;
         }
    }
`


const PopularRestaurants: React.FC = () => {

    const [favoriteRestaurants, setFavoriteRestaurants] = useState<restaurant[]>([]);

    useEffect(() => {
        const newFavoriteRestaurants = getRestaurants().sort((restA: restaurant, restB: restaurant) => {
            return restA.rating - restB.rating;
        }).slice(0, 3)
        setFavoriteRestaurants(newFavoriteRestaurants)
    }, []);


    const mapFavorites = () => {
        return favoriteRestaurants.map(singleRestaurant => {
            console.log(singleRestaurant);
            return <div className="card"><RestaurantCard restaurant={singleRestaurant} key={singleRestaurant.id} /></div>
        });
    }

    return (
        <WrapperDiv>
            <h3>THE POPULAR RESTAURANT IN EPICURE:</h3>
            <div className="scrolling-wrapper">{mapFavorites()}</div>
        </WrapperDiv>
    );
}

export default PopularRestaurants;