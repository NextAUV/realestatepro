"use client";
import { useAuth } from "../../components/AuthProvider";
import PropertyCard from "../../components/PropertyCard";
import SearchBar from "../../components/SearchBar";
import FilterSidebar from "../../components/FilterSidebar";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: "$4,200,000",
    address: "123 Palm Drive, Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Modern Apartment in NYC",
    price: "$2,100,000",
    address: "456 Park Ave, New York, NY",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Cozy Cottage in Aspen",
    price: "$1,250,000",
    address: "789 Aspen Rd, Aspen, CO",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Beachfront Condo in Miami",
    price: "$1,800,000",
    address: "321 Ocean Dr, Miami, FL",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  },
];

export default function PropertiesPage() {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Please log in to view properties</h2>
        <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">Go to Login</Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full h-56 relative rounded-2xl overflow-hidden shadow-lg mb-8">
        <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80" alt="Properties Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-400/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">Explore Our Properties</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <FilterSidebar />
        </aside>
        <main className="flex-1">
          <SearchBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
} 