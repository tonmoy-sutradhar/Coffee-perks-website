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
  console.log(coffee);
  return (
    <div className="border-2 border-blue-500 rounded-lg">
      <h1>{id}</h1>
      <h1>{name}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
