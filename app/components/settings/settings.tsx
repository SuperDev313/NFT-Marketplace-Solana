import Image from "next/image";

const Settings = ({ displayMode }: { displayMode: string }) => {
  let settingsContainer, userInfoClass, updateProfileClass, personalInfoClass;

  if (displayMode === "dark") {
    settingsContainer = "settings--container";
    userInfoClass = "user-info";
    updateProfileClass = "update-profile";
    personalInfoClass = "personal--info";
  } else {
    settingsContainer = "settings--container-lm";
    userInfoClass = "user-info-lm";
    updateProfileClass = "update-profile-lm";
    personalInfoClass = "personal--info-lm";
  }
  return <main className={settingsContainer}>
    <div className="page-header">
        <h4>Settings</h4>
        <div className="lable--container">
            <div>Welcome to your Settings</div>
            <div id="label">
                <div id="home"> Home</div>
                <div>{`>`}</div>
                <div id="collection"> Settings</div>
            </div>
        </div>
    </div>
  </main>;
};

export default Settings;
