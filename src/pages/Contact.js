import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

// prevent the default behavior
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header header="roomsHeader">
        <Banner title="contact us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Header>
      <section className="contact">
        <div className="contact-center">
          <h3 className="form-title">get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-input"
                placeholder="name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-input"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control form-input form-text-area"
                rows="4"
                placeholder="message"
              ></textarea>
            </div>
            <button type="submit" className="form-btn btn-primary">
              submit here
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
