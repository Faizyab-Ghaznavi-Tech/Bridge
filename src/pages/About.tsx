import React from 'react';
import { Target, Users, BookOpen, Lightbulb, Globe, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Evidence-Based Practice',
      description: 'We believe in the power of research-informed teaching to transform educational outcomes.',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      title: 'Collaborative Community',
      description: 'Building bridges between researchers, educators, and practitioners worldwide.',
      color: 'text-teal-600 dark:text-teal-400'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making quality educational research accessible to educators everywhere.',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Heart,
      title: 'Student-Centered',
      description: 'Every research initiative ultimately aims to improve student learning and success.',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-600 dark:bg-blue-500 rounded-2xl shadow-lg">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About BRIDGEB
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bringing Research In Direct Grasp of Educators - empowering the global educational community through accessible, impactful research.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  BRIDGEB was founded on the belief that quality education research should be accessible to every educator, regardless of their location or institutional affiliation. We recognized that there was a significant gap between the wealth of educational research being conducted and its practical application in classrooms worldwide.
                </p>
                <p>
                  Our platform serves as a bridge, connecting researchers with practitioners and creating a collaborative space where evidence-based practices can flourish. We're committed to democratizing access to educational research and fostering a global community of informed educators.
                </p>
                <p>
                  Every feature of BRIDGEB is designed with the end goal of improving student outcomes through better-informed teaching practices and educational policies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
                <Lightbulb className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation in Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transforming how educational research is shared, discovered, and applied in real-world teaching environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape the BRIDGEB community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gray-50 dark:bg-gray-700 mb-4 ${value.color}`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Since our launch, BRIDGEB has been making a real difference in educational communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-1">Active Educators</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">From K-12 to higher education</div>
            </div>
            <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">500+</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-1">Research Articles</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Covering diverse educational topics</div>
            </div>
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">50+</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-1">Countries</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Global research collaboration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            BRIDGEB is more than a platform—it's a movement of educators committed to evidence-based practice. Whether you're a classroom teacher, administrator, researcher, or policy maker, you have a place in our community.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              <Users className="h-5 w-5" />
              <span>Be Part of the Solution</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;