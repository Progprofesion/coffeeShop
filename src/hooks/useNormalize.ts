import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const useNormalize = () => {
    const addProduct = useSelector((state: RootState) => state.basket.items);

    const normalize = (arr: []) => {
        return arr.map(({ title, quantity, price, }) => {
            const data = `
            ${title},
            Количество: ${quantity}, Цена: ${price}$`;
            return data
        })
    };

    const normalData = normalize(addProduct)

    return { normalData }
}

export default useNormalize