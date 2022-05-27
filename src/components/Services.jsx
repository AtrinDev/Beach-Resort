import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// services section data
const Services = () => {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
    },
  ]);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, index) => {
          const { icon, title, info } = service;
          return (
            <article key={index} className="service">
              <span>{icon}</span>
              <h6>{title}</h6>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

// export default class services extends Component {
//   state = {
//     services: [
//       {
//         icon: <FaCocktail />,
//         title: "free cocktails",
//         info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
//       },
//       {
//         icon: <FaHiking />,
//         title: "endless hiking",
//         info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
//       },
//       {
//         icon: <FaShuttleVan />,
//         title: "free shuttle",
//         info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
//       },
//       {
//         icon: <FaBeer />,
//         title: "strongest beer",
//         info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, odit!",
//       },
//     ],
//   };
//   render() {
//     return (
//       <section className="services">
//         <Title title="services" />
//         <div className="services-center">
//           {this.state.services.map((service, index) => {
//             return (
//               <article key={index} className="service">
//                 <span>{service.icon}</span>
//                 <h6>{service.title}</h6>
//                 <p>{service.info}</p>
//               </article>
//             );
//           })}
//         </div>
//       </section>
//     );
//   }
// }
