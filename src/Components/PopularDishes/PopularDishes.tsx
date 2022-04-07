import styled from "styled-components";
import DishCard from "../DishCard/DishCard";
import { getDishes, getRestaurants } from "../../mockDB/MockDB";
import { useCallback, useMemo } from "react";


const StyledTable = styled.table`
    display: table;
    overflow-x: scroll;
    & th {
        font-family: HelveticaNeue;
        font-weight: bold;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.94px;
        text-align: center;
    }

    & tr td {
        width: 1%;
        word-wrap:break-word;
    }
`

export const CenteredH3 = styled.h3`
    align-self: center;
    white-space: nowrap;
    height: 17px;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.93px;
`

const StyledPopularDishes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: scroll;
`

const PopularDishes: React.FC = () => {
    const memoizedRestaurants = useMemo(() => { return getRestaurants() }, [])
    //on real-version: randomize x restaurants for mapping if it's okay for Shilo

    const dishesTableHeader = useCallback(() => {

        return memoizedRestaurants.map(singleRestaurant => <th key={singleRestaurant.id}>{singleRestaurant.name}</th>)
    }, []);

    const dishTableCards = useCallback(() => {
        const uniqueRestaurants = getDishes();

        return uniqueRestaurants.map(singleDish => singleDish.isSignatureDish ?
            <td key={singleDish.restaurantId}
                id={singleDish.restaurantId.toString()}>
                <DishCard dish={singleDish} />
            </td> : null)
    }, []);
    return (
        <>
            <CenteredH3>SIGNATURE DISH OF:</CenteredH3>
            <StyledPopularDishes>
                <StyledTable>
                    <thead><tr>{dishesTableHeader()}</tr></thead>
                    <tbody><tr>{dishTableCards()}</tr></tbody>
                </StyledTable>
            </StyledPopularDishes>
        </>
    );
}

export default PopularDishes;