import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const navigate = useNavigate();

  const data = useLoaderData();

  const obj = useParams();

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (obj.category) {
      const filterByCategory = [...data].filter(
        (coffee) => coffee.category === obj.category
      );
      setCoffees(filterByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [obj, data]);

  return (
    <>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/coffees")}>
        View All
      </button>
    </>
  );
};

export default CoffeeCards;
