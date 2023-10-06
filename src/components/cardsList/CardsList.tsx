import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import SearchComponent from "../searchComponent/SearchComponent";
import Card from "../card/Card";
import SkeletonCardsList from "../skeleton/SkeletonCardsList";
import useFilters from "src/hooks/useFilters";

import { useGetProductsQuery } from "../api/apiSlice";

import video from "../../assets/video/video.mp4";

import Error from "src/assets/icons/Error.gif";
import "./cardsList.scss";

interface CardListInterface {
  cardsView?: number;
  style?: React.CSSProperties;
  title?: string;
  props?: React.CSSProperties;
  stateFaivorite?: boolean;
  faivorite?: boolean;
  videoStyle?: React.CSSProperties;
  addClassBg?: string;
  addClassCardsTitle?: string;
  addClassCards?: string;
}

export type Trender = {
  page: number;
  price: number;
  id: number;
  img: string;
  title: string;
  country: string;
  quantity: number;
  faivorite: boolean;
};

const CardsList = ({
  cardsView,
  addClassCardsTitle,
  title,
  stateFaivorite,
  videoStyle,
  addClassBg,
  addClassCards,
}: CardListInterface) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { isLoading, isError } = useGetProductsQuery(null);
  const location = useLocation();
  const { filteredCards } = useFilters();

  useEffect(() => {
    if (!videoLoaded) {
      // загрузка видео
      setVideoLoaded(true);
    }
  }, [videoLoaded]);

  if (isError) {
    return <Error />;
  }

  const renderCardsList = (arr: Trender[]) => {
    // eslint-disable-next-line
    return arr.map(
      ({
        page,
        price,
        id,
        img,
        title,
        country,
        quantity,
        faivorite,
        ...rest
      }: Trender) => {
        // Отображение нужного количества количества карточек или отображение карточек в Избранном
        if (page > cardsView! || (stateFaivorite && faivorite)) {
          return isLoading ? (
            <SkeletonCardsList key={page} />
          ) : (
            <Card
              {...rest}
              key={page}
              price={price}
              id={id}
              img={img}
              title={title}
              country={country}
              quantity={quantity}
              faivorite={faivorite}
            />
          );
        }
      }
    );
  };

  const elements = renderCardsList(filteredCards);

  return (
    <section className={`cardsList ${addClassCards}`}>
      <div style={videoStyle} className="cardsList__videoWrapp">
        {videoLoaded && location.pathname === "/pleasure" ? (
          <video
            className="cardsList__videoWrapp-video"
            src={video}
            muted
            loop
            autoPlay
          ></video>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
      <div className="container">
        <h2 className={`cardsList__title ${addClassCardsTitle}`}>{title}</h2>
        <div className={`cardsList__bg ${addClassBg}`}>
          <SearchComponent />
          <TransitionGroup className="cardsList__wrapper">
            {elements}
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
};

export default CardsList;
