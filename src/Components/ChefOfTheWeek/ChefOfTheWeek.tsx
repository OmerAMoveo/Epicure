import { useEffect, useMemo, useState } from "react";
import styled from "styled-components"
import { colors } from "../../GlobalStyle";
import { chef, getRestaurants, restaurant } from "../../mockDB/MockDB";
import { getChefById, getRestaurantsByChefId } from "../../service/service";
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
    const [chefOfTheWeek, setChefOfTheWeek] = useState<chef | null>(null)
    const [chefRestaurants, setChefRestaurants] = useState<restaurant[]>([]);

    useEffect(() => {
        const getChefOfTheWeek = async () => {
            const chefOfTheWeekVal = await getChefById(1);
            setChefOfTheWeek(chefOfTheWeekVal);
        }
        const getRestaurantsByCurrChefId = async () => {
            if (chefOfTheWeek !== null) {
                const returnedVal = await getRestaurantsByChefId(chefOfTheWeek.id);
                setChefRestaurants(returnedVal);
            }
        }
        getChefOfTheWeek();
        getRestaurantsByCurrChefId();
    }, [chefOfTheWeek])

    const mapRestaurants = () => {
        const retValue = chefRestaurants.map(singleRestaurant => {
            return <RestaurantCard restaurant={singleRestaurant} displayChef={false} color={colors.beige} isSmall={true} />
        })
        return retValue;

    }
    return (
        <WeekChefDiv>
            <h1>CHEF OF THE WEEK :</h1>
            {chefOfTheWeek && <ChefCard chef={chefOfTheWeek} />}
        </WeekChefDiv>
    );
}

export default ChefOfTheWeek;
