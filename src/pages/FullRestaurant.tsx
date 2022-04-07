import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRestaurants, restaurant } from "../mockDB/MockDB";

const StyledDiv = styled.div`
      
`;

const FullRestaurant: React.FC = () => {
    const { restaurantParam } = useParams();
    const [restaurant, setRestaurant] = useState<restaurant | null>();
    useEffect(() => {
        const allRestaurants = getRestaurants();
        setRestaurant(
            allRestaurants.filter(singleRestaurant => singleRestaurant.name === restaurantParam)[0]
        );
    }, []);

    return (
        
    );
}

export default FullRestaurant;