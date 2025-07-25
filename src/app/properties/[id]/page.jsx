import Link from "next/link";

const mockProperty = {
  id: 1,
  title: "Luxury Villa in Beverly Hills",
  price: "$4,200,000",
  address: "123 Palm Drive, Beverly Hills, CA",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  description:
    "Experience luxury living in this stunning Beverly Hills villa featuring 5 bedrooms, 6 bathrooms, a private pool, and breathtaking city views. Modern amenities and exquisite finishes throughout.",
};

export default function PropertyDetailPage() {
  const property = mockProperty; // In real app, fetch by id
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-8 mt-8 border border-blue-100">
      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
        <img src={property.image} alt={property.title} className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 to-transparent p-6">
          <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">{property.title}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl text-blue-600 font-semibold">{property.price}</div>
        <div className="text-gray-500 text-md mb-4">{property.address}</div>
        <p className="text-gray-700 text-lg mb-6">{property.description}</p>
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg">Contact Agent</Link>
      </div>
    </div>
  );
} 