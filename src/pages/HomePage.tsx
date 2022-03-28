import RectangleBar from "../Components/RectangleBar/RectangleBar";
import ChefAndResShortcut from '../Components/ChefAndResShortcut/ChefAndResShortcut'
import styled from "styled-components";
import PopularRestaurants from "../Components/PopularRestaurants/PopularRestaurants";

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    
`
const HomePage: React.FC = () => {
    return (
        <HomePageWrapper>
            <RectangleBar />
            <ChefAndResShortcut />
            <PopularRestaurants />
        </HomePageWrapper>
    );
}

export default HomePage;