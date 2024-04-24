import Edit from "./edit";

const Profile = ({ dog, setPage }) => {
  // const address = API.get("https://dog.ceo/api/breeds/image/random");
  // console.log(address)
  return (
    <div className="d-flex">
      {dog}
      <img src={`https://robohash.org/${dog}?set=set4`} alt={dog} />
      {/* <img src={`https://dog.ceo/api/breeds/image/random`.message} alt={dog} /> */}
      <ul className="no-bullets">
        <li>Name: {dog.name}</li>
        <button onClick={() => setPage({ Edit })}>edit</button>
        <li>Nick: </li>
        <li>Age: </li>
        <li>Bio: </li>
        <li>Friend: </li>
        <li>
          <input type="checkbox" id="Present" name="Present" />
          <label for="Present">Present</label>
        </li>
      </ul>
      <button onClick={() => setPage("Start")}>Go to users</button>
    </div>
  );
};

export default Profile;
