import "./card.css";

const Card = ({
  title,
  displayMode,
  image,
  floor_price,
}: {
  title?: string;
  displayMode: string;
  image?: string;
  floor_price?: string;
}) => {
  let cardContainerClass;

  if (displayMode == "dark") {
    cardContainerClass = "card--container";
  } else {
    cardContainerClass = "card--container-lm";
  }
  return <div></div>;
};

export default Card;
