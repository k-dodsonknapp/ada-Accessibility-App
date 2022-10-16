import "../../App.css";
import './home.css'
import { NavLink } from 'react-router-dom';
import { CiViewList } from "react-icons/ci";
import { GiWhiteBook } from "react-icons/gi";
import { IoIosPeople, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className="hero-wrapper">
        <div className="hero-message">
          <h1>
            To be healthy as a whole, Your mental health plays a very vital
            role.
          </h1>
          <button className="CTA-btn">Call to action</button>
        </div>
        <div className="img-wrapper">
          <img className='hero-image' src="https://thedoahnewspaper.files.wordpress.com/2022/05/download-3.jpeg" alt=""></img>
        </div>
      </div>
      <div className="features-wrapper">
        <h2>OUR FEATURES</h2>
        <div className="features-type">
          <div className='feature-content'>
            <CiViewList className="feature-icon" />
            <h3>Track</h3>
            <p>Personalized journal, record, mood, track symptoms, spot patterns, gain insights</p>
            <NavLink to=''>Learn More</NavLink>
          </div>
          <div className='feature-content'>
            <GiWhiteBook className="learn-icon" />
            <h3>Learn</h3>
            <p>Personalized resources, mental health education, support for marginalized groups</p>
            <NavLink id='learn-link' to=''>Learn More</NavLink>
          </div>
          <div className='feature-content'>
            <IoIosPeople className="feature-icon" />
            <h3>Connect</h3>
            <p>Build community, share progress, lead discussions, better together</p>
            <NavLink to=''>Learn More</NavLink>
          </div>
        </div>
      </div>
      <div className="testimonials-wrapper">
        <h2>WHAT PEOPLE ARE SAYING</h2>
        <div className="testimonials-content">
        <IoIosArrowBack className="arrow-back"/>
          <div className="user-story">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id diam sit amet nisl tincidunt blandit.” </p>
            <h4 className="name"><span className="name-span"><FaRegUserCircle/></span> Emily</h4>
          </div>
          <div className="user-story">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id diam sit amet nisl tincidunt blandit.” </p>
            <h4 className="name"><span className="name-span"><FaRegUserCircle/></span> George</h4>
          </div>
          <div className="user-story">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id diam sit amet nisl tincidunt blandit.” </p>
            <h4 className="name"><span className="name-span"><FaRegUserCircle/></span> Ana</h4>
          </div>
        <IoIosArrowForward style={{color: "#002627"}} className="arrow-forward"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
