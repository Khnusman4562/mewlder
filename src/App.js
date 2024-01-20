import '../src/components/comp_css/App.css';
import Navbar from "./components/Common/Navbar"; // Note the change in component name and capitalization
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// this is form 
import Form from "./components/form/Form";
import RepairingForm from './components/form/RepairingForm';
import QuoteForm from './components/form/QuoteForm';

// this is home 
import Home from "./components/Home/Home";
import ServicesArea from './components/Home/ServicesArea';
import MyCarousel from './components/Home/MyCarousel';
// this is common 
import MobileFooter from "./components/Common/MobileFooter";
import Footerbelow from './components/Common/Footerbelow';
import AboutUs from './components/Common/AboutUs';
import ErrorPage from './components/Common/ErrorPage';
import ScrollToTop from './components/Common/ScrollToTop';
// services 
import IronGateFabrication from './components/services/IronGateFabrication ';
import GrillFabrication from './components/services/GrillFabrication';
import ShutterFabrication from './components/services/ShutterFabrication';
import RoofingShedFabrication from './components/services/RoofingShedFabrication';
import StairFabrication from './components/services/StairFabrication';
import RailingFabrication from './components/services/RailingFabrication';
import MoreService from './components/services/MoreService';

// this is all repairng components 
import ShutterRepairing from './components/dynamic_servicesc/All-component/ShutterRepairing';
import FormComponent from './components/dynamic_servicesc/FormComponent';


// review 
import ReviewComponent from './components/Review/ReviewComponent';
// import TestimonialPage from './components/Review/TestimonialPage';

// privecy 
import Disclaimer from './components/privecy_disclaimer/Disclaimer';
import Priveciy from './components/privecy_disclaimer/Priveciy';





function App() {
  return (

    <div className="App">
      <BrowserRouter >
        <ScrollToTop />
        <Navbar />
        <MyCarousel />
        <Routes>

          <Route exact path='/' element={<Home />} />
          {/* this is form page  */}
          <Route exact path='/contact' element={<Form />} />
          <Route exact path='/repairing' element={<RepairingForm />} />
          <Route exact path='/Review' element={<ReviewComponent />} />
          <Route exact path='/quote' element={<QuoteForm />} />
          {/* this is services page  */}
          <Route exact path='/serviceArea' element={<ServicesArea />} />
          <Route exact path='/gate' element={<IronGateFabrication />} />
          <Route exact path='/grill' element={<GrillFabrication />} />
          <Route exact path='/shutter' element={<ShutterFabrication />} />
          <Route exact path='/shed' element={<RoofingShedFabrication />} />
          <Route exact path='/stair' element={<StairFabrication />} />
          <Route exact path='/Railing' element={<RailingFabrication />} />
          <Route exact path='/MoreService' element={<MoreService />} />


          {/* this is repairing all components */}
          <Route exact path='/Repairing_work' element={<ShutterRepairing />} />
          <Route exact path='/form/:service/:option/:price' element={<FormComponent />} />

          <Route exact path='/Aboutus' element={<AboutUs />} />
          {/* this is testimonila page only readable not dynamic  */}
          {/* <Route exact path='/testimonial' element={<TestimonialPage />} /> */}
          <Route exact path='/Disclaimer' element={<Disclaimer />} />
          <Route exact path='/Priveciy' element={<Priveciy />} />
          {/* common page component are here  */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
        <Footerbelow />
        <MobileFooter />

      </BrowserRouter>
    </div>
  );
}

export default App;
