import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  return (
    <div>
      <h1>coffee details {id}</h1>
    </div>
  );
};

export default CoffeeDetails;
