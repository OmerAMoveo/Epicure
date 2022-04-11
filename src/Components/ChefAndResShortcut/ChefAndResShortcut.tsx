import { Link } from "react-router-dom";
import styled from "styled-components"
import { colors } from "../../GlobalStyle";

const ShortcutWrapper = styled.div`
    @media only screen and (min-width: 600px){
        display: none;
    }

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 125px;
    opacity: 0.9;
    background-color: #fafafa;
    & a{
        text-decoration: none;
        color: black;
        & div{
            padding: 15px 11px 13px 17px;
            background-color: ${colors.sand_80};
        }
}
`
const ChefAndResShortcut: React.FC = () => {
    return (
        <ShortcutWrapper>
            <Link to={'/chefs'}><div>CHEFS</div></Link>
            <Link to={'/restaurants'}><div>RESTAURANTS</div></Link>
        </ShortcutWrapper >
    );
}

export default ChefAndResShortcut;