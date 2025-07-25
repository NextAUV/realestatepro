export default function FilterSidebar() {
  return (
    <aside className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 sticky top-24">
      <h3 className="text-lg font-bold mb-2 text-gray-800">Filters</h3>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-600 mb-1 font-medium">Price Range</label>
          <select className="w-full rounded-lg border-gray-200 shadow-sm px-3 py-2">
            <option>Any</option>
            <option>Under $1M</option>
            <option>$1M - $2M</option>
            <option>$2M - $5M</option>
            <option>Over $5M</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-1 font-medium">Property Type</label>
          <select className="w-full rounded-lg border-gray-200 shadow-sm px-3 py-2">
            <option>Any</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Condo</option>
            <option>Cottage</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-1 font-medium">Bedrooms</label>
          <select className="w-full rounded-lg border-gray-200 shadow-sm px-3 py-2">
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>
      </div>
    </aside>
  );
} 