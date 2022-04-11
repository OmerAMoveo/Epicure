import RectangleBar from "../Components/RectangleBar/RectangleBar";
import ChefAndResShortcut from '../Components/ChefAndResShortcut/ChefAndResShortcut'
import styled from "styled-components";
import PopularRestaurants from "../Components/PopularRestaurants/PopularRestaurants";
import PopularDishes from "../Components/PopularDishes/PopularDishes";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DishModal from '../Components/DishModal/DishModal'
import IconsMeanings from "../Components/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../Components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../Components/AboutUs/AboutUs";
import { changeDisplayStatus } from "../store/store";

const HomePageWrapper = styled.div<{ isDark: boolean }>`
    display: flex;
    width: inherit;
    flex-direction: column;
    justify-items: center;
    overflow: hidden;
    @media only screen and (max-width: 600px){
        display: ${props => props.isDark ? 'flex' : 'none'};
        position: ${props => props.isDark ? 'absolute' : 'none'};
        background-color: ${props => props.isDark ? 'black' : 'none'};
    }

`

export const BlackDiv = styled.div`
    display:flex;
    position: fixed;
    margin-top: -52px;
    bottom: 0;
    z-index: 8;
    border:solid;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
`
const HomePage: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const dishDisplay = useSelector((state: RootStateOrAny) => state.displayDish.toShowDish);
    const dispatch = useDispatch();

    useEffect(() => {
        //shall be an 'or' boolean of all modals-selectors
        setShowAll(!(dishDisplay))
    }, [dishDisplay]);


    return (
        <>
            {dishDisplay && <DishModal />}
            {!showAll && <BlackDiv></BlackDiv>}
            <HomePageWrapper isDark={showAll}>
                <RectangleBar />
                <ChefAndResShortcut />
                <PopularRestaurants />
                <PopularDishes />
                <IconsMeanings />
                <ChefOfTheWeek />
                <AboutUs />
            </HomePageWrapper>

        </>
    );
}

export default HomePage;
