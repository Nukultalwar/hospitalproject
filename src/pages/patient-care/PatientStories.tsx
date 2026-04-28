import { UserIcon } from '@heroicons/react/24/outline';

const stories = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 45,
    treatment: 'Cardiac Surgery',
    image: '/images/patients/patient1.jpg',
    quote: 'The care I received was exceptional. The doctors and staff were not only professional but also compassionate.',
    department: 'Cardiology',
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 32,
    treatment: 'Sports Injury Recovery',
    image: '/images/patients/patient2.jpg',
    quote: 'Thanks to the orthopedics team, I was able to return to my athletic career stronger than ever.',
    department: 'Orthopedics',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    age: 28,
    treatment: 'Neurosurgery',
    image: '/images/patients/patient3.jpg',
    quote: "The neurology team's expertise and support helped me through a challenging time.",
    department: 'Neurology',
  },
];

export default function PatientStories() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-600 py-24 sm:py-32">
        <div className="container">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Patient Success Stories
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Real stories from real patients. Learn about their experiences
                and successful treatments at our hospital.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <UserIcon className="h-24 w-24 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-lg"
              >
                <div className="md:flex md:items-start md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center">
                      <UserIcon className="h-12 w-12 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Age: {story.age} | Treatment: {story.treatment}
                    </p>
                    <div className="mt-4 text-lg italic text-gray-600">
                      "{story.quote}"
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
                        {story.department}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Share Your Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have you been treated at our hospital? We'd love to hear about your experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="btn btn-primary"
              >
                Share Your Story
              </a>
              <a
                href="/book-appointment"
                className="btn btn-secondary"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 