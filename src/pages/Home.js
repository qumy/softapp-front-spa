import React from "react";

import Header from "../components/Home/Header";
import Content from "../components/Home/Content";
import Footer from "../components/Home/Footer";
import Gallery from "../components/Home/Gallery";

const Home = () => {
  return (
    <>
      <div className="page">
        <Header />
        <Content />
        <Footer />
      </div>
      <Gallery />
    </>
  );
};

export default Home;
