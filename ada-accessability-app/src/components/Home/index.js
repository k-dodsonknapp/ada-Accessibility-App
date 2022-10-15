import "../../App.css";
import './home.css'
import { CiViewList } from "react-icons/ci";
import { GiWhiteBook } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";



const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className="hero-wrapper">
        <div className='hero-message'>
          <h1>
            To be healthy as a whole, Your mental health plays a very vital role.
          </h1>
          <button className="CTA-btn">Call to action</button>
        </div>
        <div className="img-wrapper">
          <img className='hero-image' src="https://thedoahnewspaper.files.wordpress.com/2022/05/download-3.jpeg"></img>
        </div>
      </div>
      <div className="features-wrapper">
        <h2>Our Features</h2>
        <div className="features-type">
          <div className='feature-content'>
            <CiViewList />
            <h3>Track</h3>
          </div>
          <div className='feature-content'>
            <h3>Learn</h3>
            <GiWhiteBook />
          </div>
          <div className='feature-content'>
            <h3>Connect</h3>
            <IoIosPeople />
          </div>
        </div>
      </div>
      <div className="testimonials-wrapper">

      </div>
    </div>

  )
};

export default Home;