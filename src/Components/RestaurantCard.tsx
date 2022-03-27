import React from "react";
import { restaurant } from "../mockDB/MockDB"
import styled from "styled-components";
import { colors } from "../GlobalStyle";

const RestaurantCardDiv = styled.div`
    width: 360px;
    height: 357px;
    margin: 42px 11px 31px 169px;
  background-color: ${colors.beige}
`

type Props = {
    restaurant: restaurant,
}

const RestaurantCard: React.FC<Props> = (props: Props) => {

    return (
        <RestaurantCardDiv>
            <img src={props.restaurant.smallImage} />
            <p>{props.restaurant.name}</p>
            <p>{props.restaurant.chef}</p>
        </RestaurantCardDiv>
    );
}

export default RestaurantCard;