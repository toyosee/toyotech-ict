
import React from 'react';

const Incubation: React.FC = () => {
  return (
    <div className="min-h-screen py-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="relative mb-24 rounded-[3rem] overflow-hidden bg-gradient-to-br from-toyoblue/20 to-toyoorange/5 p-12 md:p-20 border border-white/5">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
              Incubation <span className="text-toyoorange">Hub</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We bridge the gap between disruptive ideas and successful market entry. 
              Our hub provides the infrastructure, mentorship, and capital connection 
              tech founders need to scale.
            </p>
            <button className="bg-toyoorange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
              Apply for Incubation
            </button>
          </div>
        </div>

        {/* Process */}
        <div className="mb-32">
          <h2 className="font-orbitron text-3xl font-bold text-center text-white mb-16">The Founder Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Ideation', desc: 'Refining the problem statement and market fit.' },
              { step: '02', title: 'MVP Build', desc: 'Rapid prototyping and technical architecture.' },
              { step: '03', title: 'Validation', desc: 'User testing and iterative deployment.' },
              { step: '04', title: 'Scale', desc: 'Growth strategies and investor readiness.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 glass rounded-3xl border border-white/5 relative">
                <div className="text-toyoblue font-orbitron text-5xl font-bold opacity-20 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">Technical Mentorship</h3>
              <p className="text-gray-400">Direct access to ToyotechnICT's lead engineers for code review, architecture planning, and stack selection.</p>
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">Strategic Partnership</h3>
              <p className="text-gray-400">Leverage our network of industry partners to gain your first enterprise clients and early adopters.</p>
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">Creative Workspace</h3>
              <p className="text-gray-400">Dedicated high-speed connectivity and collaborative zones in our Lagos and virtual hubs.</p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-video rounded-3xl overflow-hidden futuristic-glow">
                <img src="https://picsum.photos/seed/office/800/450" alt="Hub Environment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-toyoorange p-6 rounded-2xl hidden md:block">
                <p className="text-white font-bold text-lg">12+ Startups Launched</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incubation;
