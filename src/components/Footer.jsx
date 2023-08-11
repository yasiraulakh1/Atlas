import React from "react";
import "./Footer.css";

function Footer({ onOpen }) {
  return (
    <div className="footer_main_container">
      <div className="Footer">
        <div className="uper">
          <p>
            Gain a competitive edge with our latest AI breakthroughs and updates
            - all in a 5 minute email. Our AI experts sift through the clutter,
            honing in on the news that truly matters.
          </p>
        </div>
        <button className="newsletter_button" onClick={onOpen}>
          Join Our newsletter
        </button>
      </div>
      <div className="border"></div>

      <div className="last_foot">
        <div className="left">
          <p>About Atlas AI</p>
          <p className="shadow">We just. Do</p>
        </div>
        <div className="right">
          <div>
            <p>
              <a href="#">Company</a>
            </p>
            <p className="shadow">
              <a href="#">About</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Help</a>
            </p>
            <p className="shadow">
              <a href="mailto:contact@atlasco.ai">Contact Us</a>
            </p>
            
          </div>
          <div>
            <p>
              <a href="#">Resources</a>
            </p>
            <p className="shadow make_pointer" onClick={onOpen}>
              Join Our newsletter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
