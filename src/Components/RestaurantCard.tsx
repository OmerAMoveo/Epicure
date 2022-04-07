import React from "react";
import { restaurant } from "../mockDB/MockDB"
import styled from "styled-components";
import { colors } from "../GlobalStyle";

const RestaurantCardDiv = styled.div<{ color: string }>`
    display: inline-block;  
    width: 206px;
    height: 338px;
    margin-right: 10px;
    margin-left: 10px;
    flex-direction: column;
    text-align:center;
    background-color: ${props => props.color};   

    & img {
        width: 206px;
        height: 224px;
        margin: 0 0 25px;
        object-fit: cover;
    }
    & section {
        display: flex;
        flex-direction: column;
        justify-content: center;

        & h1 {
        white-space: nowrap;
        margin: 0 25px 4px 27px;
        font-family: HelveticaNeue;
        font-size: 25px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1.67px;
        color: black;
        }

        & h2 {  
            margin: 4px 0 0;
            font-family: HelveticaNeue;
            font-size: 20px;
            font-weight: 100;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 1.33px;
            color: black;
        }
    }
    
`

type Props = {
    restaurant: restaurant,
    displayChef: boolean,
    color: string,
}

const RestaurantCard: React.FC<Props> = (props: Props) => {

    return (
        <RestaurantCardDiv color={props.color}>
            <img src={props.restaurant.smallImage} alt={`${props.restaurant.smallImage}`} />
            <section>
                <h1>{props.restaurant.name}</h1>
                {props.displayChef && <h2>{props.restaurant.chef}</h2>}
            </section>
        </RestaurantCardDiv>
    );
}

export default RestaurantCard;