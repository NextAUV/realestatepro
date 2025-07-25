import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white/95 rounded-2xl shadow-lg p-8 mt-8 flex flex-col gap-8">
      <section className="bg-white/90 rounded-xl p-6 shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 drop-shadow">Contact Us</h1>
        <p className="text-gray-900 text-lg mb-6">Have questions or want to schedule a viewing? Fill out the form below and our team will get back to you soon.</p>
        <ContactForm />
      </section>
      <section className="mt-8 bg-white/90 rounded-xl p-6 shadow-md">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Our Office" className="w-full max-w-md mx-auto rounded-xl shadow mb-4 object-cover" />
        <h2 className="text-xl font-bold text-blue-800 mb-2 drop-shadow">Our Office</h2>
        <div className="text-gray-800">123 Palm Drive, Beverly Hills, CA</div>
        <div className="text-gray-800">Phone: (555) 123-4567</div>
        <div className="text-gray-800">Email: info@realestatepro.com</div>
      </section>
    </div>
  );
} 