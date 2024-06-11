import { useState } from 'react';
import img1 from './../../images/image1running.jpg';
import img2 from './../../images/image2swimming.jpg';
import img3 from './../../images/run.jpg';
import img4 from './../../images/image1running.jpg';
import img5 from './../../images/run.jpg';
import img6 from './../../images/image1running.jpg';
import './Event.css';
import Login from './../../components/Navbar/Login/Login';
const Event = () => {

  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const toggleSubscribe = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleCardsVisibility = () => {
    setIsCardsVisible(!isCardsVisible);
  };

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const eventCards = [
    {
      img: img1,
      title: 'Herbalife 24 Triathalon',
      description: 'Herbalife Nutrition is excited to announce the launch of the Herbalife 24 Triathalon.',
      price: '$35.00',
    },
    {
      img: img2,
      title: '4 *4 completition',
      description: 'Bring your friends and family',
      price: '$35.00',
    },
    {
      img: img3,
      title: '25 km run',
      description: 'Join us with experience',
      price: '$35.00',
    },
    {
      img: img4,
      title: 'Marathon Run',
      description: 'Be part of this amazing event',
      price: '$35.00',
    },
    {
      img: img5,
      title: '10 km Run',
      description: 'join us to play amazing games',
      price: '$35.00',
    },
    {
      img: img6,
      title: 'captains Camp',
      description: 'Join to be part of the team',
      price: '$35.00',
    },

  ];

  const selectedEvent = selectedCardIndex !== null ? eventCards[selectedCardIndex] : null;

  return (
    <div>
      <button className="event-button" onClick={toggleCardsVisibility}>
        Event
      </button>
      {isCardsVisible && (
        <div className="event-cards">
          {eventCards.map((card, index) => (
            <div
              className="event-card"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <strong>{card.price}</strong>
              <span>{card.sport}</span>
            </div>
          ))}
        </div>
      )}
      {selectedEvent && (
        <div className="selected-card">
          <img
            src={selectedEvent.img}
            alt={selectedEvent.title}
          />
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.description}</p>
          <form>
          <input placeholder="Your Email" /><br/>
        <button className="btn primary" onClick={toggleSubscribe}>Subscribe</button>
        
          {isRegisterOpen && <Login />}
          </form>
        </div>
      )}
    </div>

  );
};

export default Event;