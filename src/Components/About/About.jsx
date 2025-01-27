import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12">
            <img
              className="w-full"
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Startup Image"
            />
          </div>
          <div className="md:w-7/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="text-gray-600">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
