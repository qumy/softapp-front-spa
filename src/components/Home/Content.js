import React from "react";
import Welcome from "./Welcome";
import Simple from "./Simple";
import WhyChooseUs from "./WhyChooseUs";
import Pricing from "./Pricing";
import Configurable from "./Configurable";
import Features from "./Features";
import WhatWeDo from "./WhatWeDo";
import Subscribe from "./Subscribe";

class Content extends React.Component {
  render() {
    return (
      <main className="page-content">
        {}
        <Welcome></Welcome>
        {}
        <Simple></Simple>
        {}
        <WhyChooseUs></WhyChooseUs>
        {}
        <Pricing></Pricing>
        {}
        <Configurable></Configurable>
        {}
        <Features></Features>
        {}
        <WhatWeDo></WhatWeDo>
        {}
        <Subscribe></Subscribe>
      </main>
    );
  }
}

export default Content;
