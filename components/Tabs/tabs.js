import React from "react";
// import { ReactComponent as Bag } from "./assets/bag.svg";
// import { ReactComponent as Plane } from "./assets/plane.svg";
// import { ReactComponent as Calendar } from "./assets/calendar.svg";
// import { ReactComponent as House } from "./assets/house.svg";
import TabContent from "./TabContent";

// Configure our tabs and tab content here
const tabs = [
  {
    title: "Flights",
    id: "flights",
    // icon: <Plane />,
    color: "#fff",
    content: TabContent
  },
  {
    title: "Hotels",
    id: "hotels",
    // icon: <House />,
    color: "#fff",
    content: TabContent
  },
  {
    title: "Reservations",
    id: "reservations",
    // icon: <Calendar />,
    color: "#fff",
    content: TabContent
  },
  {
    title: "Offers",
    id: "offers",
    // icon: <Bag />,
    color: "#f56868",
    content: TabContent
  }
];

export default tabs;
