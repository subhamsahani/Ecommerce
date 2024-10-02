import React from "react";
import "./category1.css";

import img1 from "../../Components/Assets/product card1.jpg";
import img2 from "../../Components/Assets/product card2.jpg";
import img3 from "../../Components/Assets/product card3.jpg";
import img4 from "../../Components/Assets/product card4.jpg";
import headingImg from "../../Components/Assets/product heading2.jpg"; 
const Category1 = () => {
  const features = [
    {
      id: 1,
      title: "Create",
      description: "Crafting an effortless journey with user-first.",
      imgUrl: img1,
    },
    {
      id: 2,
      title: "Experience",
      description: "Crafting an effortless journey with user-first.",
      imgUrl: img2,
    },
    {
      id: 3,
      title: "Interaction",
      description: "Our platform is designed for simplicity and ease.",
      imgUrl: img3,
    },
    {
      id: 4,
      title: "Design",
      description: "Our design philosophy centers around the user.",
      imgUrl: img4,
    },
  ];

  return (
    <section className="bg-white h-screen w-screen">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center h-full">
        {/* Heading for the Products with image inside the text */}
        <h1 className="text-7xl font-bold text-left text-transparent bg-clip-text bg-center bg-no-repeat" style={{ backgroundImage: `url(${headingImg})` }}>
          Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full h-full" role="list">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className="mx-auto shadow-xl relative border-2 border-black rounded-xl transform duration-500 hover:-translate-y-12 group h-[32rem]"
            >
              {/* Use image as background without dimming */}
              <div
                className="bg-cover bg-center relative h-full flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-100 rounded-xl"
                style={{ backgroundImage: `url(${feature.imgUrl})` }}
              >
                <div className="relative z-20">
                  <h1
                    className={`text-white text-xl mb-2 transform uppercase duration-300 group-hover:text-violet-500`}
                  >
                    {String(index + 1).padStart(2, "00")}⏤ {feature.title}
                  </h1>
                  <p className="opacity-100 text-white text-xl duration-500 group-hover:text-green-600">
                    {feature.description}
                  </p>
                  {/* Updated Button with new style */}
                  <button className="mt-4 px-4 py-2 bg-[rgb(255,213,0)] text-black rounded-md border border-[#7a7a7a] font-medium text-lg transition-all duration-100 shadow-[0_5px_1px_5px_rgb(255,255,255)] active:translate-y-1 active:shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                    Explore
                  </button>
                </div>
              </div>

              {/* Remove overlay for dimming effect */}
              <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-0 transition-opacity duration-500 rounded-xl"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category1;
