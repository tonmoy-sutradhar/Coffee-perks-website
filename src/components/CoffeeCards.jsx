import { useParams } from "react-router-dom";

const CoffeeCards = () => {
  const obj = useParams();
  console.log(obj.category);
  return (
    <div>
      <h1>Coffee cards.............{obj.category}</h1>
    </div>
  );
};

export default CoffeeCards;
