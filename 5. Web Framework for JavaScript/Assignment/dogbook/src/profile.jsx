import { useParams } from "react-router-dom";

function Profile({ dogs }) {
  const id = Number(useParams().id);
  const dog = dogs.find((dog) => dog.id === id);
  
  return (
    <div>
      <h1>Dog Profile</h1>
      <p>{dog.name}</p>
    </div>
  );
}
