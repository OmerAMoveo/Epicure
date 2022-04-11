import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { chef, Cuisine, dish, getChef, getCuisines, getDishes, getRestaurants, restaurant } from "../../mockDB/MockDB";
import SearchField from "./SearchField";

type Props = {
    query: string,
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 150px; */
    max-height: 250px; 
    width: inherit;
    background-color: white;

`

const SearchDetails: React.FC<Props> = (props) => {

    const [allRestaurants, setAllRestaurants] = useState<restaurant[]>(getRestaurants());
    const [allChefs, setAllChefs] = useState<chef[]>(getChef());
    const [Cuisines, setCuisines] = useState<{ text: string }[]>(getCuisines());

    const [displayedRestaurants, setDisplayedRestaurants] = useState<restaurant[]>(allRestaurants.filter(restaurant => restaurant.name.toLowerCase().startsWith(props.query)))
    const [displayedChefs, setDisplayedChefs] = useState<chef[]>(allChefs.filter(chef => chef.name.toLowerCase().startsWith(props.query.toLowerCase())))
    const [displayedCuisine, setDisplayedCuisines] = useState<{ text: string }[]>(Cuisines.filter(cuisine => cuisine.text.toLowerCase().startsWith(props.query.toLowerCase())));


    return (
        <StyledDiv>
            <SearchField headline="restaurants"
                displayedField="name"
                mappedData={displayedRestaurants} />
            <SearchField headline="chefs"
                displayedField="name"
                mappedData={displayedChefs} />
            <SearchField headline="cuisines"
                displayedField="text"
                mappedData={displayedCuisine} />
        </StyledDiv>
    );
}

export default SearchDetails;