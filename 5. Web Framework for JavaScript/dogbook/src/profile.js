import {useParams} from "react-router-dom";

const Profile = ({ dogs }) => {
  const id = Number(useParams().id);
  const dog = dogs.find((dog) => dog.id === id);

  return (
    <div className="d-flex">
      {/* <img src={`https://robohash.org/${dog}?set=set4`} alt={dog} /> */}
      <img src={`https://dog.ceo/api/breeds/image/random`} alt={dog} />
      <ul className="no-bullets">
        <li>Name: {dog.name}</li>
        {/* <button onClick={() => setPage("Edit")}>edit</button> */}
        <li>Nick: {dog.nick}</li>
        <li>Age: {dog.age}</li>
        <li>Bio: {dog.bio}</li>
        <li>Friend: {dog.friend}</li>
      </ul>
      <ul className="no-bullets">
        <li>
          <input type="checkbox" id="Present" name="Present" />
          <label for="Present">Present</label>
        </li>
      </ul>
      {/* <button onClick={() => setPage("Start")}>Go to users</button> */}
    </div>
  );
};

export default Profile;
