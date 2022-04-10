import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { dish, getDishes, getRestaurants, restaurant } from "../../mockDB/MockDB";
import SearchField from "./SearchField";

type Props = {
    query: string,
}

const StyledDiv = styled.div`
    display: flex;
    height: 150px;
    max-height: 250px; 
    width: inherit;
    /* overflow-y: scroll; */
    background-color: white;

`

const SearchDetails: React.FC<Props> = (props) => {

    const [allRestaurants, setAllRestaurants] = useState<restaurant[]>(getRestaurants());
    const [allDishes, setAllDishes] = useState<dish[]>(getDishes());
    const [displayedRestaurants, setDisplayedRestaurants] = useState<restaurant[]>(allRestaurants.filter(restaurant => restaurant.name.toLowerCase().startsWith(props.query)))
    const [displayedDishes, setdisplayedDishes] = useState<dish[]>(allDishes.filter(dish => dish.name.toLowerCase().startsWith(props.query)));


    return (
        <StyledDiv>
            <SearchField headline="restaurants"
                displayedField="name"
                mappedData={displayedRestaurants} />

        </StyledDiv>
    );
}

export default SearchDetails;