import { useCallback } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;;
    margin: inherit;
    border:solid;
    & h3 {
        height: 18px;
        margin: 0 0 10px;
        margin-left: 52px;
        margin-top: 10px;
        opacity: 0.5;
        font-family: HelveticaNeue;
        font-size: 15px;
        font-weight: 100;
        letter-spacing: 1.07px;
        color: black;
    }

    & ul {
        display: flex;
        flex-direction: column;
        font-size: 15px;
        list-style-type: none;

        & li{
            font-family: HelveticaNeue;
            font-weight: 100;
            letter-spacing: 1.07px;
            color: black;
            }
    }
`

type Props = {
    headline: string,
    displayedField: string,
    mappedData: any[],
}

const SearchField: React.FC<Props> = (props) => {


    const mapListItemsElements = useCallback(() => {
        const mappedElements = props.mappedData.map((item, index) => <li key={index}>{item[props.displayedField]}</li>);
        console.log(mappedElements[0]);

        return (
            <ul>
                {mappedElements}
            </ul>
        );
    }, [])

    return (
        <>
            {props.mappedData.length ?
                <StyledDiv>
                    <h3>{props.headline}:</h3>
                    {mapListItemsElements()}
                </StyledDiv>
                :
                <></>
            }
        </>
    );
}

export default SearchField;