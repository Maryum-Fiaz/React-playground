import React from 'react'
import { useLoaderData } from 'react-router'

export default function Github() {
  
    const data = useLoaderData();

  return (
  <div className="max-w-2xl mx-auto p-6 font-sans">
    {/* Heading on Top */}
    <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
      {data.name}'s Profile
    </h1>

    {/* Section divided into two parts */}
    <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      
      {/* Left Part: Bio and Followers */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold text-mauve-600 uppercase tracking-tight">
            About:
          </h3>
          <p className="text-gray-600 mt-2">
            {data.bio}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg inline-block md:block">
          <h1 className="text-lg font-bold text-gray-700">Followers:</h1>
          <span className="text-2xl font-mono text-mauve-500">{data.followers}</span>
        </div>
      </div>

      {/* Right Part: Avatar Image in Circle */}
      <div className="shrink-0">
        <div className="w-40 h-40 rounded-full border-4 border-mauve-200 overflow-hidden shadow-lg">
          <img 
            src={data.avatar_url} 
            alt="Maryum's Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </section>
  </div>
);
}


