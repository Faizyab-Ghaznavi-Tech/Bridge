import React, { useEffect } from 'react';
import { BookOpen, Users, Target, Heart, Lightbulb, Globe, FileText, PenTool, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const articleTypes = [
	{
		icon: <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />,
		title: 'Article Summary',
		description:
			'Concise, practitioner-focused summaries of current educational research, crafted for immediate classroom application.',
	},
	{
		icon: <PenTool className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-2" />,
		title: 'Transition Narratives',
		description:
			'Brief, reflective pieces on the journey from educator to researcher, offering inspiration and guidance for aspiring teacher-scholars.',
	},
];

// Add the scroll reveal hook
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

const About: React.FC = () => {
	useScrollReveal();

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
			{/* Hero Section */}
			<section className="relative overflow-hidden py-20">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-white/10 to-teal-300/20 dark:from-blue-900/40 dark:via-gray-900/10 dark:to-teal-900/30 animate-gradient-move" />
				<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
					<h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-500 to-indigo-600 dark:from-blue-300 dark:via-teal-300 dark:to-indigo-400 mb-4 animate-fade-in-up">
						About BRIDGE
					</h1>
					<span className="block text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mt-2 mb-6 animate-fade-in-up delay-100">
						Bringing Research In Direct Grasp of Educators
					</span>
					<p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
						<span className="font-semibold text-blue-700 dark:text-blue-300"></span>Empowering educators worldwide with a comprehensive platform to publish, discover, and collaborate on educational research that makes a real difference in classrooms.
					</p>
				</div>
			</section>

			{/* Purpose & Background */}
			<section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="reveal-on-scroll opacity-0 animate-fade-in-up">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
								Why BRIDGE?
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								The purpose of BRIDGE is to forward research information to the fingertips of teachers, focusing on classroom practice strategies that enhance pedagogy and student learning. The journal is a vehicle for disseminating research findings from diverse domains and multiple researchers, making them freely accessible to educators in all schooling environments.
							</p>
							<h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4 mt-8">
								Our Story
							</h3>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
								To meet the needs of practitioners for current, applicable research, founding editor{' '}
								<span className="font-semibold text-blue-700 dark:text-blue-300">
									Denise McDonald
								</span>{' '}
								envisioned graduate students in education applying their skills to synthesize and summarize research as practitioner pieces.
							</p>
						</div>
						<div className="bg-gradient-to-br from-blue-100 via-white to-teal-100 dark:from-blue-900 dark:via-gray-800 dark:to-teal-900 rounded-2xl p-10 shadow-xl reveal-on-scroll opacity-0 animate-fade-in-up delay-100">
							<Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
							<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
								Our Goals
							</h3>
							<ul className="text-lg text-gray-700 dark:text-gray-200 mb-6 list-disc list-inside space-y-2">
								<li>
									<span className="font-semibold text-blue-600 dark:text-blue-400">
										Primary:
									</span>{' '}
									Offer an online, open-access journal that provides practitioners with research-based information crafted for a teacher readership.
								</li>
								<li>
									<span className="font-semibold text-blue-600 dark:text-blue-400">
										Secondary:
									</span>{' '}
									Provide graduate students, as emerging authors, an initial publication experience under the guidance of skilled researchers.
								</li>
							</ul>
							<p className="text-gray-700 dark:text-gray-300 text-center mt-4">
								Supported by endowments from the University of Houston – Clear Lake (Sandra
								Johnson/Barrios Technology Endowed Professorship, Denise McDonald) and Texas A&M
								(Houston Endowment Endowed Chair in Urban Education, Cheryl Craig), BRIDGE is a
								collaborative effort to promote research, inform teachers, and support the scholarly
								development of graduate students.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Article Types Section */}
			<section className="py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 reveal-on-scroll opacity-0">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
							What We Publish
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
							Two types of articles are reviewed for publication in BRIDGE:
						</p>
					</div>
					<div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
						{articleTypes.map((type, idx) => (
							<div
								key={type.title}
								className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 reveal-on-scroll opacity-0 ${
									idx === 1 ? 'md:mt-8' : ''
								}`}
							>
								{type.icon}
								<h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
									{type.title}
								</h3>
								<p className="text-gray-700 dark:text-gray-300">{type.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className="py-20">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center reveal-on-scroll opacity-0">
						Our Core Values
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center reveal-on-scroll opacity-0 delay-100">
						These principles guide everything we do at{' '}
						<span className="font-semibold text-blue-700 dark:text-blue-300">BRIDGE</span>.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-200 hover:scale-105 transition-transform duration-300">
							<Heart className="w-10 h-10 text-red-500 dark:text-red-400 mb-4" />
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Quality First
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Every piece of research goes through rigorous peer review to ensure only high-quality,
								actionable content reaches our community.
							</p>
						</div>
						<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-300 hover:scale-105 transition-transform duration-300">
							<Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Community Driven
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								We're built by educators, for educators. Our platform reflects the real needs and
								challenges of the educational community.
							</p>
						</div>
						<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-400 hover:scale-105 transition-transform duration-300">
							<Lightbulb className="w-10 h-10 text-yellow-400 dark:text-yellow-300 mb-4" />
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Innovation
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								We continuously evolve our platform with cutting-edge features that make research
								sharing more effective and accessible.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How BRIDGE Works Section */}
			<section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center reveal-on-scroll opacity-0">
						How BRIDGE Works
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center reveal-on-scroll opacity-0 delay-100">
						A simple, transparent process that connects researchers with educators.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-200">
							<span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white text-2xl font-bold mb-4 shadow-lg">
								1
							</span>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Submit Research
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Educators and researchers submit their work using our intuitive rich text editor with
								support for multimedia content.
							</p>
						</div>
						<div className="flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-300">
							<span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white text-2xl font-bold mb-4 shadow-lg">
								2
							</span>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Peer Review
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Our expert panel reviews submissions for quality, relevance, and practical applicability
								before publication.
							</p>
						</div>
						<div className="flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-400">
							<span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white text-2xl font-bold mb-4 shadow-lg">
								3
							</span>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								Share & Discover
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Approved research is published for the global education community to discover,
								implement, and build upon.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Global Impact Section */}
			<section className="py-20">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center reveal-on-scroll opacity-0">
						Global Impact
					</h2>
					<p className="text-xl text-blue-700 dark:text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed text-center reveal-on-scroll opacity-0 delay-100">
						BRIDGE is more than just a platform—it's a movement towards evidence-based education that
						transcends geographical boundaries and connects educators worldwide.
						<br />
						<span className="block mt-4 text-base text-blue-800 dark:text-blue-200">
							Our ever-growing community is dedicated to sharing practical research, fostering
							collaboration, and inspiring innovation in classrooms across the globe.
						</span>
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-200">
							<Globe className="w-10 h-10 text-teal-500 dark:text-teal-400 mb-4" />
							<span className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">
								50+
							</span>
							<span className="text-gray-700 dark:text-gray-300">Countries Reached</span>
							<span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
								A truly global educational community
							</span>
						</div>
						<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-300">
							<Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
							<span className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">
								1000+
							</span>
							<span className="text-gray-700 dark:text-gray-300">Educators Connected</span>
							<span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
								Collaborating and learning together
							</span>
						</div>
						<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center reveal-on-scroll opacity-0 delay-400">
							<FileText className="w-10 h-10 text-blue-400 dark:text-blue-300 mb-4" />
							<span className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">
								500+
							</span>
							<span className="text-gray-700 dark:text-gray-300">Research Articles</span>
							<span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
								Accessible, actionable, and peer-reviewed
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Collaboration Section */}
			<section className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex justify-center mb-8">
						<div className="p-6 bg-gradient-to-tr from-blue-200/40 via-white/40 to-teal-200/40 rounded-full shadow-2xl reveal-on-scroll opacity-0 animate-fade-in-up">
							<Users className="w-16 h-16 text-blue-600 dark:text-blue-200 drop-shadow-lg" />
						</div>
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll opacity-0">
						Collaboration & Impact
					</h2>
					<p className="text-xl text-blue-700 dark:text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed reveal-on-scroll opacity-0 delay-100">
						BRIDGE is a collaborative effort between the University of Houston – Clear Lake and Texas
						A&M University, promoting research, informing teachers, and supporting the scholarly
						development of graduate students. Our journal is freely accessible to educators in all
						schooling environments.
					</p>
					<div className="mt-12 reveal-on-scroll opacity-0 delay-300">
						<p className="text-lg text-blue-800 dark:text-blue-100">
							Ready to join a vibrant, supportive network of educators and researchers? <br />
							<span className="font-semibold">
								BRIDGE welcomes you to contribute, collaborate, and grow with us.
							</span>
						</p>
						<div className="flex justify-center mt-8">
							<a
								href="/register"
								className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg hover:scale-105 hover:from-teal-500 hover:to-blue-700 transition-all duration-300 group"
							>
								Join BRIDGE
								<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
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

export default About;