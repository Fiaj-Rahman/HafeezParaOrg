import { Helmet } from 'react-helmet-async';
import Carousels from './Carousels';
import SocialWorksHome from './SocialWorksHome';
import Map from './Map';
import MapHeading from './MapHeading';
import FutureMission from './FutureMission';
import Contact from '../../Contact/Contact';
import OurActivities from './OurActivities';
import Founder from './Founder';

const Home = () => {
  // https://hafeez-para-server-site.vercel.app

  return (
    <div>
      <Helmet>
        <title>হাফেজপাড়া জনকল্যাণ সংস্থা</title>
      </Helmet>
      <Carousels />
      <SocialWorksHome />
      <OurActivities />
      <MapHeading />
      <Map />
      <FutureMission />
      <Founder></Founder>
      <Contact />
    </div>
  );
};

export default Home;
