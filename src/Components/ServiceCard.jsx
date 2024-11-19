const ServiceCard = ({ service }) => {
  // const { name } = service || {};

  return (
    <div className="card shadow-lg p-4 rounded-lg">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{service.name}</h3>
        <p className="text-gray-600">{service.category}</p>
        <p className="font-bold">Price: {service.pricing}</p>
        <p>Duration: {service.duration}</p>
        <p>Counselor: {service.counselor}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
