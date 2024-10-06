import React from 'react';
import './Landscape.css'; // Import your custom styles

const Landscape = () => {
  return (
    <div>
      {/* First Card */}
      <section className="container p-10 mx-auto">
        <div className="container mx-auto bg-card p-10 rounded-large flex flex-col justify-between" style={{ height: '400px' }}>
          <div>
            <p className="px-4 text-2xl text-white font-roboto">
              Widgets for Android phones, foldable devices, and tablets have a new look and feel.
            </p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mx-4 mt-4">Learn More</button>
        </div>
      </section>

      {/* Second Card */}
      <section className="container p-10 mx-auto">
        <div className="bg-gray-100 bg-card-b p-6 rounded-large flex flex-col justify-between" style={{ height: '400px' }}>
          <div>
            <p className="px-4 text-2xl text-white font-roboto">
              When choosing the right button for an action, consider the level of emphasis inherent to a button type.
            </p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mx-4 mt-4">Learn More</button>
        </div>
      </section>

      <section className="container p-10 mx-auto">
        <div className="container mx-auto bg-card p-10 rounded-large flex flex-col justify-between" style={{ height: '400px' }}>
          <div>
            <p className="px-4 text-2xl text-white font-roboto">
              Widgets for Android phones, foldable devices, and tablets have a new look and feel.
            </p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mx-4 mt-4">Learn More</button>
        </div>
      </section>

      <section className="container p-10 mx-auto">
        <div className="bg-gray-100 bg-card-b p-6 rounded-large flex flex-col justify-between" style={{ height: '400px' }}>
          <div>
            <p className="px-4 text-2xl text-white font-roboto">
              When choosing the right button for an action, consider the level of emphasis inherent to a button type.
            </p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mx-4 mt-4">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Landscape;
