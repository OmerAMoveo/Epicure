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
    text-align: center;


    & h1 {
        @media only screen and (min-width: 600px) {
            width: 100%;
        }
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
            @media only screen and (min-width: 600px) {
            justify-content: center;
         }
            display: flex;
            height: 100%;
            justify-content: space-between;
            & img {
                width: 40px;
                height: 40px;
                @media only screen and (min-width: 600px) {
                    justify-content: center;
                    margin-right: 35px;
                    margin-left: 35px;
                }
            }         
        }
        &.text-container{
            @media only screen and (min-width: 600px) {
                    justify-content: center;
            }
            display: flex;
            justify-content: space-between;
            & p {
                @media only screen and (min-width: 600px) { 
                    justify-content: center;
                    margin-right: 27px;
                    margin-left: 27px;
                }
            }
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