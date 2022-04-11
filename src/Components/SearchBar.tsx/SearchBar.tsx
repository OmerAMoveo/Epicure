import { default as searchIcon } from '../../images/search-icon.svg'
import styled from 'styled-components';
import { colors } from '../../GlobalStyle'
import { useState } from 'react';
import SearchDetails from '../RectangleBar/SearchDetails';

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

  & div.search-results{
      border: solid 0.5px black;
      width: 415px;
      margin-top: 40px;
      position: absolute;
      border-radius: 4px;
      top: 0;
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
    <StyledDiv>
      <div className='search-container'>
        <input type='search' placeholder='Search for restaurant, cuisine, chef' onInput={onQueryChange}></input>
        <img src={searchIcon} className="inside-logo" alt='mini logo' />
      </div>
      {showQueryResults && <div className='search-results'><SearchDetails query={searchQuery} /></div>}
      <img src={searchIcon} className='icon-set-1' id='search' alt='mini logo' />
    </StyledDiv>
  );
}

export default SearchBar;
