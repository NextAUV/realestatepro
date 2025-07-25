export default function SearchBar() {
  return (
    <form className="flex items-center gap-2 bg-white rounded-xl shadow px-4 py-2 w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search by location, keyword..."
        className="flex-1 bg-transparent outline-none px-2 py-2 text-gray-700 text-base"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
      >
        Search
      </button>
    </form>
  );
} 