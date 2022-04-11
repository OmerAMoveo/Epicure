import { default as mainImage } from '../../images/main-image.png'
import styled from "styled-components";
import { colors } from '../../GlobalStyle';
import { default as searchIcon } from '../../images/search-icon.svg'
import SearchDetails from './SearchDetails';
import { useState } from 'react';

const StyledRectangle = styled.div`
    display: flex;
    justify-items: center;
    justify-content: space-evenly;
    align-items: center;
    height: 269px;
    background-image: url(${mainImage});
    background-size: cover;   
    @media only screen and (min-width: 600px){
        height: 696px;
    }

    & div {       
        &.middle-bar{
            height: 125px;
            padding: 20px;
            margin-left:0px;
            margin-right:0px;
            background-color: rgba(255,255,255,0.88);
            @media only screen and (min-width: 600px){
                display: flex;
                flex-direction: column;
                height: 222px;
                width: 781px;
                justify-content: center;
                align-items: center;
            }

            & p {
                width: 220px;
                margin: 0 31px 13px 36px;
                font-family: HelveticaNeue-thin;
                font-size: 16px;
                font-weight: 100;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: 1px;
                text-align: center;
                color: black;
                @media only screen and (min-width: 600px){
                    font-size: 35px;
                    width: 437px;
                }
            }        
        }

        &.search-box{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 269px;
            height: 33px;
            margin: 13px 0 0;
            opacity: 0.53;
            padding: 8px 19px 8px 9px;
            border-radius: 4px;
            border: solid 0.2px black;
            background-color: ${colors.white_11}; 
            @media only screen and (min-width: 600px) {      
                width: 367px;
                font-size: 22px;
                letter-spacing: 1.57px;
            }

            & input {
                width: 269px;
                height: 33px;
                margin: 0;
                background-color: ${colors.white_11}; 
                border: none;
            }

            & input:focus, textarea:focus {
                border: none;
                box-shadow: none;
                outline-offset: 0px;
                outline: none;
            }

            & img{
                margin-right: 8px;
            }
        }
    }
`

const RectangleBar: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showQueryResults, setShowQueryResults] = useState<boolean>(false);

    const onQueryChange = (e: any) => {
        setSearchQuery(e.target.value);
        if (e.target.value === '')
            setShowQueryResults(false);
        else
            setShowQueryResults(true);
    }

    return (
        <StyledRectangle>
            <div className='centered-box'>
                <div className='middle-bar'>
                    <p className='epicure-description'>Epicure works with the top chef restaurants in Tel Aviv</p>
                    <div className='search-box'>
                        <img src={searchIcon} alt="search-icon" />
                        <input type="search"
                            id="query"
                            name="q"
                            placeholder='Search for restaurant cuisine, chef'
                            onInput={onQueryChange}
                            autoComplete="off"
                        ></input>
                    </div>
                    {showQueryResults && <SearchDetails query={searchQuery} />}
                </div>
            </div>
        </StyledRectangle >
    );
}

export default RectangleBar;
