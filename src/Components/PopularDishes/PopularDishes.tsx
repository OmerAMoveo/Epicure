import styled from "styled-components";
import DishCard from "../DishCard/DishCard";
import { getDishes } from "../../mockDB/MockDB";


const PopularDishes: React.FC = () => {

    //on real-version: randomize x restaurants for mapping if it's okay for Shilo
    const dishesTable = () => {
        return getDishes().map(dish => <tr></tr>)
    }
    return (
        <>
            <h3>SIGNATURE DISH OF:</h3>
            <table></table>
        </>
    );
}

export default PopularDishes;