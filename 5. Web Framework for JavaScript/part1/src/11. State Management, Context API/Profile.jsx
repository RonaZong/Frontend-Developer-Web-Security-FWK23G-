import { createContext, useState } from "react";

const ProfileContext = createContext();
const ProfileDispatchContext = createContext();

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState("");

  return (
    <ProfileContext.Provider value={profile}>
      <ProfileDispatchContext.Provider value={setProfile}>
        {children}
      </ProfileDispatchContext.Provider>
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
export { ProfileContext, ProfileDispatchContext };