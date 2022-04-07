import styled from "styled-components";
import { default as EpicureLogo } from '../../images/epicure-icon.png'
import { default as AppleLogo } from '../../images/apple-icon.svg'
import { default as googleLogo } from '../../images/google-icon.svg'

import GetItIcon from "./GetItIcon";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column; 
    height: 605px;
    padding: 28px 36px 63px 35px;
    opacity: 0.9;
    background-color: #fafafa;
    text-align: center;
    overflow-x: hidden;

    & span {
        font-family: HelveticaNeue;
        font-size: 14px;
        font-weight: 100;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;

        &.about-us{
            width: 83px;
            height: 17px;
            margin: 0 0 7px 0;
            letter-spacing: 0.88px;
        }

        &.Lorem-ipsum-dolor-si{
            width: 304px;
            height: 259px;
            margin: 7px 0 32px;
            letter-spacing: 1.08px;
        }
    }

    & img {
        &.about---logo{
            width: 137px;
            height: 128px;
            margin: 32px 83px 34px 84px;
            object-fit: contain;
        }
    }

    & div{
        &.get-it-container{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 10px;
        }
    }
`
const AboutUs: React.FC = () => {
    return (
        <StyledDiv>
            <span className="about-us">About us:</span>
            <span className="Lorem-ipsum-dolor-si">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum.
                Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum.
                Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.
            </span>
            <img className="about---logo" src={EpicureLogo} />
            <div className="get-it-container">
                <GetItIcon fromHeadline="Download on the" from="App Store" icon={AppleLogo} />
                <GetItIcon fromHeadline="Get it on" from="Google Play" icon={googleLogo} />
            </div>
        </StyledDiv>
    );
}

export default AboutUs;