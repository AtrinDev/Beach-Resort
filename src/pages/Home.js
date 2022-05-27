import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $300"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Header>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
