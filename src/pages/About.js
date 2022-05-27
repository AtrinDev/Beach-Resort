import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header header="roomsHeader">
        <Banner title="about us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Header>
      <section className="about">
        <div className="about-center">
          <div className="about-me-info">
            <p className="about-me-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              ipsa dignissimos recusandae cupiditate odio tempora? Molestias
              deleniti a laudantium praesentium eos modi placeat perspiciatis
              itaque, maxime eligendi! Nam neque, eos quia dolore quam, odit sit
              culpa reprehenderit aliquid animi dolores enim officiis aut
              explicabo. Itaque, dicta quidem. Fuga culpa dignissimos rem, et
              quasi incidunt voluptas iste animi nulla. Amet at adipisci cumque
              minus? Inventore expedita ut accusamus quam aut sed harum
              voluptatum, suscipit veritatis corporis, repellat quas cum
              repudiandae fugiat modi voluptates quisquam distinctio magni
              aperiam incidunt qui aspernatur. Impedit animi quos libero?
              Accusantium beatae reprehenderit architecto quisquam iure quia.
            </p>
          </div>
        </div>
        <div className="contact-btn">
          <Link to="/contact" className="btn-primary">
            contact us
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
