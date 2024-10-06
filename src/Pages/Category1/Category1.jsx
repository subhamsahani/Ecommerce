import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./category1.css";

import img1 from "../../Components/Assets/product card1.jpg";
import img2 from "../../Components/Assets/product card2.jpg";
import img3 from "../../Components/Assets/product card3.jpg";
import img4 from "../../Components/Assets/product card4.jpg"; // Add the fourth image

// Component
const Category1 = () => {
  const features = [
    {
      id: 1,
      title: "Abstract",
      description: "Crafting an effortless journey with user-first.",
      imgUrl: img1,
      hoverColor: "text-orange-500", // Color on hover for the title
      link: "/painting/abstract", // Link to the Abstract page
    },
    {
      id: 2,
      title: "Landscape",
      description: "Our platform is designed for simplicity and ease.",
      imgUrl: img2,
      hoverColor: "text-indigo-400", // Color on hover for the title
      link: "/painting/landscape", // Link to the Abstract page
    },
    {
      id: 3,
      title: "Portrait",
      description: "Our design philosophy centers around the user.",
      imgUrl: img3,
      hoverColor: "text-cyan-400", // Color on hover for the title
      link: "/painting/portrait", // Link to the Abstract page
    },
    {
      id: 4, // New fourth card
      title: "Still Life",
      description: "Pioneering the future with groundbreaking ideas.",
      imgUrl: img4,
      hoverColor: "text-green-400", // Color on hover for the title
      link: "/painting/stilllife", // Link to the Abstract page
    },
  ];

  return (
    <section>
      <div className="max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 mt-8 list-none md:grid-cols-2 lg:grid-cols-4 mx-auto" role="list">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="shadow-xl bg-cover bg-center min-h-150 relative border-4 border-black transform duration-500 hover:-translate-y-12 group w-[350px] mx-auto"
              style={{ backgroundImage: `url(${feature.imgUrl})` }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300" style={{ opacity: 0.7 }}>
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1
                    className={`text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:${feature.hoverColor}`}
                  >
                    {feature.title}
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    {feature.description}
                    <Link
                      to={feature.link}
                      className="inline-flex items-center border border-white px-3 py-1.5 rounded-md text-white hover:bg-transparent group-hover:opacity-80 transition-opacity duration-500 mt-4"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <span className="mr-1 text-lg">Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category1;
