import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, ArrowRight, Search, PenTool, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const features = [
	{
		icon: PenTool,
		title: 'Submit Manuscript',
		description: 'Share your educational research with a global community of educators and researchers.',
	},
	{
		icon: Search,
		title: 'Discover Articles',
		description: 'Explore cutting-edge research from educators around the world to enhance your practice.',
	},
	{
		icon: Users,
		title: 'Connect & Collaborate',
		description: 'Build networks with fellow educators and researchers to advance educational excellence.',
	},
	{
		icon: Globe,
		title: 'Global Impact',
		description: 'Contribute to the worldwide effort to improve education through evidence-based research.',
	},
];

const cardGradients = [
	'from-blue-500 to-blue-700',
	'from-blue-400 to-blue-600',
	'from-blue-300 to-blue-500',
	'from-blue-200 to-blue-400',
];

// --- Add scroll reveal hook ---
function useScrollReveal(className = 'reveal-on-scroll', animationClass = 'animate-popup') {
    useEffect(() => {
        const elements = document.querySelectorAll(`.${className}`);
        const onScroll = () => {
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 80) {
                    el.classList.add(animationClass);
                }
            });
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [className, animationClass]);
}
// --- End scroll reveal hook ---

const Home: React.FC = () => {
    useScrollReveal(); // Keep this for scroll popup animation

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-white/10 to-teal-300/20 dark:from-blue-900/40 dark:via-gray-900/10 dark:to-teal-900/30 animate-gradient-move" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <div className="p-4 bg-gradient-to-tr from-blue-500 via-blue-400 to-teal-400 dark:from-blue-700 dark:to-teal-600 rounded-2xl shadow-2xl animate-fade-in-up">
                                <BookOpen className="h-14 w-14 text-white drop-shadow-lg" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-500 to-indigo-600 dark:from-blue-300 dark:via-teal-300 dark:to-indigo-400 mb-4 animate-fade-in-up">
                            BRIDGE
                        </h1>
                        <span className="block text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mt-2 mb-6 animate-fade-in-up delay-100">
                            Bringing Research In Direct Grasp of Educators
                        </span>

                        <div className="mb-10 max-w-3xl mx-auto reveal-on-scroll opacity-0">
                            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg px-6 py-7">
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed text-center">
                                    <span className="font-semibold text-blue-700 dark:text-blue-300">BRIDGE</span> is a semi-annual practitioner journal dedicated to making educational research accessible and actionable for Pre-K–12th grade teachers.
                                    <br className="hidden md:block" />
                                    We summarize research from all content areas and specializations, ensuring that every teacher can find practical strategies and insights to enhance classroom instruction and management.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
                            <Link
                                to="/articles"
                                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-teal-600 transition-all duration-300 group"
                            >
                                <Search className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
                                Explore Research
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/register"
                                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg hover:scale-105 hover:from-teal-500 hover:to-blue-700 transition-all duration-300 group"
                            >
                                <PenTool className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
                                Submit your Manuscript
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
            <span className="block text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mt-2 mb-6 animate-fade-in-up delay-100">
							Why Choose BRIDGE?
						</span>
			
						<div className="mb-10 max-w-3xl mx-auto reveal-on-scroll opacity-0">
							<div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg px-6 py-7">
								<p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed text-center">
									Our platform is designed specifically for educators seeking to{' '}
									<span className="font-semibold text-blue-700 dark:text-blue-300">
										bridge the gap between research and classroom practice
									</span>
									.
									<br className="hidden md:block" />
									The purpose of the journal is to deliver research-based strategies
									directly to teachers, focusing on enhancing pedagogy and student
									learning.
									<br className="hidden md:block" />
									It serves as a vehicle for disseminating findings from various
									researchers and domains, ensuring that valuable educational insights
									are{' '}
									<span className="font-semibold text-blue-700 dark:text-blue-300">
										freely accessible
									</span>{' '}
									to educators across all schooling environments.
								</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, idx) => (
							<div
								key={feature.title}
								className={`group p-8 rounded-2xl shadow-xl bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} hover:scale-105 hover:shadow-2xl transition-all duration-300 reveal-on-scroll opacity-0 delay-${
									(idx + 1) * 100
								}`}
							>
								<div className="flex items-center justify-center mb-4">
									<div className="p-4 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-lg group-hover:rotate-6 transition-transform duration-300">
										<feature.icon className="h-8 w-8 text-blue-800 dark:text-blue-200" />
									</div>
								</div>
								<h3 className="text-xl font-bold text-white mb-2 drop-shadow">
									{feature.title}
								</h3>
								<p className="text-blue-50 dark:text-blue-100 leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

		
			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
						Ready to Make an Impact?
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-up delay-100">
						Join thousands of educators who are already using BRIDGE to share their
						research and improve education worldwide.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
						<Link
							to="/register"
							className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-teal-600 transition-all duration-300 group"
						>
							Join BRIDGE Today
							<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
						</Link>
						<Link
							to="/about"
							className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg hover:scale-105 hover:from-teal-500 hover:to-blue-700 transition-all duration-300"
						>
							Learn More About Us
						</Link>
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
          @keyframes popup {
            0% { opacity: 0; transform: scale(0.95) translateY(40px);}
            100% { opacity: 1; transform: scale(1) translateY(0);}
          }
          .animate-popup {
            opacity: 1 !important;
            animation: popup 0.7s cubic-bezier(.4,0,.2,1) both;
          }
          .reveal-on-scroll {
            opacity: 0;
            transition: opacity 0.3s;
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

export default Home;