import React from 'react';
import styled from 'styled-components'
import SearchBar from '../Components/SearchBar.tsx/SearchBar';
import { default as cartIcon } from '../images/cart-icon.svg'
import { default as userIcon } from '../images/user-icon.svg'

const StyledBar = styled.div`
    width: 100%;
    height: 45px;
    padding: 8px 20px 7px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background-color: white;
`

const MainNavigation: React.FC = () => {
    return (
        <StyledBar>
            <SearchBar />
            <img src={cartIcon} className='icon-set-1' id='cart' alt='mini logo' />
            <img src={userIcon} className='icon-set-1' id='user' alt='mini logo' />
        </StyledBar>
    );
}

export default MainNavigation;