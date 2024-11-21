import { Helmet } from "react-helmet";
import Services from "../Components/Services";
import Silder from "../Components/Silder";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | CareerBloom</title>
      </Helmet>
      <Silder></Silder>
      <Services></Services>
    </div>
  );
};

export default Home;
