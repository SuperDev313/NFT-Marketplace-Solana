import "./header.css";

import Display from "./images/darkDisplay.svg";
import lmDisplay from "./images/lightDisplay.svg";
import Notifications from "./images/Notifications.svg";
import Avatar from "./images/Avatar.svg";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import Image from "next/image";

const Header = ({
  displayMode,
  setDisplayMode,
}: {
  displayMode: string;
  setDisplayMode: Function;
}) => {
  let displayIcon;
  let searchId;

  const handleClick = () => {
    if (displayMode === "dark") {
      displayIcon = lmDisplay;
      setDisplayMode("light");
    } else {
      displayIcon = Display;
      setDisplayMode("dark");
    }
  };

  if (displayMode === "dark") {
    searchId = "search";
    displayIcon = Display;
  } else {
    searchId = "search-lm";
    displayIcon = lmDisplay;
  }

  return (
    <header className="header--container">
      <input id={searchId} type="search" placeholder="Search..." />
      <div className="img--container">
        <Image onClick={handleClick} src={displayIcon} alt="display" />
        <Image src={Notifications} alt="notifs" />
        <Image src={Avatar} alt="user" />
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>
    </header>
  );
};

export default Header;
