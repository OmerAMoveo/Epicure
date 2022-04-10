import { useMemo, useState } from "react";
import styled from "styled-components"
import { colors } from "../../GlobalStyle";
import { chef, getChef, getRestaurants } from "../../mockDB/MockDB";
import RestaurantCard from "../RestaurantCard";

const WeekChefDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;

    & h1{
        width: inherit;
        height: 17px;
        font-family: HelveticaNeue;
        font-size: 14px;
        font-weight: 100;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.93px;
        text-align: center;
        color: black;
    }
    & div{
        display: inherit;
        width: inherit;
        justify-content: space-around;

        &.container{
            position: relative;
            & img.chef-image {
                object-fit: contain;
                width: inherit;
            }

            & div.tag{
                width: inherit;
                position: absolute;
                height: 54px;
                bottom: 0px;
                background-color: rgba(255, 255, 255, 0.8);
                color: black;
                font-weight: bold;
                text-align: center;
                & p{
                    width: 100%;
                    margin: 10px;
                    font-family: HelveticaNeue;
                    font-size: 30px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: 1.07px;
                }
            }
        }
        &.restaurants-container{
            overflow-x: scroll;
        }
    }

    & p
    {
        &.description{
            width: 325px;
            height: 183px;
            padding-left: 20px;
            padding-right: 20px;
            font-family: HelveticaNeue;
            font-size: 13.5px;
            font-weight: 100;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 1.04px;
            text-align: center;
            color: black;
        }
        &.chef-restaurants-headline{
            align-self: flex-start;
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
            <div className="container">
                <img className="chef-image" src={chefOfTheWeek.image} />
                <div className="tag"><p>{chefOfTheWeek.name}</p></div>
            </div>
            <p className="description">{chefOfTheWeek.description}</p>
            <p className="chef-restaurants-headline">{chefOfTheWeek.name}'s restaurants  :</p>
            <div className="restaurants-container">
                {mapRestaurants()}
            </div>
        </WeekChefDiv>
    );
}

export default ChefOfTheWeek;