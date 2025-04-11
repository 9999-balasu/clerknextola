'use client';

import { useState } from 'react';

const areasByLetter: Record<string, string[]> = {
  A: ['Ameerpet', 'Adikmet', 'Amberpet', 'Alwal'],
  B: ['Banjara Hills', 'Begumpet', 'Bachupally', 'Bowenpally'],
  C: ['Chikkadpally', 'Charminar', 'Chandanagar', 'Champapet'],
  D: ['Dilsukhnagar', 'Domalguda', 'Dabeerpura'],
  E: ['ECIL', 'Erragadda'],
  F: ['Falaknuma'],
  G: ['Gachibowli', 'Gowliguda'],
  H: ['Hafeezpet', 'Himayatnagar', 'Habsiguda'],
  J: ['Jubilee Hills', 'Jeedimetla'],
  K: ['Kukatpally', 'Kompally', 'Khairatabad'],
  L: ['Lakdikapul', 'Lalapet'],
  M: ['Mehdipatnam', 'Malkajgiri', 'Miyapur'],
  N: ['Nagole', 'Nampally', 'Nanakramguda'],
  P: ['Panjagutta', 'Patancheru'],
  R: ['Rajendra Nagar', 'Ramgopalpet'],
  S: ['Secunderabad', 'Sanathnagar', 'Safilguda'],
  T: ['Tarnaka', 'Tolichowki'],
  U: ['Uppal'],
  V: ['Vidyanagar'],
  Y: ['Yousufguda', 'Yapral'],
};

const allAreas = Object.entries(areasByLetter).flatMap(([letter, areas]) =>
  areas.map(area => ({ letter, name: area }))
);

export default function AreasPage() {
  const [search, setSearch] = useState('');
  const [jumpLetter, setJumpLetter] = useState('');

  const filteredAreas = allAreas.filter(area =>
    area.name.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filteredAreas.reduce<Record<string, string[]>>((acc, { letter, name }) => {
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(name);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-400 text-center mb-8">Hyderabad Areas</h1>

        {/* Search + Dropdown */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search area..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 rounded-xl text-black text-lg shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <select
            onChange={(e) => {
              setJumpLetter(e.target.value);
              const section = document.getElementById(e.target.value);
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full md:w-1/3 px-4 py-2 bg-gray-800 border border-gray-600 rounded-xl text-white text-lg"
          >
            <option value="">Jump to Letter</option>
            {Object.keys(areasByLetter).sort().map((letter) => (
              <option key={letter} value={letter}>
                {letter}
              </option>
            ))}
          </select>
        </div>

        {/* Display Grouped Areas */}
        {Object.keys(grouped)
          .sort()
          .map((letter) => (
            <div key={letter} id={letter} className="mb-10">
              <h2 className="text-2xl font-bold text-green-300 mb-3">{letter}</h2>
              <div className="flex flex-wrap gap-3">
                {grouped[letter].map((area) => (
                  <span
                    key={area}
                    className="bg-gray-700 px-4 py-2 rounded-full text-white text-sm font-medium shadow"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
