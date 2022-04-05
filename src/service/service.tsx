import { Comment } from "../mockDB/MockDB";
import { default as spicyIcon } from '../images/spicy-icon.svg'
import { default as vegetarianIcon } from '../images/vegetarian-icon.svg'
import { default as veganIcon } from '../images/vegan-icon.svg'
import { dish } from "../mockDB/MockDB";

export const mapIngredients = (dish: dish) => {
    return dish.ingredients.join(', ')
}

export const selectCommentIcon = (dishComment: Comment) => {
    if (dishComment === Comment.spicy) return spicyIcon;
    if (dishComment === Comment.vegeterian) return vegetarianIcon;
    if (dishComment === Comment.vegan) return veganIcon;
    return 'error in returning comment icon';
}

export const InputCheckGenerator = (inputType: 'radio' | 'checkbox', formName: string, name: string, values: string[]) => {

    const resVal = values.map((value, index) => {
        const currId = formName + index;

        return (
            <div className="option">
                <input type={inputType} id={currId} key={'input' + index} name={name} value={value} className='radio-container' />
                <label htmlFor={currId} key={'label' + index} >{value}</label>
            </div>
        );
    })

    return resVal;
}