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
        letter-spacing: 0.93px;

        @media only screen and (min-width: 600px) {
            margin-bottom: 50px;
            font-family: HelveticaNeue-thin;
            font-size: 30px;
            font-weight: 100;
            line-height: 1;
            letter-spacing: 1.25px;
            text-align: center;
            color: black;
        }
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

        return memoizedRestaurants.map((singleRestaurant) => <th key={singleRestaurant.id}>{singleRestaurant.name}</th>)
    }, []);

    const dishTableCards = useCallback(() => {
        const uniqueDishes = getDishes();
        let counter = 0;
        return uniqueDishes.map(singleDish => singleDish.isSignatureDish ?
            <td key={singleDish.restaurantId}
                id={singleDish.restaurantId.toString()}>
                <DishCard dish={singleDish} isSmall={false} />
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