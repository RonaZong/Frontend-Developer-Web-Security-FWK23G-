import { useContext } from "react";
import ProfileProvider, {
  ProfileContext,
  ProfileDispatchContext,
} from "./Profile";

const Parent = () => {
  return (
    <ProfileProvider>
      <Child />
      <ChangeButton />
    </ProfileProvider>
  );
};

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const profile = useContext(ProfileContext);
  return <div>{profile}</div>;
}

function ChangeButton() {
  const setProfile = useContext(ProfileDispatchContext);
  return <button onClick={() => setProfile("Hannah")}>Change Name</button>;
}

export default Parent;