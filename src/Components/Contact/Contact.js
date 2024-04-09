import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import "./Contact.css";
import InstagramLogo from "../Images/insta.png";
import FbLogo from "../Images/fb.png";
import Linkedin from "../Images/linkedin.png";
import Thread from "../Images/thread.png";
import Youtube from "../Images/youtube.jpg";
import WhatsApp from "../Images/whatsapp.png";

const Contact = () => {
  return (
    <Element className="Contact" id="Contact">
      <div className="Contact-Container">
        <div className="Contact-icons">
          <a
            href="https://www.linkedin.com/company/putfire/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <img src={Linkedin} className="Contact-Logo" alt="LinkedIn"></img>
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/putfireinnovations?igsh=MTI3YW85cGttNnBnaQ=="
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <img
                src={InstagramLogo}
                className="Contact-Logo"
                alt="Instagram"
              ></img>
            </IconButton>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <IconButton>
              <img src={FbLogo} className="Contact-Logo" alt="Facebook"></img>
            </IconButton>
          </a>

          <a
            href="https://www.threads.net/@putfireinnovations"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <img src={Thread} className="Contact-Logo" alt="Thread"></img>
            </IconButton>
          </a>
          <a
            href="https://www.threads.net/@putfireinnovations"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <img src={WhatsApp} className="Contact-Logo" alt="Thread"></img>
            </IconButton>
          </a>
          <a
            href="https://youtube.com/@PutFire_Innovations?si=0z12aWr82KfetuDh"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <img src={Youtube} className="Contact-Logo" alt="Youtube"></img>
            </IconButton>
          </a>
        </div>
        <div className="Terms">
          <a href="/" target="_blank">
            <h5>Terms & Condition</h5>
          </a>
          <div className="privacy">
            <a href="/" target="_blank">
              <h5>Privacy Policy</h5>
            </a>
          </div>
        </div>
        <div>
          <h2>PutFire</h2>
        </div>
        <div className="rights">
          <a href="/" target="_blank">
            <h6>©2024, PutFire Innovations. All Rights Reserved</h6>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
