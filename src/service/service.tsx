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

    return (
        <>
            {
                values.map((value, index) => {
                    const currId = formName + index;
                    return (
                        <>
                            <input type={inputType} id={currId} name={name} value={value} />
                            <label htmlFor={currId} >hello</label>
                        </>
                    );
                })
            }
        </>
    );
}