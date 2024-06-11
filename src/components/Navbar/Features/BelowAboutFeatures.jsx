
import './BelowAboutFeatures.css'
import ImageCardio from './../../../images/cardio.jpg';
import ImageRun from "./../../../images/run.jpg";
import ImageTrainer from "./../../../images/trainer.jpg";

const BelowAboutFeatures = () => {
  return (
//     <section className='services'>
//         <div className="service">
//     <img src={ImageCardio} className='service__image' />
//     <h3 className="service__title">Cardio</h3></div>

//     <div className="service">
//     <img src={ImageRun} className='service__image' />
//     <h3 className="service__title">Personal Trainer</h3></div>

//     <div className="service">
//     <img src={ImageTrainer} className='service__image' />
//     <h3 className="service__title">Fitness Events</h3></div>


//   </section>
<section className="services">
  <div className="service-container">
    <div className="service">
      <img src={ImageCardio} className='service__image' alt="Cardio" />
      <h3 className="service-title">Cardio</h3>
    </div>

    <div className="service">
      <img src={ImageRun} className='service__image' alt="Personal Trainer" />
      <h3 className="service-title">Personal Trainer</h3>
    </div>

    <div className="service">
      <img src={ImageTrainer} className='service__image' alt="Fitness Events" />
      <h3 className="service-title">Fitness Events</h3>
    </div>
  </div>
</section>

  )
}
export default BelowAboutFeatures