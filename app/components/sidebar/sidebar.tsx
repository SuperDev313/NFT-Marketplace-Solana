import "./sidebar.css";
import Logo from "./images/Logo.svg";
import Dashboard from "./images/DashBoard.svg";
import Bid from "./images/Bid.svg";
import Collection from "./images/Collection.svg";
import Profile from "./images/Profile.svg";
import Settings from "./images/Settings.svg";
import Logout from "./images/Logout.svg";
import selectedDashboard from "./images/selectedDashBoard.svg";
import selectedBid from "./images/selectedBid.svg";
import selectedCollection from "./images/selectedCollection.svg";
import selectedProfile from "./images/selectedProfile.svg";

import Image from "next/image";

const Sidebar = ({
  selectedComponent,
  changeComponent,
  displayMode,
}: {
  selectedComponent: string;
  changeComponent: Function;
  displayMode: string;
}) => {
  const handleClick = (component: string) => {
    console.log(component);
    changeComponent(component);
  };

  let containerClass;
  if (displayMode === "dark") {
    containerClass = "sb--container";
  } else {
    containerClass = "sb--container-lm";
  }

  return (
    <nav className={containerClass}>
      <div className="sb--icon-container">
        <div id="logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div id="menu">
          <Image
            onClick={() => handleClick("Dashboard")}
            src={
              selectedComponent === "Dashboard" ? selectedDashboard : Dashboard
            }
            alt="icon"
          />
          <Image
            onClick={() => handleClick("Bid")}
            src={selectedComponent === "Bid" ? selectedBid : Bid}
            alt="icon"
          />
          <Image
            onClick={() => handleClick("Collection")}
            src={
              selectedComponent === "Collection"
                ? selectedCollection
                : Collection
            }
            alt="icon"
          />
          <Image
            onClick={() => handleClick("Profile")}
            src={selectedComponent === "Profile" ? selectedProfile : Profile}
            alt="icon"
          />
          <Image
            onClick={() => handleClick("Settings")}
            src={Settings}
            alt="icon"
          />
        </div>
        <div id="logout">
          <Image src={Logout} alt="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
