import React, { Fragment } from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import Tasty from "../img/tasty.png";
import HeroBg2 from "../img/heroBg_2.png";
import Dedicated from "../img/dedicated.png";
import {Link} from 'react-router-dom'

const HomeContainer = () => {
  return (
    <Fragment>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ease-in mt-16"
        id="Home"
      >
        <div className="py-2 flex-1 flex items-center relative mr-1">
          <img
            src={HeroBg}
            className=" ml-auto h-420 w-full lg:w-auto lg:h-650" 
            alt="hero-bg"
          />
          <div className="-m-8 w-full h-full absolute top-0 left-50 flex items-center justify-center">
            <img
              src={Tasty}
              className="w-25 lg:w-45 -mt-20 lg:-mt-20 "
              alt="I1"
            />
          </div>
        </div>

        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 mr-8 ml-3">
          <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
            All Incredients smell
            <div className="text-red-600 text-[3rem] lg:text-[5rem]">
               Like ur Ex
            </div>
          </p>

          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
            eaque fugit distinctio est nam voluptatum architecto, porro iusto
            deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
            suscipit!
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      >
        <div className="py-2 flex-1 flex flex-col items-end justify-center gap-6 ml-8">

          <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor text-right">
            Time is taken<br/>Effort goes
            <div className="text-red-600 text-[3rem] lg:text-[4rem]">
              Quality Comes
            </div>
          </p>

          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
            eaque fugit distinctio est nam voluptatum architecto, porro iusto
            deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
            suscipit!
          </p>
        </div>

        <div className="py-2 flex-1 flex items-center relative ml-1">
          <img
            src={HeroBg2}
            className=" mr-auto h-420 w-full lg:w-auto lg:h-650"
            alt="hero-bg"
          />
          <div className=" w-full h-full absolute  flex items-end justify-center">
            <img
              src={Dedicated}
              className="w-25 lg:w-45 -mt-20 lg:-mt-20 "
              alt="I1"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full mt-16 mb-8">
        <p className="text-base text-orange-500 font-semibold">
          Bike Delivery
        </p>
        <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
          <img
            src={Delivery}
            className="w-full h-full object-contain"
            alt="delivery"
          />
        </div>
      </div>
      <button
        type="button"
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        <Link to={'/menu'}>
        Order Now
        </Link>
      </button>
    </Fragment>
  );
};

export default HomeContainer;