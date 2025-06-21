import React from 'react';
import { BookOpen, Target, Heart, Users, Lightbulb, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BRIDGEB</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            "Bringing Research In Direct Grasp of Educators" - We're revolutionizing how educational research 
            is shared, discovered, and applied in classrooms worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                BRIDGEB was created to bridge the gap between educational research and classroom practice. 
                Too often, valuable research remains locked away in academic journals, never reaching 
                the educators who could benefit most from these insights.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that every educator should have direct access to cutting-edge research, 
                and every researcher should have a platform to share their work with practitioners 
                who can implement it in real-world settings.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To create a world where educational research and practice are seamlessly connected, 
                enabling evidence-based teaching that improves learning outcomes for all students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do at BRIDGEB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every piece of research goes through rigorous peer review to ensure 
                only high-quality, actionable content reaches our community.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Community Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're built by educators, for educators. Our platform reflects the 
                real needs and challenges of the educational community.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously evolve our platform with cutting-edge features 
                that make research sharing more effective and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How BRIDGEB Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A simple, transparent process that connects researchers with educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Submit Research
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Educators and researchers submit their work using our intuitive rich text editor 
                with support for multimedia content.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Peer Review
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our expert panel reviews submissions for quality, relevance, and practical 
                applicability before publication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Share & Discover
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Approved research is published for the global education community to 
                discover, implement, and build upon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Global Impact
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            BRIDGEB is more than just a platform - it's a movement towards evidence-based education 
            that transcends geographical boundaries and connects educators worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Educators Connected</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Research Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;