import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const data = useLoaderData();
  // console.log(data);
  const obj = useParams();

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const filterByCategory = [...data].filter(
      (coffee) => coffee.category === obj.category
    );
    setCoffees(filterByCategory);
  }, [obj, data]);

  return (
    <div className="grid gap-3 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
  );
};

export default CoffeeCards;
