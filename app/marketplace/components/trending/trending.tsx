import "./trending.css";
import React, { ReactElement } from "react";
import Card from "../card/card";

type nftData = any[] | null;

const Trending = ({
  displayMode,
  data,
}: {
  displayMode: string;
  data?: nftData;
}) => {
  let trendingCards: ReactElement | any[] = (
    <>
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
      <Card displayMode={displayMode} />
    </>
  );

  if (data) {
    trendingCards = data.map((obj) => {
      return (
        <Card
          displayMode={displayMode}
          key={obj.id}
          title={obj.name}
          image={obj.image}
          floor_price={obj.floorPrice}
        />
      );
    });
  }
  return <div className="trending">{trendingCards}</div>;
};

export default Trending;
