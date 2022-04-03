import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'
import SearchBar from '../Components/SearchBar.tsx/SearchBar';
import { default as cartIcon } from '../images/cart-icon.svg'
import { default as userIcon } from '../images/user-icon.svg'
import { default as miniLogo } from '../images/epicure-mini-logo.png'
import { default as hamburger } from '../images/opening-menu-icon.svg'

const StyledBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background-color: white;

    & section {
        flex-grow: 1;
        display: flex;
        justify-content: space-evenly;
        &.center {            
            flex-grow: 2;
        }

        & img{    
            width: 31px;
            height: 31px;

            &.icon-set-1 {
                width: 18px;
                height: 18px;
            }     
    }       
}
`
type Props = {
    hamburgerClicked: boolean,
    setHamburgerClicked: Dispatch<SetStateAction<boolean>>
}

const MainNavigation: React.FC<Props> = (props) => {

    const hamburgerClickedHandler = () => {
        props.setHamburgerClicked(!props.hamburgerClicked);
    }

    return (
        <>
            <StyledBar>
                <section>
                    <img src={hamburger} className='icon-set-1' id='icon' alt='menu' onClick={hamburgerClickedHandler} />
                </section>
                <section className='center'>
                    <img src={miniLogo} alt='mini logo' />
                </section>
                <section>
                    <SearchBar />
                    <img src={cartIcon} className='icon-set-1' id='cart' alt='cart' />
                    <img src={userIcon} className='icon-set-1' id='user' alt='user' />
                </section>
            </StyledBar>
        </>
    );
}

export default MainNavigation;