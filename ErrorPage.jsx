import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Error Page</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-red-500 text-2xl">404 Page Not Found!!!</h2>
        <p className="text-xl mt-2">
          Go to{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </p>
      </div>
    </HelmetProvider>
  );
};

export default ErrorPage;
