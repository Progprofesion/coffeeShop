import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from 'src/store/index';

import { Tcard } from "../components/card/Card";

import {
    statePrice,
    addProduct,
    incrQuantity,
    decrQuantity,
    removeProduct,
    activeIncrTotals,
    activeDecrTotals,
    addFavorite,
    removeFaivorite
} from 'src/store/slices/basketSlice';


const useCard = ({ id, img, title, country, price }: Tcard) => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const stateArrRender: Tcard[] = useSelector((state: RootState) => state.basket.stateStartArr);

    const addItem = () => {
        const item = {
            id,
            img,
            title,
            country,
            price,
        }
        dispatch(addProduct(item))
    };

    const basketIncr = () => {
        addItem()
        dispatch(incrQuantity(price))
        dispatch(statePrice({ price }))
        dispatch(activeIncrTotals(price))
    };


    const basketDecr = () => {
        dispatch(statePrice({ price }))
        dispatch(decrQuantity(id))
        dispatch(activeDecrTotals(price))
        dispatch(removeProduct(id))
    };

    const basketRandomBtn = (e: React.MouseEvent, stateRandom: number | string) => {
        e.preventDefault();
        for (let t = 0; t < stateRandom; t++) {
            addItem()
            dispatch(incrQuantity(price))
            dispatch(statePrice({ price }))
            dispatch(activeIncrTotals(price))
            setValue('')
        }
    }

    const star = () => {
        if (!stateArrRender[id!].faivorite) {
            dispatch(addFavorite(id))
        } else {
            dispatch(removeFaivorite(id))
        }
    };

    return {
        basketIncr,
        basketDecr,
        basketRandomBtn,
        star,
        value,
        setValue
    }
}

export default useCard