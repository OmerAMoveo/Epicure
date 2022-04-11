import styled from "styled-components";
import ChefCard from "../Components/ChefOfTheWeek/ChefCard";
import { getChef } from "../mockDB/MockDB";


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    
`

const AllChefsPage: React.FC = () => {
    const chefs = getChef();
    const mapChefs = () => {
        return chefs.map(chef => <ChefCard chef={chef} />)
    }
    return (
        <StyledDiv>
            {mapChefs()}
        </StyledDiv>
    );
}

export default AllChefsPage;
