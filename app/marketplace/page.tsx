"use client";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";
import Bid from "./components/bid/bid";
import Collection from "./components/collection/collection";
import Profile from "./components/profile/profile";
import Settings from "./components/settings/settings";

import { NextPage } from "next";
import { useEffect, useState } from "react";

type nftData = any[] | null;

const Marketplace: NextPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const [displayMode, setDisplayMode] = useState("dark");
  const [data, setData] = useState<nftData>(null);

  return (
    <div className={containerClass}>
      <Sidebar
        selectedComponent={selectedComponent}
        changeComponent={setSelectedComponent}
        displayMode={displayMode}
      >
        <div className="container">
          <Header displayMode={displayMode} setDisplayMode={setDisplayMode}>
            {selectedComponent === "Dashboard" && (
              <Dashboard displayMode={displayMode} data={data} />
            )}
            {selectedComponent === "Bid" && <Bid displayMode={displayMode} />}
            {selectedComponent === "Collection" && (
              <Collection displayMode={displayMode} />
            )}
            {selectedComponent === "Profile" && (
              <Profile displayMode={displayMode} />
            )}
            {selectedComponent === "Settings" && (
              <Settings displayMode={displayMode} />
            )}
          </Header>
        </div>
      </Sidebar>
    </div>
  );
};

export default Marketplace;
