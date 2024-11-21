import { Helmet } from "react-helmet";
import Services from "../Components/Services";
import Silder from "../Components/Silder";
import Testimonials from "../Components/Testimonials";
import CallOfAction from "../Components/CallOfAction";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | CareerBloom</title>
      </Helmet>
      <Silder></Silder>
      <Services></Services>
      <Testimonials></Testimonials>
      <CallOfAction></CallOfAction>
    </div>
  );
};

export default Home;
