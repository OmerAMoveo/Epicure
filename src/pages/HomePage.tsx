import RectangleBar from "../Components/RectangleBar/RectangleBar";
import ChefAndResShortcut from '../Components/ChefAndResShortcut/ChefAndResShortcut'
import styled from "styled-components";
import PopularRestaurants from "../Components/PopularRestaurants/PopularRestaurants";
import PopularDishes from "../Components/PopularDishes/PopularDishes";
import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import DishModal from '../Components/DishModal/DishModal'
const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    overflow: hidden;
`
const HomePage: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const dishDisplay = useSelector((state: RootStateOrAny) => state.displayDish.toShowDish);

    useEffect(() => {
        //shall be an 'or' boolean of all modals-selectors
        setShowAll(!(dishDisplay))
    }, [dishDisplay]);

    return (
        <>
            {dishDisplay && <DishModal />}
            {showAll &&
                <HomePageWrapper>
                    <RectangleBar />
                    <ChefAndResShortcut />
                    <PopularRestaurants />
                    <PopularDishes />
                </HomePageWrapper>
            }
        </>
    );
}

export default HomePage;