"use client";

import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";
import Bid from "./components/bid/bid";
import Collection from "./components/collection/collection";
import Profile from "./components/profile/profile";
import Settings from "./components/settings/settings";

import { useState, useEffect } from "react";
import { NextPage } from "next";

type nftData = any[] | null;

const Marketplace: NextPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const [displayMode, setDisplayMode] = useState("dark");
  const [data, setData] = useState<nftData>(null);

  useEffect(() => {
    //fetch nft data from API route
    const fetchNfts = async () => {
      const res = await fetch("/api/nftData");
      const data = await res.json();
      setData(data.data);
    };

    fetchNfts().catch(console.error);
  }, []);

  let containerClass;
  if (displayMode === "dark") {
    containerClass = "App";
  } else {
    containerClass = "App-lm";
  }

  return (
    <div className={containerClass}>
      <Sidebar
        selectedComponent={selectedComponent}
        changeComponent={setSelectedComponent}
        displayMode={displayMode}
      />
      <div className="container">
        <Header displayMode={displayMode} setDisplayMode={setDisplayMode} />
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
      </div>
    </div>
  );
};

export default Marketplace;
