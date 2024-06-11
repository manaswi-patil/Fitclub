import "./Features.css";
import calendario from './../../../../src/assets/calendario.svg'
import ducha from "./../../../../src/assets/ducha.svg"
import pesa from "./../../../../src/assets/pesa.svg"
import salud from "./../../../../src/assets/salud.svg"
import BelowOurFeatures from "./../../../components/Navbar/Features/BelowOurFeatures";
import ReadOur from "./../../../components/Navbar/Features/ReadOur";
const Features = () => {
  return (
    <div>
      <section id="Features" className="container m-3 center">
        <h1 className="title">Our Features</h1>
        <div className="features">
          {[
            { img: calendario, alt: "FitClub events", title: "COOL EVENTS" },
            { img: salud, alt: "Medical Attention FitClub", title: "MEDICAL ATTENTION" },
            { img: pesa, alt: "FitClub Equipment", title: "EQUIPMENT" },
            { img: ducha, alt: "FitClub Showers", title: "FREE SHOWERS" },
          ].map((feature, index) => (
            <div key={index} className="feature">
              <img className="feature__img" src={feature.img} alt={feature.alt} />
              <h4>{feature.title}</h4>
            </div>
          ))}
        </div>

      </section>
      <BelowOurFeatures />
      <ReadOur />
    </div>
  );
};

export default Features;