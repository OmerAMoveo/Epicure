import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { dish } from "../../mockDB/MockDB";
import { selectCommentIcon } from "../../mockDB/MockDB";
import { default as ilsIcon } from '../images/ils.svg';

const StarDishDiv = styled.div`
    width: 259.2px;
    height: 262.1px;
    margin: 208.8px 0 0;
    padding: 11.5px 22.1px 6.9px 21px;
    opacity: 0.7;
    background-color: ${colors.light_tan};
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
            <img src={props.dish.image} />
            <article>
                <h1>{props.dish.name}</h1>
                <p>{mapIngredients()}</p>
            </article>
            {props.dish.comment ? <img src={selectCommentIcon(props.dish.comment)} /> : <div />}
            <section className="price-section">
                <div className="line-4" />
                <div className="price">
                    <img src={ilsIcon} />
                    <p>{props.dish.price}</p>
                </div>
                <div className="line-4" />
            </section>
        </StarDishDiv>
    );
}

export default DishCard;