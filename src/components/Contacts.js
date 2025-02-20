import React from "react";
import { FaPhone, FaEnvelope, FaFutbol } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="contact-section">
      <div className="container2">
        <div className="title">
          <button className="contact-button">CONTACTS</button> 
        </div>
        <div className="contacts">
          <div className="contact-card">
            <FaPhone className="icon phone-icon" />
            <div className="label">Phone</div>
            <div className="value">01001056741</div>
          </div>
          <div className="contact-card">
            <FaEnvelope className="icon email-icon" />
            <div className="label">E-mail</div>
            <div className="value">facebook@example.com</div>
          </div>
          <div className="contact-card">
            <FaFutbol className="icon practice-icon" />
            <div className="label">Practice</div>
            <div className="value">Madrid FC</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
