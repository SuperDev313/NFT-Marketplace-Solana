import "./bid.css";
import React from "react";
import NFT from "./images/NFT.svg";
import Avatar from "./images/Avatar.svg";
import Image from "next/image";

const Bid = ({ displayMode }: { displayMode: string }) => {
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
