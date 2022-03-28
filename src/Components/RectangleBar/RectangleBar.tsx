import { default as mainImage } from '../../images/main-image.png'
import styled from "styled-components";
import { colors } from '../../GlobalStyle';
import { default as searchIcon } from '../../images/search-icon.svg'


const StyledRectangle = styled.div`
    display: flex;
    justify-items: center;
    justify-content: space-evenly;
    align-items: center;
    height: 269px;
    background-image: url(${mainImage});
    background-size: cover;

    & div {        
        &.middleBar{
            height: 125px;
            padding: 20px;
            margin-left:0px;
            margin-right:0px;
            background-color: rgba(255,255,255,0.88);

            & p {
                width: 220px;
                height: 39px;
                margin: 0 31px 13px 36px;
                font-family: HelveticaNeue;
                font-size: 16px;
                font-weight: 100;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: 1px;
                text-align: center;
                color: black;
            }
            
            
        }
        &.search-box{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 269px;
            height: 33px;
            margin: 13px 0 0;
            padding: 8px 19px 8px 9px;
            border-radius: 4px;
            border: solid 0.2px black;
            background-color: ${colors.white_11}; 

            & input {
                width: 269px;
                height: 33px;
                margin: 0;
                background-color: ${colors.white_11}; 
                border: none;
            }
        }

    }
`

const RectangleBar: React.FC = () => {
    return (
        <StyledRectangle>
            <div className='middleBar'>
                <p className='epicure-description'>Epicure works with the top chef restaurants in Tel Aviv</p>
                <div className='search-box'>
                    <img src={searchIcon} />
                    <input placeholder='Serch for restaurant cuisine, chef'></input>
                </div>
            </div>
        </StyledRectangle>
    );
}

export default RectangleBar;