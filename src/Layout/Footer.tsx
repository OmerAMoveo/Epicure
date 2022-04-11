import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    top: 0;
    height: 126px;
    width: 100%;
    border-top: solid rgba(0,0,0,0.15);

    @media only screen and (min-width: 600px){
        flex-direction: row;
        height: 94px;
        justify-content: center;
    }

    & div.text-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: inherit;
        justify-content: center;
        @media only screen and (min-width: 600px){
            margin-top: 20px;
            width: auto;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
        }
        & span{
            width: 100%;
            height: 15px;
            margin: 0 7px 18px 8px;
            font-family: HelveticaNeue-thin;
            font-size: 12px;
            font-weight: 100;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.76px;
            text-align: center;
            color: black;
        }  
    }
`

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <div className="text-container">
                <span>Contact us</span>
                <span>Term of Use</span>
                <span>Privacy Policy</span>
            </div>
        </StyledFooter>
    );
}

export default Footer;
