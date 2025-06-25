import React from 'react';
import Footer from '../components/Footer';

const editors: {
  title: string;
  members: { name: string; role: string; institution?: string }[];
}[] = [
  {
    title: 'Editors',
    members: [
      {
        name: 'Denise McDonald (founder)',
        role: 'Professor Emeritus',
        institution: 'University of Houston – Clear Lake',
      },
      {
        name: 'Cheryl Craig',
        role: 'Professor, Houston Endowment Endowed Chair in Urban Education',
        institution: 'Texas A&M University',
      },
    ],
  },
  {
    title: 'Associate Editor',
    members: [
      {
        name: 'Gayle Curtis',
        role: 'Independent Consultant',
      },
    ],
  },
  {
    title: 'Assistant Editor',
    members: [
      {
        name: 'Dr. Andrea Foster',
        role: 'Sam Houston State University',
      },
    ],
  },
];

const reviewBoard = [
  {
    name: 'Caroline Crawford',
    role: 'Professor',
    institution: 'University of Houston – Clear Lake',
    specialization: 'Technology',
  },
  {
    name: 'Debby Shulsky',
    role: 'Associate Professor (retired)',
    institution: 'University of Houston – Clear Lake',
    specialization: 'Social Studies',
  },
  {
    name: 'Sheila Baker',
    role: 'Professor',
    institution: 'University of Houston – Clear Lake',
    specialization: 'Library Sciences',
  },
  {
    name: 'Jackie Sacks',
    role: 'Professor (retired)',
    institution: 'University of Houston-Downtown',
    specialization: 'Mathematics',
  },
  {
    name: 'Bernardo Pohl',
    role: 'Associate Professor',
    institution: 'University of Houston-Downtown',
    specialization: 'Special Education',
  },
  {
    name: 'Omah Williams-Duncan',
    role: 'Associate Professor',
    institution: 'University of Houston – Clear Lake',
    specialization: 'Science',
  },
  {
    name: 'Carrie Markello',
    role: 'Clinical Associate Professor (retired)',
    institution: 'University of Houston',
    specialization: 'Art Education',
  },
  {
    name: 'Kent Divoll',
    role: 'Professor',
    institution: 'University of Houston – Clear Lake',
    specialization: 'Classroom Management',
  },
  {
    name: 'Lesley Gauna',
    role: 'Associate Professor',
    institution: 'University of Houston – Clear Lake',
    specialization: 'Bilingual Education',
  },
  {
    name: 'Jane Cooper',
    role: 'Assistant Professor',
    institution: 'University of Houston – Clear Lake',
    specialization: 'Teacher Mentoring',
  },
  {
    name: 'Aakash Kumar',
    role: 'PhD Candidate',
    institution: 'Texas A&M University – College Station',
    specialization: 'Language Arts & Reading',
  },
];

const EditorialBoard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-white/10 to-teal-300/20 dark:from-blue-900/40 dark:via-gray-900/10 dark:to-teal-900/30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-500 to-indigo-600 dark:from-blue-300 dark:via-teal-300 dark:to-indigo-400 mb-4 text-center animate-fade-in-up">
            Editorial Board
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-center animate-fade-in-up delay-100">
            Meet the distinguished editors and reviewers guiding the vision and quality of BRIDGEB.
          </p>

          {/* Editors Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {editors.map((section) => (
              <div key={section.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in-up">
                <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">{section.title}</h2>
                <ul className="space-y-4">
                  {section.members.map((member) => (
                    <li key={member.name} className="text-center">
                      <span className="block text-lg font-semibold text-gray-900 dark:text-white">{member.name}</span>
                      <span className="block text-sm text-gray-600 dark:text-gray-300">{member.role}</span>
                      {member.institution && (
                        <span className="block text-sm text-blue-600 dark:text-blue-400">{member.institution}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Editorial Review Board */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-6 text-center">
              Editorial Review Board
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewBoard.map((member) => (
                <div key={member.name} className="flex flex-col bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-5 shadow group hover:scale-105 transition-transform duration-300">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{member.role}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{member.institution}</span>
                  <span className="mt-1 text-xs font-medium text-teal-700 dark:text-teal-300 uppercase tracking-wide">{member.specialization}</span>
                </div>
              ))}
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
          .delay-100 { animation-delay: .1s; }
          .delay-200 { animation-delay: .2s; }
        `}
      </style>
    </div>
  );
};

export default EditorialBoard;