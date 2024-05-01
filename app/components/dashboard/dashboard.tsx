import Trending from "../trending/trending"
import Featured from "./images/Featured.svg"
import Avatar from "./images/Avatar.svg"

import Image from "next/image"

type nftData = any[] | null;

const Dashboard = ({
  displayMode,
  data,
}: {
  displayMode: string;
  data: nftData;
}) => {};

export default Dashboard;
