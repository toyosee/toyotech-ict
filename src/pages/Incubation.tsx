import React from 'react';
import { Mail, Users, Building, Rocket, Briefcase, Code, Target, Zap, Calendar, Award } from 'lucide-react';

const Incubation: React.FC = () => {
  const handleApplyForIncubation = () => {
    const subject = encodeURIComponent('Incubation Inquiry - New Application');
    const body = encodeURIComponent(`Dear ToyotechnICT Incubation Team,

I am writing to express my interest in applying for your incubation program.

About My Startup/Project:
• Project Name: 
• Stage: [Idea/MVP/Early Traction]
• Industry: 
• Team Size: 

What I'm Looking For:
• Technical mentorship and guidance
• Access to workspace and resources
• Investor connections
• [Add other specific needs]

Why I Believe This Is a Good Fit:
[Briefly explain why your project aligns with ToyotechnICT's incubation hub]

Additional Information:
• Expected Start Date: 
• Duration Needed: 
• Previous Experience: 

I would appreciate the opportunity to discuss how my project could benefit from your incubation program.

Best regards,

[Your Full Name]
[Your Phone Number]
[Your Current Role/Background]`);

    window.open(`mailto:incubation@barterverse.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleScheduleCall = () => {
    const subject = encodeURIComponent('Schedule Incubation Consultation');
    const body = encodeURIComponent(`Hello ToyotechnICT Incubation Team,

I would like to schedule a consultation call to discuss my startup/project and learn more about your incubation program.

Preferred Meeting Times:
• Date/Time 1: 
• Date/Time 2: 
• Date/Time 3: 

Project Brief:
[2-3 sentences about your project]

Looking forward to connecting.

Best regards,

[Your Name]
[Your Email]
[Your Phone]`);

    window.open(`mailto:incubation@barterverse.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen py-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="relative mb-24 rounded-[3rem] overflow-hidden bg-gradient-to-br from-toyoblue/20 via-toyoblue/5 to-toyoorange/5 p-12 md:p-20 border border-white/5">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleApplyForIncubation}
                className="inline-flex items-center justify-center bg-toyoorange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Apply for Incubation
              </button>
              <button 
                onClick={handleScheduleCall}
                className="inline-flex items-center justify-center glass border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
          
          {/* Stats overlay */}
          <div className="absolute bottom-6 right-6 hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-toyoorange">5+</div>
              <div className="text-xs text-gray-400">Startups Launched</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-toyoblue">₦50M+</div>
              <div className="text-xs text-gray-400">Funds Raised</div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl font-bold text-white mb-4">The Founder Journey</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From ideation to market dominance, we guide you through every step</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Ideation & Validation', desc: 'Refine problem statement, market research, and product-market fit analysis.', icon: Target },
              { step: '02', title: 'MVP Development', desc: 'Rapid prototyping, technical architecture, and minimum viable product build.', icon: Code },
              { step: '03', title: 'Launch & Traction', desc: 'Product launch, user acquisition, and early traction metrics.', icon: Rocket },
              { step: '04', title: 'Scale & Funding', desc: 'Growth strategies, investor pitching, and expansion planning.', icon: Zap }
            ].map((item, idx) => (
              <div key={idx} className="p-8 glass rounded-3xl border border-white/5 hover:border-toyoblue/20 transition-all hover:-translate-y-1 group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-toyoblue/10 flex items-center justify-center text-toyoblue mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-toyoblue font-orbitron text-5xl font-bold opacity-10 absolute top-0 right-0">{item.step}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-12">
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-toyoblue/10 text-toyoblue flex items-center justify-center mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-orbitron text-2xl font-bold text-white">Technical Mentorship</h3>
              </div>
              <p className="text-gray-400 pl-16">Weekly sessions with senior engineers, code reviews, architecture planning, and tech stack optimization.</p>
            </div>
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-toyoorange/10 text-toyoorange flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-orbitron text-2xl font-bold text-white">Strategic Partnership</h3>
              </div>
              <p className="text-gray-400 pl-16">Access to our network of enterprise clients, industry partners, and early adopters for pilot programs.</p>
            </div>
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-toyoblue/10 text-toyoblue flex items-center justify-center mr-4">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="font-orbitron text-2xl font-bold text-white">Creative Workspace</h3>
              </div>
              <p className="text-gray-400 pl-16">24/7 access to our Kaduna innovation hub with high-speed internet, meeting rooms, and collaborative spaces.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden futuristic-glow">
              <img 
                src="toyotech-startup.jpg" 
                alt="Incubation Hub Environment" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-toyoblue to-toyoorange p-6 rounded-2xl hidden md:block shadow-2xl">
              <Award className="w-8 h-8 text-white mb-2" />
              <p className="text-white font-bold text-lg">₦2M - ₦10M Seed Funding</p>
              <p className="text-white/80 text-sm">Available for qualifying startups</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-toyoblue/5 via-transparent to-toyoorange/5"></div>
          <div className="relative z-10">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">Ready to Launch Your Startup?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the next cohort of innovative founders building the future with ToyotechnICT.
              Applications reviewed on a rolling basis.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleApplyForIncubation}
                className="inline-flex items-center justify-center bg-toyoorange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-orange-600/20"
              >
                <Mail className="w-6 h-6 mr-3" />
                Apply Now
              </button>
              <div className="flex flex-col items-center">
                <p className="text-gray-500 text-sm mb-2">Have questions first?</p>
                <button 
                  onClick={handleScheduleCall}
                  className="inline-flex items-center justify-center glass border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all"
                >
                  Schedule Discovery Call
                </button>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Next cohort starts: <span className="text-toyoblue font-bold">March 5, 2026</span> • 
                Duration: <span className="text-toyoorange font-bold">6-12 months</span> • 
                Equity: <span className="text-toyoblue font-bold">5-20%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Email Signature Info */}
        <div className="mt-12 p-6 rounded-2xl bg-darkbg/50 border border-white/5 text-sm text-gray-500">
          <p className="mb-2">
            <strong>Email Application Tips:</strong> When applying via email, please include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your startup/project name and brief description</li>
            <li>Current stage (idea, MVP, early traction)</li>
            <li>Team members and their roles</li>
            <li>What you're specifically looking for in our incubation program</li>
            <li>Any existing traction or milestones achieved</li>
          </ul>
          <p className="mt-4">
            <strong>Response Time:</strong> We aim to respond to all applications within 5-7 business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Incubation;