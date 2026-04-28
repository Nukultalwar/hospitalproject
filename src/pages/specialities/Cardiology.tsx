import { HeartIcon } from '@heroicons/react/24/outline';

const Cardiology = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cardiology Department
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert cardiac care with cutting-edge technology and experienced specialists. We provide comprehensive heart care services for all cardiac conditions.
            </p>
            <button className="btn btn-primary">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <HeartIcon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Cardiac Consultation?</h2>
          <p className="text-xl mb-8">
            Our team of expert cardiologists is here to help you maintain a healthy heart.
          </p>
          <button className="btn bg-white text-primary-600 hover:bg-gray-100">
            Schedule an Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: 'Cardiac Consultation',
    description: 'Comprehensive heart health evaluation and personalized treatment plans.',
  },
  {
    title: 'Heart Disease Treatment',
    description: 'Advanced treatment options for various heart conditions and diseases.',
  },
  {
    title: 'Interventional Cardiology',
    description: 'Minimally invasive procedures for heart disease treatment.',
  },
  {
    title: 'Cardiac Rehabilitation',
    description: 'Supervised programs to help patients recover from heart procedures.',
  },
  {
    title: 'Preventive Cardiology',
    description: 'Risk assessment and prevention strategies for heart disease.',
  },
  {
    title: 'Heart Rhythm Management',
    description: 'Diagnosis and treatment of heart rhythm disorders.',
  },
];

export default Cardiology; 