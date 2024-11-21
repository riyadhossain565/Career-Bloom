import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const data = useLoaderData();

  return (
    <div className="my-10 w-5/6 mx-auto pb-12">
      <h3 className="text-2xl font-bold text-center uppercase">Our Services</h3>
      <h1 className="text-4xl font-bold text-center my-2">
        Empower Your Career Journey <br /> for Greater Success
      </h1>
      <div className="my-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((service) => (
            <ServiceCard service={service} key={service.id}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
