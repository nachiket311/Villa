import React, { useState } from "react";

export default function ContactForm() {
  const [formdata, setFormdata] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormdata(formdata);
    console.log(formdata);
    setFormdata({ Name: "", Email: "", Subject: "", Message: "" });
  };

  return (
    <div className="form-container">
      <div className="form">
        <form>
          <p className="input-heading">Full Name</p>
          <input
            type="text"
            className="field"
            placeholder="Your Name..."
            name="Name"
            value={formdata.Name}
            onChange={handlechange}
          />
          <p className="input-heading">Email Address</p>
          <input
            type="Email"
            className="field"
            placeholder="Your Email..."
            name="Email"
            value={formdata.Email}
            onChange={handlechange}
          />
          <p className="input-heading">Subject</p>
          <input
            type="text"
            className="field"
            placeholder="Subject..."
            name="Subject"
            value={formdata.Subject}
            onChange={handlechange}
          />
          <p className="input-heading">Message</p>
          <textarea
            type="text"
            className="textarea"
            placeholder="Your Message..."
            name="Message"
            value={formdata.Message}
            onChange={handlechange}
          />
          <button
            className="form-button"
            disabled={
              formdata.Name === "" ||
              formdata.Email === "" ||
              formdata.Subject === "" ||
              formdata.Message === ""
            }
            type="Submit"
            onClick={handlesubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
