import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import "./card.css";
import NFT from "./images/NFT.svg";

import Image from "next/image";

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

  if (displayMode === "dark") {
    cardContainerClass = "card--container";
  } else {
    cardContainerClass = "card--container-lm";
  }

  return (
    <div className={cardContainerClass}>
      <div
        className="
                self-center
                rounded-lg
                h-150px
                w-150px
            "
      >
        <Image width={125} height={125} src={image ? image : NFT} alt="nft" />
      </div>
      <div id="title">{title || "Liquid Wave"}</div>
      <div className="info--container">
        <div className="info">
          <div>Auction Time</div>
          <div>Current Bid</div>
        </div>
        <div id="bid">1.50 SOL</div>
      </div>
      <div className="vals">
        <div>3h 1m 50s</div>
        <div>{Number(floor_price) / LAMPORTS_PER_SOL || "20"} SOL</div>
      </div>
      <button id="bid--button">Place a Bid</button>
    </div>
  );
};

export default Card;
