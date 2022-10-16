import "../../App.css";
import { NavLink } from 'react-router-dom'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2>Got questions? We're here to help.</h2>
      <p>Checkout out our <NavLink to='/resources'>Resources</NavLink> for some quick answers. If you need additional help please fill out the form below or give us a call at <span>800-123-4567</span></p>
      <div className="form-wrapper">

        <form className="contact-form">
          <label>Name</label>
          <input></input>
          <label>Email</label>
          <input></input>
          <label>Type of contact</label>
          <input></input>
          <label>Message</label>
          <textarea></textarea>

          <div className="btn-div">
            <button typeof="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="crisis-contact">
        <h3>If you are having a medical emergency, please contact:</h3>
        <div className="contact=address">
          <div className="contact">
            <h4>Suicide Hotline:</h4>
            <a href="https://988lifeline.org/">https://988lifeline.org/</a>
          </div>
          <div className="contact">
            <h4>Crisis Text-Line:</h4>
            <a href='https://www.crisistextline.org/'>https://www.crisistextline.org/</a>
          </div>
          <div className="contact">
            <h4>Crisis Hotline:</h4>
            <a href='https://www.apa.org/topics/crisis-hotlines'>https://www.apa.org/topics/crisis-hotlines</a>
          </div>
        </div>
        {/* <h4>Suicide Hotline: <Link></Link></h4> */}
      </div>
    </div>
  );
};

export default Contact;
