import React from 'react';
import { 
  Heart, 
  Calendar, 
  Award, 
  Clock, 
  Phone, 
  Mail,
  MapPin,
  Instagram,
  Stethoscope,
  Baby,
  Activity
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-100 to-pink-50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Dr. Ananya Gadgotra
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                MBBS, AIIMS Jammu
                <br />
                Gynecologist & Fertility Specialist
              </p>
              <div className="flex gap-4">
                <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition flex items-center gap-2">
                  <Calendar size={20} />
                  Book Appointment
                </button>
                <button className="bg-white text-pink-500 px-6 py-3 rounded-full border-2 border-pink-500 hover:bg-pink-50 transition flex items-center gap-2">
                  <Phone size={20} />
                  Contact
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
                alt="Doctor's Office"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="text-pink-500" size={32} />,
                title: "PCOS Management",
                description: "Comprehensive care and treatment for Polycystic Ovary Syndrome"
              },
              {
                icon: <Baby className="text-pink-500" size={32} />,
                title: "Fertility Treatment",
                description: "Specialized fertility solutions and family planning services"
              },
              {
                icon: <Activity className="text-pink-500" size={32} />,
                title: "Women's Health",
                description: "Complete gynecological care and wellness services"
              }
            ].map((item, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-xl hover:shadow-lg transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education & Experience</h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <Award className="text-pink-500" size={32} />
              <div>
                <h3 className="text-xl font-semibold">MBBS</h3>
                <p className="text-gray-600">AIIMS Jammu</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Stethoscope className="text-pink-500" size={32} />
              <div>
                <h3 className="text-xl font-semibold">Gynecology Specialist</h3>
                <p className="text-gray-600">Fertility & PCOS Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="text-pink-500" size={24} />,
                title: "Phone",
                info: "+91 XXXXXXXXXX"
              },
              {
                icon: <Mail className="text-pink-500" size={24} />,
                title: "Email",
                info: "dr.ananya@example.com"
              },
              {
                icon: <MapPin className="text-pink-500" size={24} />,
                title: "Location",
                info: "Jammu, India"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2024 Dr. Ananya Gadgotra. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;