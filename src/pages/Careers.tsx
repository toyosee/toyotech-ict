
import React from 'react';

const Careers: React.FC = () => {
  const openings = [
    { title: 'Technical Lead', type: 'Full-time', location: 'Lagos / Remote', dept: 'Engineering' },
    { title: 'AI Research Intern', type: 'Internship', location: 'Remote', dept: 'Research' },
    { title: 'UI/UX Designer', type: 'Contract', location: 'Hybrid', dept: 'Product' },
    { title: 'Graduate Trainee', type: 'Fellowship', location: 'Lagos', dept: 'Academy' },
  ];

  return (
    <div className="min-h-screen py-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
            Join the <span className="text-toyoblue">Future</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We're looking for visionary engineers, data scientists, and creative minds to help us build 
            the next generation of tech leaders.
          </p>
        </div>

        <div className="space-y-6">
          {openings.map((job, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-center hover:border-toyoorange/40 transition-all group">
              <div className="mb-4 md:mb-0">
                <span className="text-xs font-bold text-toyoblue uppercase tracking-widest">{job.dept}</span>
                <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-toyoorange transition-colors">{job.title}</h3>
                <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all font-bold">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-12 rounded-[3rem] border border-white/5 text-center bg-gradient-to-br from-toyoblue/5 to-transparent">
          <h2 className="text-2xl font-bold text-white mb-4">Don't see a role for you?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We are always looking for exceptional talent. Send your CV and a brief intro to 
            careers@toyotechnict.com and we'll keep you in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
