import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

import Button from "../button/Button";
import Modal from "../modal/Modal";
import BasketLayout from "../basket/BasketLayout";
import Footer from "../footer/Footer";

import useSubmith from "src/hooks/useSubmith";
import { useMask } from "src/hooks/useMask";

export type Tdata = {
  phone: string;
  name: string;
  email: string | number;
};

const BasketPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<{
    [x: string]: string;
    phone: string;
    name: string;
    email: string;
  }>({
    mode: "onBlur",
  });

  const inputRef = useRef<HTMLInputElement>();
  const { ref, ...rest } = register("phone");

  const { onPhoneinput, onPhoneKeyDown, onPhonePaste } = useMask(inputRef);

  const [modalActive, setModalActive] = useState(false);

  const { onSubmit } = useSubmith(reset);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={"Basket page"} />
        <title>Basket</title>
      </Helmet>
      <Modal active={modalActive} setActive={setModalActive}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="basketView__form"
          action=""
        >
          <h4 className="basketView__form-title">Оформить заказ</h4>
          <div className="basketView__form-modal">
            <div className="basketView__form-item"></div>
            <div className="basketView__form-item">
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    // eslint-disable-next-line
                    value:
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,

                    message: "Неправильный адрес почты",
                  },
                })}
                className="basketView__form-input"
                placeholder="Почта"
                type="email"
              />
              {errors.email ? (
                <p className="basketView__form-errorMessage">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
            <div className="basketView__form-item">
              <input
                {...register("phone", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 8,
                    message: "Минимум 8 символов",
                  },
                })}
                className="basketView__form-input"
                placeholder="Телефон"
                type="tel"
                {...rest}
                name="phone"
                ref={(e: HTMLInputElement) => {
                  ref(e);
                  inputRef.current = e;
                }}
                onChange={(e) => onPhoneinput(e)}
                onKeyDown={onPhoneKeyDown}
                onPaste={onPhonePaste}
                maxLength={18}
              />
              {errors.phone ? (
                <p className="basketView__form-errorMessage">
                  {errors.phone.message}
                </p>
              ) : null}
            </div>
          </div>
          <Button title={"Купить"} type="submit" style={{ margin: "10px" }} />
        </form>
      </Modal>
      <BasketLayout setModalActive={setModalActive} />
      <Footer />
    </HelmetProvider>
  );
};

export default BasketPage;
