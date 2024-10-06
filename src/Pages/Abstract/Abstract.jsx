import React from 'react';
import './Abstract.css'; // Add styles for any customizations
import Masonry from 'react-masonry-css';

const Abstract = () => {
  // Static data for each image card
  const galleryItems = [
    { id: 1, title: "Abstract Art 1", price: "$100", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
    { id: 2, title: "Abstract Art 2", price: "$120", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
    { id: 3, title: "Abstract Art 3", price: "$90", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" },
    { id: 4, title: "Abstract Art 4", price: "$110", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
    { id: 5, title: "Abstract Art 5", price: "$130", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
    { id: 6, title: "Abstract Art 6", price: "$140", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" },
    { id: 7, title: "Abstract Art 7", price: "$80", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
    { id: 8, title: "Abstract Art 8", price: "$150", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
    { id: 9, title: "Abstract Art 9", price: "$95", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" },
    { id: 10, title: "Abstract Art 10", price: "$85", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
    { id: 11, title: "Abstract Art 11", price: "$70", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
    { id: 12, title: "Abstract Art 12", price: "$160", imgSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" },
  ];

  // Breakpoints for responsive masonry columns
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="gallery-container p-5">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="card overflow-hidden shadow-lg p-4 flex flex-col justify-between"
          >
            <img
              className="w-full object-cover rounded-lg"
              src={item.imgSrc}
              alt={item.title}
            />
            <div className="card-content text-center mt-4 flex-grow">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.price}</p>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Abstract;
