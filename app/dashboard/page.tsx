// app/dashboard/page.tsx




/*import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth(); // Ensure auth is really a callable function
  if (!userId) return redirect("/sign-in");

  return <div>Welcome to your dashboard!</div>;
}*/




import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center transform transition-all duration-500 hover:scale-105">
        <div className="flex justify-center mb-6">
          {/* Inline SVG Car Icon */}
          <svg
            className="w-20 h-20 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path d="M22 11h-1V7a3 3 0 00-3-3H6A3 3 0 003 7v4H2a1 1 0 000 2h1v5a3 3 0 003 3h1a3 3 0 003-3v-1h8v1a3 3 0 003 3h1a3 3 0 003-3v-5h1a1 1 0 100-2zm-16-4a1 1 0 011-1h10a1 1 0 011 1v4H6V7zm11 11a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10v1z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to your Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We're glad to have you back!
        </p>
        {/* Example stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-800">Stat 1</h2>
            <p className="text-blue-700">Value 1</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-green-800">Stat 2</h2>
            <p className="text-green-700">Value 2</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-purple-800">Stat 3</h2>
            <p className="text-purple-700">Value 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

