import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Header header="roomsHeader">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Header>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
