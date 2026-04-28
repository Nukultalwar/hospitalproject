import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Emergency = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <ExclamationTriangleIcon className="w-12 h-12 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Emergency Services
              </h1>
            </div>
            <p className="text-xl text-gray-700 mb-8">
              24/7 emergency care with state-of-the-art facilities and experienced medical professionals. We're here when you need us most.
            </p>
            <div className="flex gap-4">
              <a href="tel:911" className="btn bg-red-600 text-white hover:bg-red-700">
                Call Emergency: 911
              </a>
              <button className="btn btn-primary">
                View Wait Times
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <ExclamationTriangleIcon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Emergency Contacts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Emergency Room</h3>
                <p className="text-lg mb-4">Available 24/7</p>
                <a href="tel:911" className="text-2xl font-bold hover:text-red-100">
                  911
                </a>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Poison Control</h3>
                <p className="text-lg mb-4">24-Hour Hotline</p>
                <a href="tel:1-800-222-1222" className="text-2xl font-bold hover:text-red-100">
                  1-800-222-1222
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: 'Trauma Care',
    description: 'Immediate treatment for severe injuries and life-threatening conditions.',
  },
  {
    title: 'Stroke Care',
    description: 'Rapid response and treatment for stroke patients.',
  },
  {
    title: 'Cardiac Emergency',
    description: 'Immediate care for heart attacks and other cardiac emergencies.',
  },
  {
    title: 'Critical Care',
    description: 'Advanced life support and monitoring for critically ill patients.',
  },
  {
    title: 'Pediatric Emergency',
    description: 'Specialized emergency care for children.',
  },
  {
    title: 'Disaster Response',
    description: 'Coordinated response to major incidents and disasters.',
  },
];

export default Emergency; 