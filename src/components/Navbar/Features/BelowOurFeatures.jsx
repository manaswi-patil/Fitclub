
import ImageTrainer from './../../../images/testimonials.jpg';
import './BelowOurFeatures.css';
const BelowOurFeatures = () => {
  return (
    <div>
      <div className="below-img-container" style={{ backgroundImage: `url(${ImageTrainer})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="description" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', padding: '5px', fontSize: '30px', textAlign: 'center', whiteSpace: 'nowrap' }}>
          It is not just a club, FitClub is part of my life. I love my FitClub.<br />
          - Lausa Fronson
        </div>
      </div>
    </div>
  );
};

export default BelowOurFeatures;