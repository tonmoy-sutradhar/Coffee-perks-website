import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  const {
    name,
    image,
    id,
    category,
    description,
    ingredients,
    making_process,
    nutrition_info,
    origin,
    popularity,
    rating,
    type,
  } = coffee || {};
  // console.log(coffee);

  return (
    <div className="border-2 border-blue-500 rounded-lg  ">
      <Link to="/coffee/:id">
        <figure>
          <img className="w-full h-48 overflow-hidden" src={image} alt="" />
        </figure>
      </Link>

      <div className="p-4 ">
        <h1 className="text-xl">Name: {name}</h1>
        <p>Category: {category}</p>
        <p>Type: {type}</p>
        <p>Origin: {origin}</p>
        <p>Rating: {rating}</p>
        <p>Popular: {popularity}</p>
      </div>
    </div>
  );
};

export default Card;
