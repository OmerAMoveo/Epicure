import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { restaurant } from "../../mockDB/MockDB";
import RestaurantCard from "../RestaurantCard";

type Props = {
    restaurants: restaurant[],
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    left: 0;
    right: 0;
    overflow: scroll;
    text-align: center;
    justify-content: space-evenly;
    & div {
    text-align: center;

    }
`

const ShowRestaurants: React.FC<Props> = (props) => {

    const mapRestaurants = () => {
        return props.restaurants.map(singleRestaurant =>
            <div><RestaurantCard restaurant={singleRestaurant} displayChef={true} color={colors.beige} isSmall={true} /></div>)
    }

    return (
        <StyledDiv>
            {mapRestaurants()}
        </StyledDiv>
    );
}

export default ShowRestaurants;