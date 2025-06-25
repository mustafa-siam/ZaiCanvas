import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const Herosection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.postimg.cc/BQDTfTBX/Hybrid-Homepage.jpg"
          className="w-[60%] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Find Art You Love</h1>

          <Fade delay={600} cascade damping={0.1}>
            <p className="py-6 text-lg">
              "ZaiCanvas", we make it our mission to help you discover and buy from the best emerging artists around the world. Whether you are looking to discover a new artist, add a statement piece to your home, or commemorate an important life event, ZaiCanvas is your portal to thousands of original works by today's top artists.
            </p>
          </Fade>

          <button className="btn btn-primary">
            <Link to={"/allitems"}>See All Item</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
