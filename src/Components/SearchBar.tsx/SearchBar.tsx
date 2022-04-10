import { default as searchIcon } from '../../images/search-icon.svg'

import styled from 'styled-components';
import { colors } from '../../GlobalStyle'

const StyledDiv = styled.div`
    & div.search-container{
      @media only screen and (max-width: 600px){
        display: none;
      }
      
      display: flex;
      flex-direction: row;
      width: 415px;
      height: 34px;
      padding-right: 10px;
      object-fit: contain;
      align-items: center;
      border-radius: 4px;
      border: solid 0.5px black;
      justify-content: space-between;
      background-color: ${colors.white_11};

      textarea:focus, input:focus{
        outline: none;
      }
      & input {
        width: 301px;
        height: 21px;
        border: none;
        margin-left: 15px;
       
      }
    }

  & img{
    &.icon-set-1{
      @media only screen and (min-width: 600px){
        display: none;
      }
    }
    &.inside-logo{
      width: 22px;
    }


  }
`

const SearchBar: React.FC = () => {
  return (
    <StyledDiv>
      <div className='search-container'>
        <input type='search' placeholder='Search for restaurant, cuisine, chef'></input>
        <img src={searchIcon} className="inside-logo" alt='mini logo' />

      </div>
      <img src={searchIcon} className='icon-set-1' id='search' alt='mini logo' />
    </StyledDiv>
  );
}

export default SearchBar;