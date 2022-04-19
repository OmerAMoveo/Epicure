import styled from "styled-components";
import { FormEventHandler, LabelHTMLAttributes, useEffect, useState } from "react";
import { default as x } from '../../images/x.svg'
import { mapIngredients, selectCommentIcon } from '../../service/service'
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { addItemsToCart, changeDisplayStatus } from "../../store/store";
import { default as ilsIcon } from '../../images/ils.svg';

const StyledDishModal = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    background-color: white;
    text-align: center;
    justify-self: center;
    top: 0;

    @media only screen and (min-width: 600px) {
        /* position: fixed; */
        z-index: 10;
        width: 30%;
        right: 30%;
        left: 30%;
        margin-top: 53px;
        padding-bottom: 10px;
    }
    & div {
        &.empty-box{
            margin-left: auto; 
            margin-right: auto;
            bottom: 80px;
            width: 39px;
            height: 30px;
        }

        &.cancel-div{
            display: flex;
            width: 100%;
            margin: 10px;
            margin-left: 30px;
        }

        &.price-box{
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
            }
        }

        & label{
            width: 123px;
            height: 21px;
            margin: 4px 0 25px 19px;
            font-family: HelveticaNeue;
            font-size: 18px;
            font-weight: 100;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: black;
        }
    }

    & img {
        &.main-image{
            width: 100%;  
            object-fit: cover;
        }

        &.comment-image{
            width: 32px;
            height: 24px;
            margin: 10px;
        }

        &.nis{
            width: 9px;
            height: 8px;
        }
    }

    & p{  
        &.dish-name{
            width: 144px;
            height: 28px;
            font-family: HelveticaNeue;
            font-size: 24.5px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 1.63px;
            color: black;
            white-space: nowrap;
        }

        &.description{
            width: 212.1px;
            align-self: center;
        }

        &.price-number{
            margin: 0px;
            white-space: nowrap;
        }
    }

    & form {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;
        text-align: start;
        flex-direction: column;
        padding: 5px;
        margin: 5px;
 
        
        & div{
            &.no-items {
            text-align: center;
            }
            margin-bottom: 10px;
            margin-left: 10px;
            & input[type= "radio"] {
                transform: scale(2);       
            }
            & input[type= "checkbox"] {
                transform: scale(2);       
            }
        }
    }

    & h1 {
        height: 20px;
        font-family: HelveticaNeue;
        white-space: nowrap;
        font-size: 17px;
        font-weight: 100;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1.21px;
        text-align: center;
        border-bottom: 1px solid rgba(222, 146, 0, 0.9);
        padding-bottom:3px;
    }

    & span {
        &.quantity{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 100%;
            margin-bottom: 20px;
            & button {
                font-size: 40px; 
                border: none;
                background-color: white;
            }
            & input{
                pointer-events:none;
                width: 20px;
            }

            & p {
                white-space: nowrap;
            }
        }
    }

    & button {
        &.add-item {
            width: 206px;
            height: 53px;
            padding: 0 0px 0 0;
            border-radius: 2.1px;
            background-color: black;


            & p {
                vertical-align: middle;
                font-family: HelveticaNeue;
                font-size: 18.9px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: 1.08px;
                text-align: center;
                color: white;
                margin-bottom: 10px;
            }

            &:disabled{
                background-color: grey;
            }
        }
    }
`

const DishModal: React.FC = () => {

    const dispatch = useDispatch();
    const theDisplayedDish = useSelector((state: RootStateOrAny) => state.displayDish.dish);
    const cart = useSelector((state: RootStateOrAny) => state.auth.cart);
    console.log(theDisplayedDish);

    const [displayedNumber, setDisplayedNumber] = useState(0);
    const [sideDish, setSideDish] = useState<string | null>(null)
    const [selectedChanges, setSelectedChanges] = useState<string[]>([])

    const xClickedHandler = () => {
        dispatch(changeDisplayStatus(theDisplayedDish.dish));
    }

    const onMinusClickedHandler = () => {
        setDisplayedNumber(displayedNumber - 1);
    }

    const onPlusClickedHandler = () => {
        setDisplayedNumber(displayedNumber + 1);
    }

    const radioChangeHandler = (e: any) => {
        setSideDish(e.target.value);
    }

    const checkBoxChangeHandler = (e: any) => {
        const newArray = selectedChanges.filter(value => value !== e.target.defaultValue);
        e.target.checked ?
            setSelectedChanges([...selectedChanges, e.target.defaultValue]) :
            setSelectedChanges(newArray);
    }

    const InputCheckGenerator = (inputType: 'radio' | 'checkbox', formName: string, name: string, values: string[], onChangeFunction: ((e: any) => void)) => {

        const resVal = values.map((value, index) => {
            const currId = formName + index;

            return (
                <div key={`choice-row-${index}`}>
                    <input type={inputType} id={currId} key={'input' + index} name={name} value={value} className={`${inputType}-container`} onChange={onChangeFunction} />
                    <label htmlFor={currId} className={currId} key={'label' + index} >{value}</label>
                </div>
            );
        })
        return resVal;
    }

    const onSubmitDishForms = () => {
        console.log('here');

        dispatch(addItemsToCart({
            name: theDisplayedDish.name,
            quantity: displayedNumber,
            price: theDisplayedDish.price,
            side: sideDish,
            changes: selectedChanges,
        }));
    }

    return (
        <StyledDishModal>
            <div className="cancel-div">
                <img className="x" src={x} alt='exit' onClick={xClickedHandler} />
            </div>
            <img src={require(`../../images/${theDisplayedDish?.image}`)} className="main-image" alt='food' />
            <p className="dish-name">{theDisplayedDish?.name}</p>
            <p className="description">{mapIngredients(theDisplayedDish)}</p>
            {theDisplayedDish?.comment ?
                <img src={selectCommentIcon(theDisplayedDish.comment)} className="comment-image" alt={theDisplayedDish.comment.toString()} />
                : <div className="empty-box" />}
            <div className="price-box">
                <div className="line-4" />
                <div className="price">
                    <img src={ilsIcon} alt='nis' className='nis' />
                    <span>{theDisplayedDish?.price}</span>
                </div>
                <div className="line-4" />
            </div>
            <h1>Choose a side</h1>
            <form >
                {theDisplayedDish.sides.length ? InputCheckGenerator('radio', 'sides', 'sides', theDisplayedDish.sides, radioChangeHandler) : <div className="no-items"><p >No sides for this dish.</p></div>}
            </form>
            <h1>Changes</h1>
            <form>
                {theDisplayedDish.changes.length ? InputCheckGenerator('checkbox', 'changes', 'changes', theDisplayedDish.changes, checkBoxChangeHandler) : <div className="no-items"><p>No changes for this dish.</p></div>}
            </form>
            <h1>Quantity</h1>
            <span className="quantity">
                <button disabled={displayedNumber ? false : true} onClick={onMinusClickedHandler}>-</button>
                <p>{displayedNumber}</p>
                <button onClick={onPlusClickedHandler}>+</button>
            </span>
            <button disabled={displayedNumber ? false : true} onClick={onSubmitDishForms} className="add-item"><p>ADD TO BAG</p></button>
        </StyledDishModal >
    );
}

export default DishModal;
