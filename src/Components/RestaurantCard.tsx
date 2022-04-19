import React from "react";
import { restaurant } from "../mockDB/MockDB"
import styled from "styled-components";
import { colors } from "../GlobalStyle";
import { Link } from "react-router-dom";

const RestaurantCardDiv = styled.div<{ color: string, isSmall: boolean }>`
    display: inline-block;
    width: ${props => props.isSmall ? '153.6px' : '206px'};
    height: ${props => props.isSmall ? '237.4px' : '338px'};
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
    flex-direction: column;
    text-align:center;
    background-color: ${props => props.color};

    @media only screen and (min-width: 600px) {
        background-color: ${colors.beige};
        position: relative;
    }

    & img {
        width: ${props => props.isSmall ? '153.6px' : '206px'};
        height: ${props => props.isSmall ? '149px' : '224px'};
        margin: 0 0 15px;
        object-fit: cover;
    }
    & section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        & h1 {
        width: 100%;
        margin: 0;
        font-family: HelveticaNeue;
        font-size: ${props => props.isSmall ? '17px' : '25px'};
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1.67px;
        color: black;
        }

        & h2 {  
            margin: 4px 0 0;
            font-family: HelveticaNeue-thin;
            font-size: 20px;
        font-size: ${props => props.isSmall ? '13.3px' : '20px'};

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
    isSmall: boolean,
}

const RestaurantCard: React.FC<Props> = (props: Props) => {

    return (
        <Link to={`/${props.restaurant.name}`}>
            <RestaurantCardDiv color={props.color} isSmall={props.isSmall}>
                <img src={require(`../images/${props.restaurant.smallImage}`)} alt={`${props.restaurant.smallImage}`} />
                <section>
                    <h1>{props.restaurant.name}</h1>
                    {props.displayChef && <h2>{props.restaurant.chef}</h2>}
                </section>
            </RestaurantCardDiv>
        </Link>
    );
}

export default RestaurantCard;
