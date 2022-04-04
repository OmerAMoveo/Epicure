import styled from "styled-components"
import { colors } from "../../GlobalStyle";

const ShortcutWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 125px;
    opacity: 0.9;
    background-color: #fafafa;

    & div{
        padding: 15px 11px 13px 17px;
        background-color: ${colors.sand_80};
    }
`
const ChefAndResShortcut: React.FC = () => {
    return (
        <ShortcutWrapper>
            <div>CHEFS</div>
            <div>RESTAURANTS</div>
        </ShortcutWrapper>
    );
}

export default ChefAndResShortcut;