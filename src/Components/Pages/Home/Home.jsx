import { Helmet } from 'react-helmet-async'
import Carousels from './Carousels'
import TabsActiviticsHeading from './TabsActiviticsHeading'
import SocialWorksHome from './SocialWorksHome'
import Map from './Map'
import MapHeading from './MapHeading'
import FutureMission from './FutureMission'
import Contact from '../../Contact/Contact'



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>হাফেজপাড়া জনকল্যাণ সংস্থা</title>
      </Helmet>
      <Carousels></Carousels>
      <SocialWorksHome></SocialWorksHome>
      <TabsActiviticsHeading></TabsActiviticsHeading>
      <FutureMission></FutureMission>
      <MapHeading></MapHeading>
      <Map></Map>
      <Contact></Contact>
      
      
    </div>
  )
}

export default Home