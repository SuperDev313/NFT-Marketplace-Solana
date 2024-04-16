import "./bid.css";
import React from "react";
import NFT from "./images/NFT.svg";
import Avatar from "./images/Avatar.svg";
import Image from "next/image";

const Bid = ({ displayMode }: { displayMode: string }) => {
  const Panel = () => {
    return (
      <div className="checkbox">
        <input type="checkbox" />
        <div className="nft--container">
          <Image id="nft" src={NFT} alt="nft" />
          <div className="nft--details">
            <div id="name">Cute Cube Cool</div>
            <div>John Abraham</div>
          </div>
        </div>
        <div>20.50 SOL</div>
        <div>20.50 SOL</div>
        <div className="offer-container">
          <Image src={Avatar} alt="user" />
          <div>20.50 SOL</div>
        </div>
        <div>2 Hours 1 Min 30s</div>
        <div id="X">X</div>
      </div>
    );
  };

  let bidClass;
  let panelClass: string;

  if (displayMode === "dark") {
    bidClass = "bids--container";
    panelClass = "activity--panel";
  } else {
    bidClass = "bids--container-lm";
    panelClass = "activity--panel-lm";
  }

  return (
    <main className={bidClass}>
      <div>
        <h1>Bids</h1>
        <div className="lable--container">
          <div>Welcome to Bids</div>
          <div id="lable">
            <div id="home">Home</div>
            <div>{`>`}</div>
            <div id="bids">Bids</div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="activity--container-label">
        {" "}
        <h1>Active Bids</h1>
        <button>Place a Bid</button>
      </div>
      <div className="activity--container">
        <div className="activity--label">
          <input type="checkbox" />
          <div>Item List</div>
          <div>Open Price</div>
          <div>Your Offer</div>
          <div>Recent Offer</div>
          <div>Time Left</div>
          <div id="X">Action</div>
        </div>
        <div className="activity--div"></div>
        <div className="panel--container">
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
        </div>
      </div>
    </main>
  );
};

export default Bid;
