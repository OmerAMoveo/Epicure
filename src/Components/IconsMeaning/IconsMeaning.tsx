import styled from "styled-components";
import { Comment } from "../../mockDB/MockDB";
import { selectCommentIcon } from "../../service/service";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 134px;
    margin: 95px 0 71px; 
    padding: 16px 69px 13px;
    opacity: 0.9;
    background-color: #fafafa;

    & h1 {
       width: 221px;
        height: 17px;
        margin: 0 8px 19px;
        white-space: nowrap;
        font-family: HelveticaNeue;
        font-size: 14px;
        font-weight: 100;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1px;
        text-align: center;
        color: black;
    }

    & div{
        width: 100%;

        &.icons-container {
            display: flex;
            height: 100%;
            justify-content: space-between;
            & img {
                width: 40px;
                height: 40px;
            }
        }
        &.text-container{
            display: flex;
            justify-content: space-between;
        }
    }


`

const IconsMeanings: React.FC = () => {

    return (
        <StyledDiv>
            <h1>THE MEANING OF OUR ICONS :</h1>
            <div className="icons-container">
                <img src={selectCommentIcon(Comment.spicy)} />
                <img src={selectCommentIcon(Comment.vegeterian)} />
                <img src={selectCommentIcon(Comment.vegan)} />
            </div>
            <div className="text-container">
                <p>spicy</p>
                <p>vegeterian</p>
                <p>vegan</p>
            </div>

        </StyledDiv>
    );
}

export default IconsMeanings;