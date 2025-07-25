export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 flex flex-col gap-8">
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-4">About RealEstatePro</h1>
        <p className="text-gray-700 text-lg mb-4">
          RealEstatePro is a leading real estate brokerage dedicated to helping you find your dream home. With years of experience and a passion for excellence, we connect buyers and sellers with the best properties nationwide.
        </p>
        <p className="text-gray-600">
          Our mission is to provide a seamless, transparent, and enjoyable real estate experience for every client.
        </p>
      </section>
      <section>
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Our Team" className="w-full max-w-md mx-auto rounded-xl shadow mb-6 object-cover" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Team</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <li className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full mb-2" />
            <div className="font-semibold text-blue-700">Alex Morgan</div>
            <div className="text-gray-500 text-sm">Founder & CEO</div>
          </li>
          <li className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full mb-2" />
            <div className="font-semibold text-blue-700">Jamie Lee</div>
            <div className="text-gray-500 text-sm">Lead Broker</div>
          </li>
        </ul>
      </section>
    </div>
  );
} 