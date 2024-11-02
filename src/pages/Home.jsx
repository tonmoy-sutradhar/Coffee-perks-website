import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      {/* <h1 className="text-3xl">Home </h1> */}

      {/* Banner */}
      <Banner></Banner>

      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subTitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your test."
        }
      ></Heading>

      {/* Categories tab section */}
      <Categories categories={data}></Categories>
      {/* Dynamic Nested Component */}
    </div>
  );
};

export default Home;
