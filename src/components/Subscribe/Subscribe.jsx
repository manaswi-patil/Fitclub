
import { Link } from 'react-router-dom';
const Subscribe = () => {
  return (
    <div id='Subscribe'>
      <form>
        <h1>Subscribe to Event</h1>

        <input placeholder="Your Email" />
        <button className="btn primary">Subscribe</button>
        <Link to="/Login">
          <button className="btn secondary"></button>
        </Link>


      </form>
    </div>
  )
}

export default Subscribe