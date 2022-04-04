import RectangleBar from "../Components/RectangleBar/RectangleBar";
import ChefAndResShortcut from '../Components/ChefAndResShortcut/ChefAndResShortcut'
import styled from "styled-components";
import PopularRestaurants from "../Components/PopularRestaurants/PopularRestaurants";
import PopularDishes from "../Components/PopularDishes/PopularDishes";

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    overflow: hidden;
    
`
const HomePage: React.FC = () => {
    return (
        <HomePageWrapper>
            <RectangleBar />
            <ChefAndResShortcut />
            <PopularRestaurants />
            <PopularDishes />
        </HomePageWrapper>
    );
}

export default HomePage;