import RestaurantCard from "../RestaurantCard";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { getRestaurants, restaurant } from "../../mockDB/MockDB";
import { colors } from "../../GlobalStyle";
import { Link } from "react-router-dom";


const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom : 10px;
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

const StyledDiv = styled.div`
    text-align: center;
    margin-top: 20px;

    

    & h3 {
        font-family: HelveticaNeue-Thin;
        font-size: 30px;
        font-weight: 100;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: 1.25px;
        text-align: center;
        color: black;

        @media only screen and (max-width: 600px){
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
        }
    }

    & div.show-all {
        @media only screen and (max-width: 600px){
            display: none;
        }
        display: flex;
        margin-right: 210px;
        justify-content: flex-end;
        outline: none;
        margin-bottom: 30px;
        & a {
            white-space: nowrap;
            font-family: HelveticaNeue;
            font-size: 20px;
            letter-spacing: 2px;
            color: black;
            text-decoration: none;
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
        <StyledDiv>
            <h3>THE POPULAR RESTAURANT IN EPICURE:</h3>
            <WrapperDiv>
                <div className="scrolling-wrapper">{mapFavorites()}</div>
            </WrapperDiv>

            <div className="show-all">
                <Link to={'/restaurants'}>
                    {'All Restaurants>>'}
                </Link>
            </div>
        </StyledDiv>
    );
}

export default PopularRestaurants;