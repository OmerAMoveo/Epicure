import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { default as x } from '../../images/x.svg'
import OpeningMenuBottom from "./OpeningMenuBottom";

export const StyledOpeningMenu = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-content: space-around;
    height: 100%;
    width: 100%;
    background-color: white;

    &.relative-menu{
        position: relative;
    }

    & div{ 
        &.cancel-div{
            display: flex;
            justify-content: flex-start;
            align-content: space-around;
            padding: 20px 320px 9px 39px;
            width: 375px;
            height: 45px;
            margin: 0 0 62px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);


            & img.x {
                width: 16px;
                height: 16px;
            }
        }
        
        &.Line-4-wrapper{
            display: flex;
            justify-content: center;
            margin-bottom: 48px;

            & div.Line-4 {
                width: 196px;
                height: 2px;
                background-color: #cccccc;

                &.whole-line{
                    width: 100%;
                }
            }
        }
    }

    & section{
        display: flex;
        height: 23px;
        margin-bottom: 48px;
        align-self: center;
        justify-content: center;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        white-space: nowrap;
        letter-spacing: 1.33px;
        font-size: 20px;        
        font-family: HelveticaNeue;

        color: black;

        &.upper-style{
            width: 59px;
        }

        &.bottom-styled{
            width: 71px;
            height: 23px;
            opacity: 0.3;
        }
    }
`

type Props = {
    hamburgerClicked: boolean,
    setHamburgerClicked: Dispatch<SetStateAction<boolean>>
}

const OpeningMenu: React.FC<Props> = (props) => {

    const hamburgerClickedHandler = () => {
        props.setHamburgerClicked(!props.hamburgerClicked);
    }

    return (
        <StyledOpeningMenu>
            <div className="cancel-div">
                <img className="x" src={x} alt='exit' onClick={hamburgerClickedHandler} />
            </div>
            <section className="upper-style">Chefs</section>
            <section className="upper-style">All Restaurants</section>
            <div className="Line-4-wrapper"><div className="Line-4"></div></div>
            <OpeningMenuBottom />
        </StyledOpeningMenu>
    );
}

export default OpeningMenu;
