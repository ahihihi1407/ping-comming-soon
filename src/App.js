import React, { useState } from 'react';
import Illustration from './images/illustration-dashboard.png';
import Logo from './images/logo.svg';
import './App.css';
import initFontAwesome from "./initFontAwesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


initFontAwesome();
function App() {
  const [mail, setMail] = useState("");
  const [valid, setValid] = useState();
  const [warning, showWarning] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setMail(value);
    var mailExpress = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    value.match(mailExpress) ? setValid(true, showWarning(false)) : setValid(false);
  }

  function handleSubmission() {
    valid ? alert(
      "Your email, " + mail + " was registered!",
      setMail("")
    ) : showWarning(true);
  }

  return (
    <div className="App">
      <img src={Logo} alt="logo" className="logo" />
      <div className="title">
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified </p>
      </div>
      <div className="mail-container">
        <input
          type="email"
          placeholder="Your email address...."
          onChange={handleChange}
          onKeyDown={(event) => event.key === "Enter" && handleSubmission}
          className={warning ? "warn-input" : ""}
        />
        <button type="submit"
          onClick={handleSubmission}
        >
          Notify me
        </button>
        {warning && <p className="mail-warning">Please provide a valid email address</p>}
      </div>
      <div className="image-container">
        <img src={Illustration} alt="illustration-dashboard" />
      </div>
      <div className="footer">
        <div className="social-icons">
          <div className="icon-frame">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="social-icon" />
          </div>
          <div className="icon-frame">
            <FontAwesomeIcon icon={['fab', 'facebook']} className="social-icon" />
          </div>
          <div className="icon-frame">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="social-icon" />
          </div>
        </div>
        <p> &copy; Copyright Ping. All rights reserved.</p>
      </div>
    </div >
  );
}

export default App;
