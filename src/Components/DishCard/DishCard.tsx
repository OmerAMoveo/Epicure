import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { dish } from "../../mockDB/MockDB";
import { selectCommentIcon } from "../../mockDB/MockDB";
import { default as ilsIcon } from '../../images/ils.svg';
import { useDispatch } from "react-redux";
import { changeDisplayStatus } from "../../store/store";

const StarDishDiv = styled.div`
    display: flex;
    flex-flow: column;
    width: 259.2px;
    height: 470.9px;
    background-color: ${colors.light_tan};
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    & img {
        &.main-image{
            width: 259.2px;
            height: 208.8px;
            object-fit: cover;
        }

        &.comment-image {
            margin-left: auto; 
            margin-right: auto;
            width: 39px;
            height: 30px;

        }
    }
    & section.description {
        display: flex;
        flex-direction: column;
        align-content: center;
        height: 100px;
    }
    & div.empty-box{
        margin-left: auto; 
        margin-right: auto;
        bottom: 80px;
        width: 39px;
        height: 30px;
        
    }

    & div.description-box{
        height: 200px;
        border: solid;
    }
    & div.to-bottom{
        display: flex;
        flex-direction: column;
        & span {
            &.price-section{
                display: flex;
                justify-content: center;
                width: 100%;
                margin-bottom: 30px;
                & div{
                    &.line-4 {
                        width: 46.2px;
                        height: 0.8px;
                        margin: 11.2px 13.7px 10px 13.7px;
                        background-color: grey;
                    }
                
                    & span {
                        width: 32px;
                        height: 29px;
                        font-family: HelveticaNeue;
                        font-size: 24.9px;
                        font-weight: 100;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: normal;
                        letter-spacing: 1.66px;
                    }                  
                }
            }
        }      
    }
`
type Props = {
    dish: dish

}

const DishCard: React.FC<Props> = (props) => {

    const dispatch = useDispatch();

    const mapIngredients = () => {
        return props.dish.ingredients.join(', ')
    }

    const onClickHandler = () => {
        dispatch(changeDisplayStatus(props.dish))
    }

    return (
        <StarDishDiv onClick={onClickHandler}>
            <img src={props.dish.image} className="main-image" alt='food' />
            <article>
                <h1>{props.dish.name}</h1>
                <section className="description"><p className="description">{mapIngredients()}</p></section>
            </article>
            <div className="to-bottom">
                {props.dish.comment ? <img src={selectCommentIcon(props.dish.comment)} className="comment-image" alt={props.dish.comment.toString()} /> : <div className="empty-box" />}
                <span className="price-section">
                    <div className="line-4" />
                    <div className="price">
                        <img src={ilsIcon} alt='nis' />
                        <span>{props.dish.price}</span>
                    </div>
                    <div className="line-4" />
                </span>
            </div>
        </StarDishDiv>
    );
}

export default DishCard;