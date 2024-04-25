import "./settings.css"
import pfp from "../header/images/Avatar.svg"

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
      <div className="user-update--container">
        <div className="user--container">
          <h4 id="label">User profile</h4>
          <div className={userInfoClass}>
            <div>
              <div>Full name</div>
              <input />
              <div className="pfp-container">
                <Image src={pfp} alt="pfp" />
                <div id="user">
                  <h5>Jane Doe</h5>
                  <div>Welcome to the settings page</div>
                </div>
              </div>
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="profile--container">
          <h4 id="label">Update profile</h4>
          <div className={updateProfileClass}>
            <div>
              <div>Email</div>
              <input />
              <div>Password</div>
              <input />
            </div>
            <button>Save</button>
          </div>
        </div>
      </div>
      <div className={personalInfoClass}>
        <h4>Personal Information</h4>
        <div className="info--container">
          <div id="info">
            <div>Info</div>
            <input />
          </div>
          <div id="info">
            <div>Info</div>
            <input />
          </div>
          <div id="info">
            <div>Info</div>
            <input />
          </div>
          <div id="info">
            <div>Info</div>
            <input />
          </div>
          <div id="info">
            <div>Info</div>
            <input />
          </div>
          <div id="info">
            <div>Info</div>
            <input />
          </div>

          <button>Save</button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
