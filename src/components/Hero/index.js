import React from 'react';
import images from '../../Assets/website.jpg';

const Hero = () => {
  return (
    <div><section  className="text-gray-600 body-font mt-20">
    <div  className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div  className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1  className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Welcome to our vibrant and user-centric e-commerce website,
          <br  className="hidden lg:inline-block" />where shopping becomes a seamless and delightful experience. </h1>
        <p  className="mb-8 leading-relaxed mt-10">Our platform brings together an extensive collection of products, ranging from fashion to electronics, all designed to cater to your unique tastes and needs. Here's a glimpse of what our e-commerce website offers:</p>
        
      </div>
      <div  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img  className="object-cover object-center rounded" alt="hero" src={images}/>
      </div>
    </div>
  </section></div>
  )
}

export default Hero