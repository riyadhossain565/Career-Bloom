import { useLoaderData } from "react-router-dom";

const Services = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-4">
      <h3 className="text-2xl font-bold text-center uppercase">Our Services</h3>
      <h1 className="text-4xl font-bold text-center my-2">
        Empower Your Career Journey <br /> for Greater Success
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4"></div>
    </div>
  );
};

export default Services;
