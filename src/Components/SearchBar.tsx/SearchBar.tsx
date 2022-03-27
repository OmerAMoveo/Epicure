import { default as searchIcon } from '../../images/search-icon.svg'

import styled from 'styled-components';
import { colors } from '../../GlobalStyle'

const StyledSearchBar = styled.input`
  width: 415px;
  height: 34px;
  margin: 0 28px 0 292px;
  padding: 7px 13px 5px 16px;
  object-fit: contain;
  border-radius: 4px;
  border: solid 0.5px black;
  background-color: ${colors.white_11};
`

const SearchBar: React.FC = () => {
    return (
        // <StyledSearchBar type='search' placeholder='Search for restaurant, cuisine, chef'></StyledSearchBar>
        <img src={searchIcon} className='icon-set-1' id='search' alt='mini logo' />
    );
}

export default SearchBar;