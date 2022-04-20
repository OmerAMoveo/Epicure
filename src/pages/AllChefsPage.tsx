import { useEffect, useState } from "react";
import styled from "styled-components";
import ChefCard from "../Components/ChefOfTheWeek/ChefCard";
import { chef } from "../mockDB/MockDB";
import { getAllChefs } from "../service/service";


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    
`

const AllChefsPage: React.FC = () => {
    const [allChef, setAllChefs] = useState<chef[]>([]);

    useEffect(() => {
        const waitForChefs = async () => {
            const returnedVal = await getAllChefs();
            setAllChefs(returnedVal);
        }
        waitForChefs();
    }, [])
    const mapChefs = () => {
        return allChef.map(chef => <ChefCard chef={chef} />)
    }
    return (
        <StyledDiv>
            {mapChefs()}
        </StyledDiv>
    );
}

export default AllChefsPage;
