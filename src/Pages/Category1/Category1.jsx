import React from 'react';
import './category1.css'; // Import the CSS file

const Category1 = () => {
  const features = [
    {
      id: 1,
      title: "Experience",
      description: "Crafting an effortless journey with user-first.",
      bgColor: "bg-orange-500",
      hoverColor: "hover:text-orange-500",
      imgUrl: "https://i.pinimg.com/736x/2b/74/7b/2b747b71b782a8833f2b3ad9b0e37cd1.jpg",
    },
    {
      id: 2,
      title: "Interaction",
      description: "Our platform is designed for simplicity and ease.",
      bgColor: "bg-indigo-400",
      hoverColor: "hover:text-indigo-400",
      imgUrl: "https://i.pinimg.com/564x/3c/c2/6c/3cc26c0140c2f0dc70d8aa48416c41dc.jpg",
    },
    {
      id: 3,
      title: "Design",
      description: "Our design philosophy centers around the user.",
      bgColor: "bg-cyan-400",
      hoverColor: "hover:text-cyan-400",
      imgUrl: "https://i.pinimg.com/564x/fa/4f/cf/fa4fcfd2db636f98eb0f2b5aecce0c28.jpg",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
        <div className="grid grid-cols-1 gap-2 mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-5xl mx-auto" role="list">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className={`mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group`}
              style={{ backgroundImage: `url(${feature.imgUrl})` }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className={`text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 ${feature.hoverColor}`}>
                    {String(index + 1).padStart(2, "0")}⏤ {feature.title}
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    {feature.description}
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
