import styled from "styled-components";
import DishCard from "../DishCard/DishCard";
import { dish, restaurant } from "../../mockDB/MockDB";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { getAllRestaurants } from "../../service/service";


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

    // const memoizedRestaurants: restaurant[] = useMemo(async () => {
    //     const allRestaurant: restaurant[] = await getAllRestaurants();
    //     return allRestaurant;
    // }, []);
    const allRestaurants: dish[] = useSelector((state: RootStateOrAny) => state.displayDish.allRestaurants);
    const allDishes: dish[] = useSelector((state: RootStateOrAny) => state.displayDish.allDishes);
    const [renderedAllDishes, setRenderedAllDishes] = useState<dish[]>([]);


    useEffect(() => {
        setRenderedAllDishes(allDishes);
    }, [allDishes]);

    const dishesTableHeader = useCallback(() => {
        return allRestaurants.map((singleRestaurant, index) => <th key={index}>{String(singleRestaurant.name)}</th>)
    }, [allDishes]);

    const dishTableCards = useCallback(() => {
        return renderedAllDishes.map((singleDish, index) => singleDish.isSignatureDish ?
            <td key={index}
                id={singleDish.restaurantId.toString()}>
                <DishCard dish={singleDish} isSmall={false} />
            </td> : null)
    }, [renderedAllDishes]);

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
