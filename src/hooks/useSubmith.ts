import { useSelector } from 'react-redux';

import useNormalize from "src/hooks/useNormalize";
import { RootState } from '@/store';
import { Tdata } from "@/components/page/BasketPage";

const useSubmith = (reset: () => void) => {

    const total = useSelector((state: RootState) => state.basket.total);

    const { normalData } = useNormalize()

    const onSubmit = (data: Tdata) => {
        alert(`Данные пользователя: 
        Телефон: ${data.phone}
        Имя: ${data.name}
        Почта: ${data.email}`)
        alert(`ЗАКАЗ: ${normalData}, 
            Общая сумма: ${JSON.stringify(total).replace(/['"]+/g, '')}$`);
        reset();
    };

    return {
        onSubmit
    }
}

export default useSubmith