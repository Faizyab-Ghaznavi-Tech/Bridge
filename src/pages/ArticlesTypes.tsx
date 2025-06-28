import React, { useEffect } from 'react';
import { FileText, PenTool, Users, BookOpen, Star, GraduationCap, ClipboardList } from 'lucide-react';
import Footer from '../components/Footer';

const topics = [
  "Curriculum issues",
  "Exemplary pedagogy",
  "Differentiation strategies",
  "Classroom management",
  "Student engagement",
  "Special needs",
  "Teacher leadership and mentoring",
  "Gifted education",
  "Online instruction",
  "Teaching narratives",
  "Mathematics",
  "Social studies",
  "Science",
  "Language arts",
  "Library sciences",
  "Reading",
  "Art",
  "Special education",
  "Technology",
];



// Add this custom hook for scroll-based animation
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

const ArticlesTypes: React.FC = () => {
  // Scroll to top on mount (for direct navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Header */}
      <section className="relative overflow-visible py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-white/10 to-teal-300/20 dark:from-blue-900/40 dark:via-gray-900/10 dark:to-teal-900/30 animate-gradient-move" />
        <div  
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-500 to-indigo-600 dark:from-blue-300 dark:via-teal-300 dark:to-indigo-400 mb-8 pb-2 animate-fade-in-up" style={{ paddingBottom: '0.5rem', marginBottom: '2rem' }} // extra space for descenders
>            Article Types & Author Guidelines</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Discover how you can contribute to BRIDGE. Explore our article types and follow the author guidelines to prepare your manuscript for publication.
          </p>
        </div>
      </section>

      {/* Submission Types & Guidelines */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Article Summary */}
          <div
            id="article-summary"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-8 border-blue-400 dark:border-blue-600 reveal-on-scroll opacity-0"
          >
             <div className="flex items-center justify-center mb-4">
                <FileText  className="w-12 h-12 text-blue-600 dark:text-teal-400" />
              </div><h2 className="text-3xl font-bold text-blue-700 dark:text-teal-300 mb-4 text-center">Article Summary</h2>
             
            <div className="space-y-4 text-[1.15rem] md:text-[1.25rem] leading-relaxed">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold text-xl">
                <span className="text-2xl">🔍</span> Purpose:
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Graduate students collaborate with educational researchers (or independently reach out) to summarize published research articles.<br />
                The goal is to translate academic research into practical, classroom-friendly language for educators.<br />
                This helps bridge the gap between research and real-world teaching.
              </p>
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold">
                <span className="text-2xl">👤</span> Authorship Rules:
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 text-[1.08rem] md:text-[1.15rem] leading-relaxed">
                <li>Single-author only to support individual student growth.</li>
                <li>Exception: Two authors allowed only if the article is translated into another language and language expertise is available during review.</li>
              </ul>
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold">
                <span className="text-2xl">✔️</span> Accepted Topics (examples):
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  "Curriculum issues", "Exemplary pedagogy", "Differentiation strategies", "Classroom management",
                  "Student engagement", "Special needs", "Teacher leadership", "Gifted education", "Online learning",
                  "Teaching stories", "Core subjects: math, science, social studies, reading, language arts, library science, special education, art, and technology"
                ].map(topic => (
                  <span key={topic} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 text-xs font-medium shadow-sm">
                    <Star className="w-3 h-3 mr-1 text-blue-400 dark:text-blue-300" /> {topic}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold mt-4">
                <span className="text-2xl">📄</span> Manuscript Guidelines
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 text-[1.08rem] md:text-[1.15rem] leading-relaxed">
                <li>
                  <span className="font-semibold">Submission:</span> Format: .doc or .rtf files.<br />
                  Submit on the journal website (or email Dr. Denise McDonald: <a href="mailto:mcdonald@uhcl.edu" className="text-blue-600 underline">mcdonald@uhcl.edu</a> until the site is live)
                </li>
                <li>
                  <span className="font-semibold">Format Requirements:</span> Double-spaced, 1-inch margins, Non-serif font (Calibri or Arial), size 12, APA 7th edition style, Paginate pages (centered, at bottom)
                </li>
                <li>
                  <span className="font-semibold">Length:</span> 1,200–2,000 words (including references)
                </li>
                <li>
                  <span className="font-semibold">Required Headings:</span> Title (must differ from the original article’s title), Referenced Article Citation, Article Link (if available), Introduction, Background, Literature, Findings, Implications/Applications, Summary/Concluding Comments, References (only the most relevant)
                </li>
                <li>
                  <span className="font-semibold">Before Submission:</span> Spell-check and grammar-check. All citations must be listed in the reference section and vice versa
                </li>
                <li>
                  <span className="font-semibold">Additional Documents Required:</span>
                  <ul className="list-disc ml-6">
                    <li>
                      <span className="font-semibold">Contact Information Form</span> (submitted separately): Name, Affiliation (if applicable), Summary title (different from original), Full article citation, Word count (including references), 40-word max abstract, 3 keywords, Phone number and email, 50-word author biography
                    </li>
                    <li>
                      <span className="font-semibold">Researcher Agreement Document:</span> Must be signed by the original article’s author to approve use, provide access (PDF or link), and verify content accuracy in the summary
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Review Process:</span> Double-blind review by two referees. Feedback and revisions are encouraged. Review duration: may take several months
                </li>
                <li>
                  <span className="font-semibold">Resubmissions:</span> 2 months to revise. Highlight changes (NO tracked changes). Include optional response letter to reviewers. Submit revised manuscript with all supporting documents
                </li>
              </ul>
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold mt-2">
                <span className="text-2xl">🔖</span> Pro Tip:
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2 text-[1.08rem] md:text-[1.15rem] leading-relaxed">
                Strongly encouraged to review the provided Article Summary Example PDF.
              </p>
            </div>
          </div>

          {/* Transition from Educator to Researcher */}
          <div
            id="transition-narratives"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-8 border-teal-400 dark:border-teal-600 reveal-on-scroll opacity-0"
          >
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-teal-600 dark:text-teal-400" />
              </div><h2 className="text-3xl font-bold text-teal-700 dark:text-teal-300 mb-4 text-center">Transition from Educator to Researcher</h2>
             
            <div className="space-y-4 text-[1.15rem] md:text-[1.25rem] leading-relaxed">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold">
                <span className="text-2xl">🔍</span> Purpose:
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Graduate students share personal narratives about their journey from being a teacher to becoming a researcher.<br />
                Especially helpful for doctoral students making the identity shift during dissertation work.
              </p>
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold">
                <span className="text-2xl">👤</span> Authorship Rules:
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 text-[1.08rem] md:text-[1.15rem] leading-relaxed">
                <li>Single-author only</li>
              </ul>
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold mt-4">
                <span className="text-2xl">📄</span> Narrative Guidelines
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 text-[1.08rem] md:text-[1.15rem] leading-relaxed">
                <li>
                  <span className="font-semibold">Submission:</span> Format: .doc or .rtf. Submit via email to Dr. Denise McDonald (<a href="mailto:mcdonald@uhcl.edu" className="text-blue-600 underline">mcdonald@uhcl.edu</a>)
                </li>
                <li>
                  <span className="font-semibold">Format Requirements:</span> Double-spaced, 1-inch margins, Non-serif font (Calibri or Arial), size 12, APA 7th edition style, Paginate pages (bottom-center)
                </li>
                <li>
                  <span className="font-semibold">Length:</span> 500–800 words (including any references)
                </li>
                <li>
                  <span className="font-semibold">Additional Document: Contact Info Form</span> (submitted separately): Name, Affiliation (if applicable), Narrative title, Word count, 30-word max abstract, 3 keywords, Phone number and email, 50-word author biography
                </li>
                <li>
                  <span className="font-semibold">Review Process:</span> Double-blind review. Feedback encouraged; revisions may be required. Review can take several months
                </li>
                <li>
                  <span className="font-semibold">Resubmission:</span> 1 month to revise. Highlight changes (NO tracked changes). Submit revised narrative with updated documents
                </li>
              </ul>
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold mt-2">
                <span className="text-2xl">🔖</span> Pro Tip:
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2 text-[1.08rem] md:text-[1.15rem] leading-relaxed">
                Review the Narrative Example provided by the journal.
              </p>
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

export default ArticlesTypes;