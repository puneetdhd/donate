import React from 'react';
import { LuShirt, LuUtensils, LuDrum, LuBook } from "react-icons/lu";

const CauseItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 text-gray-700">
    <div className="p-4 border-2 border-gray-300 rounded-lg">
      {icon}
    </div>
    <span className="font-medium">{label}</span>
  </div>
);

const Causes = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Choose a cause</h2>
      <div className="flex justify-around items-center">
        <CauseItem icon={<LuUtensils size={30} />} label="Food" />
        <CauseItem icon={<LuShirt size={30} />} label="Clothes" />
        <CauseItem icon={<LuDrum size={30} />} label="Toys" />
        <CauseItem icon={<LuBook size={30} />} label="Books" />
      </div>
    </div>
  );
};

export default Causes;