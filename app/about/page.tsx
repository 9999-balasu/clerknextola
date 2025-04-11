'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold text-green-400 drop-shadow-lg">About YokRide</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          YokRide is a modern ride-booking platform developed as a passion project by a free online student from
          <span className="text-green-300 font-semibold"> SVGIE</span>, under the guidance and inspiration of <span className="text-green-400 font-semibold">Rghu Sir</span>.
        </p>

        <div className="bg-gray-800 rounded-2xl p-6 md:p-10 shadow-xl text-left space-y-6">
          <h2 className="text-3xl font-bold text-green-400">🎓 Who We Are</h2>
          <p className="text-gray-300">
            As an SVGIE learner utilizing free online resources, I’ve created this project to demonstrate the power of
            dedication, community learning, and mentorship. YokRide is a tribute to self-learning and to the valuable
            support of educators like Raghu Sir.
          </p>

          <h2 className="text-3xl font-bold text-green-400">🚀 Mission</h2>
          <p className="text-gray-300">
            Our mission is to make everyday transportation easy and accessible, starting with student communities
            and expanding to cities with innovative ride solutions.
          </p>

          <h2 className="text-3xl font-bold text-green-400">🛠️ Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Next.js & TypeScript</li>
            <li>Tailwind CSS for beautiful styling</li>
            <li>MongoDB & Clerk for database and auth</li>
            <li>Real-time features with maps & live tracking</li>
          </ul>
        </div>

        <Link href="/" className="inline-block mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-xl text-white font-semibold text-lg shadow-md">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
