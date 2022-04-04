import styled from "styled-components";
import { Dispatch, SetStateAction, useState } from "react";
import { default as x } from '../../images/x.svg'
import { dish } from "../../mockDB/MockDB";
import { mapIngredients, selectCommentIcon, InputCheckGenerator } from '../../service/service'
type Props = {
    xClicked: boolean,
    setXClicked: Dispatch<SetStateAction<boolean>>
    dish: dish
}

const StyledFloatingDish = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: space-evenly;
    background-color: white;

    & div.empty-box{
        margin-left: auto; 
        margin-right: auto;
        bottom: 80px;
        width: 39px;
        height: 30px;
    }

    & img {
        &.main-image{
            width: 375px;
            height: 254px;    
            object-fit: cover;
        }
    }
`

const FloatingDish: React.FC<Props> = (props) => {

    const xClickedHandler = () => {
        props.setXClicked(!props.xClicked);
    }


    return (
        <StyledFloatingDish>
            <div className="cancel-div">
                <img className="x" src={x} alt='exit' onClick={xClickedHandler} />
            </div>
            <img src={props.dish.image} className="main-image" alt='food' />
            <p className="dish-name">{props.dish.name}</p>
            <p className="description">{mapIngredients(props.dish)}</p>
            {props.dish.comment ?
                <img src={selectCommentIcon(props.dish.comment)} className="comment-image" alt={props.dish.comment.toString()} />
                : <div className="empty-box" />}
            <div className="price-box"></div>
            <form>
                {InputCheckGenerator('radio', 'sides', 'sides', props.dish.sides)}
            </form>

        </StyledFloatingDish>
    );
}

export default FloatingDish;