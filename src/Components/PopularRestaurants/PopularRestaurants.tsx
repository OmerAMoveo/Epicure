import RestaurantCard from "../RestaurantCard";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { getRestaurants, restaurant } from "../../mockDB/MockDB";
import { colors } from "../../GlobalStyle";


const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom : 50px;
    overflow-x: scroll;
    overflow-y: hidden;

    & div{
        &.scrolling-wrapper {
            white-space: nowrap;
         }

         &.card {
            display: inline-block;
         }
    }
`

export const CenteredH3 = styled.h3`
    align-self: center;
    white-space: nowrap;
    height: 17px;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.93px;
    color: black;
`


const PopularRestaurants: React.FC = () => {

    const [favoriteRestaurants, setFavoriteRestaurants] = useState<restaurant[]>([]);

    useEffect(() => {
        const newFavoriteRestaurants = getRestaurants().sort((restA: restaurant, restB: restaurant) => {
            return restA.rating - restB.rating;
        }).slice(0, 3)
        setFavoriteRestaurants(newFavoriteRestaurants)
    }, []);



    const mapFavorites = useCallback(() => {
        return favoriteRestaurants.map(singleRestaurant => {
            return (
                <div className="card" key={singleRestaurant.name}>
                    <RestaurantCard restaurant={singleRestaurant} displayChef={true} color={colors.light_tan} key={singleRestaurant.name} isSmall={false} />
                </div>
            );
        });
    }, [favoriteRestaurants])

    return (
        <>
            <CenteredH3>THE POPULAR RESTAURANT IN EPICURE:</CenteredH3>
            <WrapperDiv>
                <div className="scrolling-wrapper">{mapFavorites()}</div>
            </WrapperDiv>
        </>
    );
}

export default PopularRestaurants;