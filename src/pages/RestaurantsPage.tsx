import styled from "styled-components";
import { useMemo, useState } from "react";
import { getRestaurants, restaurant } from "../mockDB/MockDB";
import ShowRestaurants from "../Components/Restaurants/ShowRestaurants";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    & h1{
        width: 100%;
        height: 23px;
        margin: 20px 0px 22px 0px;
        font-family: HelveticaNeue;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1.54px;
        text-align: center;
        color: black;
    }
    & div{
        &.filter-menu{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            & div{
                height: 18px;
                margin: 10px 10px 10px 10px;
                font-family: HelveticaNeue;
                white-space: nowrap;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: 1.71px;
                color: black;

                &.default,:hover,:active{
                    font-weight: bold;
                }
            }
        }
    }
`

const RestaurantsPage: React.FC = () => {
    const [allRestaurants, setAllRestaurants] = useState<restaurant[]>(getRestaurants());
    const [displayedRestaurants, setDisplayedRestaurants] = useState<restaurant[]>(allRestaurants);
    const [defaultClickState, setDefaultClickState] = useState<boolean>(true);

    const onAllClick = () => {
        setDisplayedRestaurants(allRestaurants);
    }

    const onNewClick = () => {
        setDefaultClickState(false);
        setDisplayedRestaurants(allRestaurants);
        //will be change according to database parameters which determines which
        //restaurant is called a 'new' one.
    }

    const onPopularClick = () => {
        setDefaultClickState(false);
        setDisplayedRestaurants(
            allRestaurants.filter(singleRestaurant => singleRestaurant.rating >= 9.4)
        )
    }

    const onOpenClick = () => {
        setDefaultClickState(false);
        let today = new Date();
        const hour = today.getHours().toString();
        setDisplayedRestaurants(
            allRestaurants.filter(singleRestaurant => {
                const restaurantOpeningTime = singleRestaurant.opens.openingTime.split(':');
                const restaurantClosingTime = singleRestaurant.opens.closingTime.split(':');
                return restaurantOpeningTime[0] <= hour && restaurantClosingTime[0] >= hour;
            })
        )
        //will be more accurate after database connection according to code specifications.
    }

    return (
        <StyledDiv>
            <h1>Restaurants</h1>
            <div className="filter-menu">
                <div onClick={onAllClick} className={defaultClickState ? "default" : ""}>All</div>
                <div onClick={onNewClick}>New</div>
                <div onClick={onPopularClick}>Most Popular</div>
                <div onClick={onOpenClick}>Open Now</div>
            </div>
            <ShowRestaurants restaurants={displayedRestaurants} />
        </StyledDiv>
    );
}

export default RestaurantsPage;