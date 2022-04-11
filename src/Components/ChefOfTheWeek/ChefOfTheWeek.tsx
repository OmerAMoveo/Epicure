import { useMemo, useState } from "react";
import styled from "styled-components"
import { colors } from "../../GlobalStyle";
import { chef, getChef, getRestaurants } from "../../mockDB/MockDB";
import RestaurantCard from "../RestaurantCard";
import ChefCard from "./ChefCard";

const WeekChefDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;

    & h1{
        width: inherit;
        height: 17px;
        font-family: HelveticaNeue-thin;
        font-size: 14px;
        font-weight: 100;
        letter-spacing: 0.93px;
        text-align: center;
        color: black;
        @media only screen and (min-width: 600px){
            height: 35px;
            font-size: 30px;
            letter-spacing: 2px;
        }
    }
`

const ChefOfTheWeek: React.FC = () => {
    const [chefOfTheWeek, setChefOfTheWeek] = useState<chef>(getChef()[0])
    const memoizedRestaurants = useMemo(() => {
        const allRestaurants = getRestaurants();

        return allRestaurants.filter(singleRestaurant => singleRestaurant.chef === chefOfTheWeek.name)
    }, [])
    const mapRestaurants = () => {
        const retValue = memoizedRestaurants.map(singleRestaurant => {
            return <RestaurantCard restaurant={singleRestaurant} displayChef={false} color={colors.beige} isSmall={true} />
        })
        return retValue;

    }
    return (
        <WeekChefDiv>
            <h1>CHEF OF THE WEEK :</h1>
            <ChefCard chef={getChef()[0]} />
        </WeekChefDiv>
    );
}

export default ChefOfTheWeek;
