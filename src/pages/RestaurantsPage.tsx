import styled from "styled-components";
import RestaurantCard from "../Components/RestaurantCard";
import { colors } from "../GlobalStyle";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const RestaurantsPage: React.FC = () => {
    return (
        <StyledDiv>
            <div className="filter-menu">
                <span>All</span>
                <span>New</span>
                <span>Most Popular</span>
                <span>Open Now</span>
            </div>
        </StyledDiv>
    );
}

export default RestaurantsPage;