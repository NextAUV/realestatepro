import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-blue-100">
      <div className="relative w-full h-48">
        <img src={property.image} alt={property.title} className="object-cover w-full h-full" />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold text-blue-800">{property.title}</h3>
        <div className="text-blue-700 font-semibold text-md">{property.price}</div>
        <div className="text-gray-500 text-sm mb-4">{property.address}</div>
        <Link href={`/properties/${property.id}`} className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center font-medium">View Details</Link>
      </div>
    </div>
  );
} 