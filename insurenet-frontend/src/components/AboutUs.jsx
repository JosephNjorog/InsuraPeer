import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold font-kanit text-gray-900">About <span className="text-custom-green">InSureNet</span></h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            At InSureNet, we are committed to revolutionizing insurance for small businesses and informal workers by providing transparent, community-driven solutions. Our platform empowers members to create shared insurance pools and manage claims effortlessly through smart contracts.
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:bg-custom-green hover:text-white transition duration-300">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600 hover:text-white">
              We aim to make insurance accessible and flexible, with a focus on transparency and community engagement. Our mission is to offer insurance products that are tailored to the needs of small businesses and informal workers.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:bg-custom-green hover:text-white transition duration-300">
            <h3 className="text-2xl font-bold mb-3">Our Values</h3>
            <p className="text-gray-600 hover:text-white">
              Community, trust, and flexibility form the core of our values. InSureNet fosters collaboration and empowers members to take control of their insurance decisions, ensuring a fair and transparent system.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:bg-custom-green hover:text-white transition duration-300">
            <h3 className="text-2xl font-bold mb-3">Why Choose Us?</h3>
            <p className="text-gray-600 hover:text-white">
              We combine the power of blockchain technology with a community-centric approach. By using smart contracts, we simplify insurance management and enable profit-sharing, making sure you get more value from your insurance pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
