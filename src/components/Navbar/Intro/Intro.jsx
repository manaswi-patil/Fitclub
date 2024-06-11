import gym from '../../../images/bg_header.jpg';
import './Intro.css';
import Navbar from './../../../components/Navbar/Header/Navbar';
import Events from './../../../components/Events/Event'
const Intro = () => {
  return (
    <>
      <div className='intro' style={{ backgroundImage: `url(${gym})` }}>
        <Navbar />
        <div className="hero-grid">
          <b>Fit<span>Club</span></b>
          <h1 className="hero-text">
            JOIN THE BEST <br />
            <span> FITNESS CLUB</span>
          </h1>
          <h3 className="text">
            <span>Challenge</span> your limits
          </h3>
          <p className="texts">
            New events every week! Challenge yourself, your mind,<br /> your family and
            friends. Get to know us in the button <br />below
          </p>
          <div />
          <Events />
        </div>
      </div>
    </>
  )
}





export default Intro;