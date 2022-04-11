import styled from "styled-components"

type Props = {
    fromHeadline: string,
    from: string,
    icon: string,
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 126.8px;
    height: 36.8px;
    padding: 5px 12.2px 5.8px 10.5px;
    border-radius: 6.7px;
    border: solid 0.5px black;

    @media only screen and (min-width: 600px) {
        margin-right: 10px;
    }

    & img.icon {
        width: 17px;
        height: 22px;
        margin: 0 9.7px 4.3px 0;
        object-fit: contain;
    }
    & div.text-container{
        display: flex;
        flex-direction: column;
            & span {
                height: 13px;
                width: 74px;
                font-family: HelveticaNeue;
                font-size: 11.8px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                white-space: nowrap;
                letter-spacing: 0.9px;
                text-align: center;
                color: black;

                &.from-headline{
                    font-size: 11px;
                }

                &.from{
                    font-size: 11.8px;
                }
        }
    } 
`

const GetItIcon: React.FC<Props> = (props) => {
    return (
        <StyledDiv>
            <img className="icon" src={props.icon} />
            <div className="text-container">
                <span className="from-headline">{props.fromHeadline}</span>
                <span className="from">{props.from}</span>
            </div>
        </StyledDiv>
    );
}

export default GetItIcon;