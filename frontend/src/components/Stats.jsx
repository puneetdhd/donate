import React from 'react';

const StatCard = ({ image, stat, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
    <img src={image} alt={description} className="w-full h-48 object-cover filter grayscale" />
    <div className="p-4">
      <p className="text-2xl font-bold text-orange-500">{stat}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const Stats = () => {
  return (
    <div className="bg-white p-6 mt-8">
       <h2 className="text-2xl font-bold text-center mb-6">Why donate ?</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StatCard 
            image="/food-plate.png" 
            stat="19 crore +" 
            description="Indians go to bed hungry each night" 
          />
          <StatCard 
            image="/child-playing.png" 
            stat="5 crore +" 
            description="Children do not have access to toys" 
          />
          <StatCard 
            image="/cloths.png" 
            stat="15 crore +" 
            description="Indians lack adequate clothing" 
          />
       </div>
    </div>
  );
};

export default Stats;