import { useMemo, useState } from "react";
import styled from "styled-components"
import { colors } from "../../GlobalStyle";
import { chef, getRestaurants } from "../../mockDB/MockDB";
import RestaurantCard from "../RestaurantCard";

const marginRight = '218px';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    @media only screen and (min-width: 600px){
        padding-left: 52px;
    }
    & section.chef-details-rectangle {
        @media only screen and (min-width: 600px){
            display: flex;
            flex-direction: row;
        }
    }

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
            border: red;
        }
    }

    & div{
        display: inherit;
        width: inherit;
        justify-content: space-around;

        &.container{
            position: relative;
            display: flex;
            justify-items: flex-start;
            justify-content: flex-start;
            align-content: flex-start;
            & img.chef-image {
                object-fit: contain;
                width: inherit;
                @media only screen and (min-width: 600px){
                    height: 338px;
                    margin: 42px 1px;
                    object-fit: contain;
                }
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
                @media only screen and (min-width: 600px){
                    width: 390px;
                    margin: 42px 1px 59px 0;
                    margin-left: 0;
                    object-fit: contain;
                }
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
            @media only screen and (min-width: 600px){
                display: flex;
                justify-content:flex-start;
            }
        }
    }

    & p
    {
        &.description{
            width: 325px;
            height: 183px;
            padding-left: 20px;
            padding-right: 20px;
            font-family: HelveticaNeue-thin;
            font-size: 13.5px;
            font-weight: 100;
            letter-spacing: 1.04px;
            text-align: center;
            color: black;
            @media only screen and (min-width: 600px){
                width: 500px;
                height: 292px;
                margin: 37px 180px 110px 20px;
                font-size: 25px;
                line-height: 1.2;
                letter-spacing: 1.08px;
                text-align: justify;
                overflow-y: scroll;
                color: black;
            }
        }
        &.chef-restaurants-headline{
            align-self: flex-start;
            @media only screen and (min-width: 600px) {
                /* margin-left: ${marginRight}; */
            }
        }
    }
`

type Props = {
    chef: chef,
}

const ChefCard: React.FC<Props> = (props) => {
    const memoizedRestaurants = useMemo(() => {
        const allRestaurants = getRestaurants();

        return allRestaurants.filter(singleRestaurant => singleRestaurant.chef === props.chef.name)
    }, [])
    const mapRestaurants = () => {
        const retValue = memoizedRestaurants.map(singleRestaurant => {
            return <RestaurantCard key={singleRestaurant.id} restaurant={singleRestaurant} displayChef={false} color={colors.beige} isSmall={true} />
        })
        return retValue;

    }
    return (
        <StyledDiv>
            <section className="chef-details-rectangle">
                <div className="container">
                    <img className="chef-image" src={props.chef.image} />
                    <div className="tag"><p>{props.chef.name}</p></div>
                </div>
                <p className="description">{props.chef.description}</p>
            </section>
            <p className="chef-restaurants-headline">{props.chef.name}'s restaurants  :</p>
            <div className="restaurants-container">
                {mapRestaurants()}
            </div>
        </StyledDiv>
    );
}

export default ChefCard;
