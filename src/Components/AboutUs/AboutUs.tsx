import styled from "styled-components";
import { default as EpicureLogo } from '../../images/epicure-icon.png'
import { default as AppleLogo } from '../../images/apple-icon.svg'
import { default as googleLogo } from '../../images/google-icon.svg'
import GetItIcon from "./GetItIcon";

const marginLeft = "218px";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row; 
    height: 605px;
    padding: 28px 36px 63px 35px;
    opacity: 0.9;
    background-color: #fafafa;
    text-align: center;
    overflow-x: hidden;
    @media only screen and (min-width: 600px){
        padding-left: ${marginLeft};
        width: 1440px;
        height: 526px;
    }
    & section {
        display: flex;
        flex-direction: column;

        & span {
            font-family: HelveticaNeue-thin;
            font-size: 14px;
            font-weight: 100;

            @media only screen and (min-width: 600px){
                    width: 567px;
                    height: 269px;
                    font-size: 22px;
                    font-weight: 100;
                    letter-spacing: 1.69px;
                    text-align: justify;
                }

            &.about-us{
                width: 100%;
                height: 17px;
                margin-bottom: 7px;
                letter-spacing: 0.88px;
                white-space: nowrap;
            }

            &.Lorem-ipsum-dolor-si{
                width: 304px;
                height: 259px;
                margin: 7px 0 32px;
                letter-spacing: 1.08px;
                font-family: HelveticaNeue-thin;
                color: black;
                @media only screen and (min-width: 600px){
                    width: 567px;
                    height: 269px;
                    font-size: 22px;
                    font-weight: 100;
                    letter-spacing: 1.69px;
                    text-align: justify;

                    & img {
                        
                    }
                }

            }
        }
    }
    & img {
        &.about---logo{
            width: 137px;
            height: 128px;
            margin: 32px 83px 34px 84px;
            object-fit: contain;
            @media only screen and (min-width: 600px){
                display: none;
            }
        }

        
    }

    & div{
        &.get-it-container{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 10px;

            @media only screen and (min-width: 600px){
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: flex-start;
            }
        }

        &.float-right-container{
            @media only screen and (max-width: 600px){
                    display: none;
            }
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width:40%;

            & img.float-right-logo{
                right: 0;
                justify-self: center;
                justify-self: flex-end;
                width: 178px;
                height: 166px;
            }
        }
    }
`
const AboutUs: React.FC = () => {
    return (
        <StyledDiv>
            <section className="left-side">
                <span className="about-us">About us:</span>
                <span className="Lorem-ipsum-dolor-si">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum.
                    Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum.
                    Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.
                </span>
                <img className="about---logo" src={EpicureLogo} alt="logo" />
                <div className="get-it-container">
                    <GetItIcon fromHeadline="Download on the" from="App Store" icon={AppleLogo} />
                    <GetItIcon fromHeadline="Get it on" from="Google Play" icon={googleLogo} />
                </div>
            </section>
            <div className="float-right-container">
                <img className="float-right-logo" src={EpicureLogo} alt="floating logo" />
            </div>
        </StyledDiv>
    );
}

export default AboutUs;
