import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const sendData = async (data) => {
    try {
      const res = await fetch("http://localhost:3030/atlas/get_in_touch", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        method: "POST",
      });
      const parsed_res = await res.json();
      console.log(parsed_res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    try {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const res = await sendData(data);
      console.log(res);
      form.reset();
    } catch (error) {
      console.log("Error sending data: " + error);
      form.reset();
    }
  };
  return (
    <form className="form" id="contact_us__form" onSubmit={handleSubmit}>
      <div className="top">Get in Touch With Us</div>
      <div className="formGroup">
        <label className="label">Email*</label>
        <input type="email" className="input" name="email" required />
      </div>
      <div className="formGroup">
        <label className="label">Full Name*</label>

        <input type="text" className="input" name="fullName" required />
      </div>
      <div className="formGroup">
        <label className="label">Subject</label>

        <input type="text" className="input" name="subject" required />
      </div>
      <div className="formGroup">
        <label className="label">How can we help you?</label>

        <textarea className="textarea" name="message" required />
      </div>
      <div className="formGroup">
        <label className="label">Budget for this project:</label>

        <input type="text" className="input" name="budget" required />
      </div>
      <div>
        <button type="submit" className="button">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
