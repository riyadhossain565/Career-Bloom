import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, id, category, image, pricing, duration, counselor } =
    service || {};

  return (
    <div className="card shadow-lg p-4 rounded-lg">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{category}</p>
        <p className="font-bold">Price: {pricing}</p>
        <p>Duration: {duration}</p>
        <p>Counselor: {counselor}</p>
        <NavLink to={`/details/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105">
            Learn More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
