import React, { useEffect } from "react";
import Footer from "../components/Footer";

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

const apaChecklist = [
  {
    title: "Sources & References",
    items: [
      "Sources cited align with reference list – Every source cited within your text must be on your reference list. Conversely, all sources listed on your references must be cited in the paper. Easily checked through a word find, UNLESS name is spelled differently (or misspelled, check for that as well) throughout paper.",
      "Check alignment accuracy of year of citation in paper with year of source on reference list.",
    ],
  },
  {
    title: "Acronyms & Paraphrasing",
    items: [
      "Acronyms for terms – Spell out the term with first use (main words capitalized), chased by the acronym in parentheses and use the acronym alone in subsequent use.",
      "Paraphrase format – Must include author(s)’ last name(s) (NO INITIALS) and year of publication with punctuation at the END.",
      "For paraphrase citations with two authors, both names are always included in citations (no comma after first name).",
      "For each citation of three or more authors, use first author’s last name chased by et al.",
      "Correct spacing and punctuation (e.g., et al. not et. al. or et.al).",
      "References in a series must be listed in ALPHABETICAL order within the citation, each chased by a semi-colon.",
      "Do not include page number in paraphrase citations.",
      "Within citations use ampersand “&” not “and.” When naming authors within the text, do not use ampersand.",
      "Authors’ initials are not used in citations, except for authors with the same last name and year.",
    ],
  },
  {
    title: "Direct Quotes",
    items: [
      "Direct quote format for fewer than 40 words – Must have quotation marks, year of publication, and page number with punctuation at the END.",
      "If a direct quote runs across two pages, use pp. 88-89. NEVER USE pg. or pgs.",
      "For direct quote citations with two authors, both names are always included (no comma after first name).",
      "For three or more authors, use first author’s last name chased by et al.",
      "Correct spacing and punctuation for page numbers (e.g., p. 88 not p.88).",
      "Block quote format for 40+ words: no quotation marks, indented, ending punctuation precedes citation.",
    ],
  },
  {
    title: "Grammar & Style",
    items: [
      "Check for correct capitalization in Headings and Subheadings.",
      "Correct use of numbers – NEVER begin a sentence with a number. Use numerals for percentages, spell out otherwise.",
      "Homophone use – Check for accuracy (e.g., piqued vs. peaked, affect vs. effect).",
      "Correct spelling and word usage (e.g., definitely vs. defiantly).",
      "Correct use of apostrophes for possession.",
      "Hyphens – Use for compound adjectives, not with adverbs ending in -ly.",
      "Rewrite sentences ending in a preposition.",
      "Aligned indentation of each paragraph.",
      "Capitalize all proper nouns.",
      "AVOID contractions in formal papers (except in direct quotes).",
    ],
  },
  {
    title: "Writing Quality",
    items: [
      "Avoid redundancy of word use within a sentence or phrase.",
      "Clarity of writing is key. Reread and rewrite for clear meaning.",
      "Avoid erroneous or repeated discussion.",
      "Singular/plural alignment (e.g., data are, not data is).",
      "Use transitional sentences to connect discussion.",
    ],
  },
  {
    title: "Reference List Format",
    items: [
      "Review the APA PowerPoint for a full example.",
      "For journal articles: author(s)’ names, year, article title, journal name, volume, edition, and page numbers.",
      "Italicize journal and book titles. Article titles and book chapters are not italicized.",
      "The volume of a journal is italicized.",
      "Capitalize only the first word of an article/book and proper nouns. All main words in a journal name are capitalized.",
      "Author(s)’ names, followed by initials, precede the year of publication.",
    ],
  },
  {
    title: "General Suggestions",
    items: [
      "Alot is not a word. Use 'a lot'.",
      "Use 'with regard', NOT 'in regards' or 'with regards'.",
      "Spell out 'mathematics' instead of 'math'.",
      "Avoid overuse of commas and 'the'.",
      "Check for accurate use of compound words (e.g., into vs. in to).",
      "The word 'data' is plural (data are, not data is).",
      "Not following guidelines or using provided resources will delay feedback.",
    ],
  },
];

const highlightKeywords = (text: string) => {
  // Add icons and highlight for key APA terms and warnings
  return text
    // Highlight "NEVER", "AVOID", "NOT", "ALWAYS", "MUST", "SUGGESTED"
    .replace(/\b(NEVER|AVOID|NOT|ALWAYS|MUST|SUGGESTED)\b/gi, '<span class="font-bold text-red-600 dark:text-red-400"><svg class="inline-block mr-1 mb-1" width="16" height="16" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#ef4444"/><path d="M10 5v6m0 4h.01" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>$1</span>')
    // Highlight "Tip", "Check", "Correct", "Clarity", "Key", "Important"
    .replace(/\b(Tip|Check|Correct|Clarity|Key|Important)\b/gi, '<span class="font-bold text-blue-600 dark:text-blue-300"><svg class="inline-block mr-1 mb-1" width="16" height="16" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#38bdf8"/><path d="M10 6v4m0 4h.01" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>$1</span>')
    // Highlight "Example", "e.g."
    .replace(/\b(Example|e\.g\.)\b/gi, '<span class="font-semibold text-teal-600 dark:text-teal-400"><svg class="inline-block mr-1 mb-1" width="16" height="16" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2dd4bf"/><path d="M7 10l3 3 3-6" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>$1</span>')
    // Bold key APA terms
    .replace(/\b(APA|paraphrase|citation|reference|quote|block quote|acronym|author|journal|volume|page number|italicize|capitalize|plural|singular|ampersand|initials|contractions|transitional sentences|compound words|data|datum)\b/gi, '<span class="font-semibold text-indigo-700 dark:text-indigo-300">$1</span>');
};

const CheckList: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-white/10 to-teal-300/20 dark:from-blue-900/40 dark:via-gray-900/10 dark:to-teal-900/30 pointer-events-none animate-gradient-move" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-500 to-indigo-600 dark:from-blue-300 dark:via-teal-300 dark:to-indigo-400 mb-4 animate-fade-in-up">
            APA Checklist for Editing Manuscript
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            <span className="font-semibold text-blue-700 dark:text-blue-300">Suggested:</span> Complete this checklist before submitting your manuscript for review.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {apaChecklist.map((section, idx) => (
            <div
              key={section.title}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-8 ${
                idx % 2 === 0
                  ? "border-blue-400 dark:border-blue-600"
                  : "border-teal-400 dark:border-teal-600"
              } reveal-on-scroll opacity-0`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full"
                  style={{
                    background: idx % 2 === 0 ? "#60a5fa" : "#2dd4bf",
                  }}
                ></span>
                {section.title}
              </h2>
              <ul className="list-none space-y-4 text-gray-700 dark:text-gray-200 text-base md:text-lg">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 dark:from-blue-900 dark:to-teal-900 flex items-center justify-center">
                      <svg width="14" height="14" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#38bdf8"/><path d="M6 10.5l2.5 2.5L14 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span
                      dangerouslySetInnerHTML={{ __html: highlightKeywords(item) }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

export default CheckList;