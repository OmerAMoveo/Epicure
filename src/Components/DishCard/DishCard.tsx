import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { dish } from "../../mockDB/MockDB";
import { selectCommentIcon } from "../../mockDB/MockDB";
import { default as ilsIcon } from '../../images/ils.svg';

const StarDishDiv = styled.div`
    width: 259.2px;
    height: 470.9px;
    background-color: ${colors.light_tan};
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    justify-content: center;
    & img {
        &.main-image{
            width: 259.2px;
            height: 208.8px;
            object-fit: cover;
        }

        &.comment-image {
            border:solid;
            width: 259.2px;
            margin-left: auto; 
            margin-right: auto;
            bottom: 80px;
            width: 39px;
            height: 30px;
        }
    }

    & section {
        &.price-section{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-content: flex-end;
            border:solid;     
                   
        }      
    }

`
type Props = {
    dish: dish
}

const DishCard: React.FC<Props> = (props) => {

    const mapIngredients = () => {
        return props.dish.ingredients.join(', ')
    }
    return (
        <StarDishDiv>
            <img src={props.dish.image} className="main-image" alt='food' />
            <article>
                <h1>{props.dish.name}</h1>
                <p className="description">{mapIngredients()}</p>
            </article>
            {props.dish.comment ? <img src={selectCommentIcon(props.dish.comment)} className="comment-image" alt={props.dish.comment.toString()} /> : <div />}
            <section className="price-section">
                <div className="line-4" />
                <div className="price">
                    <img src={ilsIcon} alt='nis' />
                    <p>{props.dish.price}</p>
                </div>
                <div className="line-4" />
            </section>
        </StarDishDiv>
    );
}

export default DishCard;