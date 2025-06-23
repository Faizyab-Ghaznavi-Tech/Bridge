import React from 'react';
import { BookOpen, Users, Target, Heart, Lightbulb, Globe, FileText } from 'lucide-react';
import Footer from '../components/Footer';

const domains = [
  "Education Technology",
  "Curriculum Development",
  "Teaching Methods",
  "Student Assessment",
  "Educational Psychology",
  "Special Education",
  "Higher Education",
  "Early Childhood Education",
  "Other"
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-white/10 to-teal-300/20 dark:from-blue-900/40 dark:via-gray-900/10 dark:to-teal-900/30 animate-gradient-move" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-tr from-blue-500 via-blue-400 to-teal-400 dark:from-blue-700 dark:to-teal-600 rounded-2xl shadow-2xl animate-fade-in-up">
              <BookOpen className="h-16 w-16 text-white drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-500 to-indigo-600 dark:from-blue-300 dark:via-teal-300 dark:to-indigo-400 mb-4 animate-fade-in-up">
            About BRIDGEB
          </h1>
          <span className="block text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mt-2 mb-6 animate-fade-in-up delay-100">
            Empowering Teachers. Elevating Research.
          </span>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            BRIDGEB (Bringing Research In Direct Grasp of Educators) is a semi-annual, open-access online journal dedicated to bridging the gap between educational research and classroom practice. The journal presents summarized academic research and reflective narratives in a clear, accessible format designed for Pre-K through 12th-grade educators.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded by Dr. Denise McDonald and supported by the University of Houston–Clear Lake and Texas A&M University, BRIDGEB has two core missions:
              </p>
              <ul className="text-lg text-gray-700 dark:text-gray-200 mb-6 list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Provide teachers</span> with practical, research-based insights they can apply immediately.
                </li>
                <li>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Give graduate students</span> in education a platform to develop and showcase their scholarly writing through supervised publication.
                </li>
              </ul>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you're seeking to enhance your classroom strategies or take your first step into academic publishing, BRIDGEB is here to support your journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 via-white to-teal-100 dark:from-blue-900 dark:via-gray-800 dark:to-teal-900 rounded-2xl p-10 shadow-xl animate-fade-in-up delay-100">
              <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-center">
                To create a world where educational research and practice are seamlessly connected, enabling evidence-based teaching that improves learning outcomes for all students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              What We Publish
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
              We welcome content from a wide range of educational domains, including:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
            {domains.map((domain, idx) => (
              <span
                key={domain}
                className={`inline-flex items-center px-5 py-2 rounded-full font-medium bg-gradient-to-r ${
                  idx % 3 === 0
                    ? 'from-blue-500 to-blue-700 text-white'
                    : idx % 3 === 1
                    ? 'from-blue-300 to-blue-500 text-blue-900'
                    : 'from-blue-100 to-blue-300 text-blue-800 dark:text-blue-800'
                } shadow-md transition-transform duration-300 hover:scale-105`}
              >
                <FileText className="w-4 h-4 mr-2" />
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
              These principles guide everything we do at BRIDGEB.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 shadow-xl animate-fade-in-up">
              <Heart className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality First
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Every piece of research goes through rigorous peer review to ensure only high-quality, actionable content reaches our community.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-200 dark:from-blue-800 dark:to-blue-600 shadow-xl animate-fade-in-up delay-100">
              <Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Community Driven
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                We're built by educators, for educators. Our platform reflects the real needs and challenges of the educational community.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-500 shadow-xl animate-fade-in-up delay-200">
              <Lightbulb className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                We continuously evolve our platform with cutting-edge features that make research sharing more effective and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How BRIDGEB Works Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
              How BRIDGEB Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
              A simple, transparent process that connects researchers with educators
            </p>
          </div>
          <ol className="space-y-12 max-w-3xl mx-auto">
            <li className="flex items-start gap-6 animate-fade-in-up">
              <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg">
                1
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Submit Research
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Educators and researchers submit their work using our intuitive rich text editor with support for multimedia content.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-6 animate-fade-in-up delay-100">
              <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-2xl font-bold shadow-lg">
                2
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Peer Review
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Our expert panel reviews submissions for quality, relevance, and practical applicability before publication.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-6 animate-fade-in-up delay-200">
              <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white text-2xl font-bold shadow-lg">
                3
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Share &amp; Discover
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Approved research is published for the global education community to discover, implement, and build upon.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-blue-900 dark:text-white transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-tr from-blue-200/40 via-white/40 to-teal-200/40 rounded-full shadow-2xl animate-fade-in-up">
              <Globe className="w-16 h-16 text-blue-600 dark:text-blue-200 drop-shadow-lg" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Global Impact
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            BRIDGEB is more than just a platform—it's a movement towards evidence-based education that transcends geographical boundaries and connects educators worldwide.
            <br />
            <span className="block mt-4 text-base text-blue-800 dark:text-blue-200">
              Our ever-growing community is dedicated to sharing practical research, fostering collaboration, and inspiring innovation in classrooms across the globe.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="text-4xl font-extrabold text-blue-700 dark:text-blue-200 mb-2 drop-shadow-lg">1000+</div>
              <div className="text-blue-900 dark:text-blue-100 text-lg font-medium">Educators Connected</div>
              <p className="text-blue-700 dark:text-blue-200 mt-2 text-sm">Collaborating and learning together</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <div className="text-4xl font-extrabold text-blue-700 dark:text-blue-200 mb-2 drop-shadow-lg">500+</div>
              <div className="text-blue-900 dark:text-blue-100 text-lg font-medium">Research Articles</div>
              <p className="text-blue-700 dark:text-blue-200 mt-2 text-sm">Accessible, actionable, and peer-reviewed</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <div className="text-4xl font-extrabold text-blue-700 dark:text-blue-200 mb-2 drop-shadow-lg">50+</div>
              <div className="text-blue-900 dark:text-blue-100 text-lg font-medium">Countries Reached</div>
              <p className="text-blue-700 dark:text-blue-200 mt-2 text-sm">A truly global educational community</p>
            </div>
          </div>
          <div className="mt-12 animate-fade-in-up delay-300">
            <p className="text-lg text-blue-800 dark:text-blue-100">
              Ready to join a vibrant, supportive network of educators and researchers? <br />
              <span className="font-semibold">BRIDGEB welcomes you to contribute, collaborate, and grow with us.</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
          }
          .delay-100 { animation-delay: .1s; }
          .delay-200 { animation-delay: .2s; }
          .delay-300 { animation-delay: .3s; }
          .delay-400 { animation-delay: .4s; }
          .animate-gradient-move {
            background-size: 400% 400%;
            animation: gradient-move 12s ease infinite;
          }
          @keyframes gradient-move {
            0%,100% {background-position:0% 50%}
            50% {background-position:100% 50%}
          }
        `}
      </style>
    </div>
  );
};

export default About;