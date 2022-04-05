import styled from "styled-components";
import { Dispatch, SetStateAction, useState } from "react";
import { default as x } from '../../images/x.svg'
import { mapIngredients, selectCommentIcon, InputCheckGenerator } from '../../service/service'
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { changeDisplayStatus } from "../../store/display-slice";
import { default as ilsIcon } from '../../images/ils.svg';
import { default as plus } from '../../images/plus.svg';
import { default as minus } from '../../images/minus.svg';

const StyledDishModal = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    background-color: white;
    text-align: center;
    width: 100%;
    height: 100%;
    top: 0;

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
        border: solid red;  
        
        & div.no-items{
            text-align: center;
        }
    }

    & h1{
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
`

const DishModal: React.FC = () => {

    const dispatch = useDispatch();
    const theDisplayedDish = useSelector((state: RootStateOrAny) => state.data.dish);

    const xClickedHandler = () => {
        dispatch(changeDisplayStatus(theDisplayedDish.dish));
    }

    return (
        <StyledDishModal>
            <div className="cancel-div">
                <img className="x" src={x} alt='exit' onClick={xClickedHandler} />
            </div>
            <img src={theDisplayedDish.image} className="main-image" alt='food' />
            <p className="dish-name">{theDisplayedDish.name}</p>
            <p className="description">{mapIngredients(theDisplayedDish)}</p>
            {theDisplayedDish.comment ?
                <img src={selectCommentIcon(theDisplayedDish.comment)} className="comment-image" alt={theDisplayedDish.comment.toString()} />
                : <div className="empty-box" />}
            <div className="price-box">
                <div className="line-4" />
                <div className="price">
                    <img src={ilsIcon} alt='nis' className='nis' />
                    <span>{theDisplayedDish.price}</span>
                </div>
                <div className="line-4" />
            </div>
            <h1>Choose a side</h1>
            <form>
                {theDisplayedDish.sides.length ? InputCheckGenerator('radio', 'sides', 'sides', theDisplayedDish.sides) : <div className="no-items"><p >No sides for this dish.</p></div>}
            </form>
            <h1>Changes</h1>
            <form>
                {theDisplayedDish.changes.length ? InputCheckGenerator('checkbox', 'changes', 'changes', theDisplayedDish.changes) : <div className="no-items"><p>No changes for this dish.</p></div>}
            </form>
            <h1>Quantity</h1>
            <span className="quantity">
                <img src={minus} />
                <img src={plus} />
            </span>
        </StyledDishModal>
    );
}

export default DishModal;