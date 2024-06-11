import aboutImg from '../../../images/aboutus.jpg';
import "./Aboutus.css";
import BelowAboutFeatures from './../../../components/Navbar/Features/BelowAboutFeatures';
const AboutUs = () => {
  return (
    <div id='AboutUs'>
     <div className="containerabout">
       <div className="about__img">
       <img src={aboutImg} alt="About Us Image" />
      </div>
      <div className="about__content">
        <header className="about__header">
          <h1 style={{ fontSize: "3rem" }}>About <span>Us</span> </h1>
          <p className="text-justify">
            Then indeed, the time was appropriate for the vehicle to move forward, not backwards, but the opportunity was in vain. The vehicle's movement was intense and produced smoke. The time had come to move the vehicle backwards but instead, the opportunity was in vain. The vehicle's movement was intense and produced smoke.
         </p>
        </header> 
       
      </div>
     </div>
     <BelowAboutFeatures/>
     </div>
     
  );
};
export default AboutUs;