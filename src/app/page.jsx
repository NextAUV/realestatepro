import PropertyCard from "../components/PropertyCard";

export default function Home() {
  // Mock featured properties
  const featured = [
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
  ];
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center gap-6 py-12 relative bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Dream Home" className="w-full h-full object-cover opacity-60 blur-sm" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Dream Home" className="w-full max-w-2xl rounded-2xl shadow-lg mb-6 object-cover border-4 border-white" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-2 drop-shadow-xl bg-white/90 px-4 py-2 rounded-lg shadow-lg">Find Your Dream Home</h1>
          <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mb-6 bg-white/90 rounded-lg px-4 py-2 shadow-lg">Browse luxury properties, modern apartments, and cozy homes across the country. Your perfect property is just a click away.</p>
          <a href="/properties" className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-10 py-4 rounded-full shadow-xl hover:from-blue-700 hover:to-blue-500 transition font-bold text-lg border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-300">Browse Properties</a>
        </div>
      </section>
      {/* Featured Properties */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
