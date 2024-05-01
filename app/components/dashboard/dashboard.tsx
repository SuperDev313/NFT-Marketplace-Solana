import Trending from "../trending/trending";
import Featured from "./images/Featured.svg";
import Avatar from "./images/Avatar.svg";

import Image from "next/image";

type nftData = any[] | null;

const Dashboard = ({
  displayMode,
  data,
}: {
  displayMode: string;
  data: nftData;
}) => {
  return (
    <main className={contContainerClass}>
      <div className="discover--container">
        <div id="explore" className="discover">
          <div className={discTitleClass}>
            Discover, Collect, Sell, and Create your NFT
          </div>
          <div id="desc">
            Digital marketplace for crypto collectibles and non-fungible tokens
          </div>
          <div className="button--container">
            <button id="discover">Explore</button>
            <button id="create">Create</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
