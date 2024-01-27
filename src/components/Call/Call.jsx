import React from "react";
import "./Call.css";
import location from "/portfolio web/src/assets/location.png";
const Call = () => {
  return (
    <div className="contact">
      <div className="left">
        <img src={location} alt="" />
      </div>
      <div className="right">
        {" "}
        <div className="container">
          <h1>Contact Me</h1>
          <form
            action="https://fabform.io/f/{insert-form-id-here}"
            method="post"
          />
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
          <p className="my-4">
            If you prefer to contact us by{" "}
            <a href="mailto:abdulrafaydev100@gmail.com">Email</a>
            <br />
            <a
              className="text-blue-500 hover:underline w-64"
              href="https://www.linkedin.com/in/abdulrafaykhan-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
          ">
              linkdin profile
            </a>
          </p>
          <br />
          <p className="mt-4">
            Powered by Abdul Rafay
            <a
              href="https://fabform.io"
              target="_blank"
              className="text-blue-500 hover:underline"></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Call;
