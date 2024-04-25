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
  return (
    <main className={settingsContainer}>
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
      <div className="settings" id="selector">
        <div id="selected" className="selector--item">
          Profile
        </div>
        <div className="selector--item">Application</div>
        <div className="selector--item">Security</div>
        <div className="selector--item">Activity</div>
        <div className="selector--item">Payment Method</div>
        <div className="selector--item">API</div>
      </div>
    </main>
  );
};

export default Settings;
