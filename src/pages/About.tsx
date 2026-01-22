import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">Our Visionary Journey</h1>
          <p className="text-xl text-gray-400 italic">"...a step into the future"</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="font-orbitron text-2xl font-bold text-toyoblue mb-6">Who We Are</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              ToyotechnICT Solutions is a premier technology agency at the intersection of skill development, 
              innovative software engineering, and startup incubation. Founded on the principle that the 
              digital future belongs to those who prepare for it today.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our ecosystem encompasses specialized training tracks, a transition program for professionals moving into IT, 
              and an incubation hub that nurtures groundbreaking digital solutions.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-toyoorange text-3xl font-bold mb-1">500+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Graduates</p>
              </div>
              <div>
                <h4 className="text-toyoblue text-3xl font-bold mb-1">12</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Hub Projects</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Image container with proper aspect ratio */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img 
                src="toyotech-founder.png" 
                alt="Toyosi Oladele - Founder & CEO of ToyotechnICT Solutions" 
                className="w-full h-[400px] md:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: 'center 20%' }} // Adjusts vertical position to prevent head cutoff
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkbg/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-toyoblue/20 to-toyoorange/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Name and Position Card */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-4/5 max-w-md">
              <div className="glass rounded-2xl p-6 text-center border border-white/10 shadow-2xl backdrop-blur-lg">
                <h3 className="font-orbitron text-xl font-bold text-white mb-1">Elijah Abolaji</h3>
                <p className="text-toyoorange text-sm font-medium mb-4">Founder & CEO</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/toyosee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-toyoblue hover:bg-toyoblue/10 transition-all duration-300 group/social"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-darkbg text-xs text-white rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      GitHub
                    </span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/elijahabolaji" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-toyoblue hover:bg-toyoblue/10 transition-all duration-300 group/social"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-darkbg text-xs text-white rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      LinkedIn
                    </span>
                  </a>
                  
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-toyoorange hover:bg-toyoorange/10 transition-all duration-300 group/social"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-darkbg text-xs text-white rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Twitter
                    </span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-toyoblue/20 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-toyoorange/20 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="bg-cardbg p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-toyoblue/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-toyoorange/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="relative z-10">
            <h2 className="font-orbitron text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 space-y-4 rounded-2xl border border-white/5 bg-darkbg/30 hover:border-toyoblue/30 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toyoblue/10 text-toyoblue text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <h3 className="text-xl font-bold text-white">Excellence</h3>
                <p className="text-gray-500 text-sm">We maintain the highest standards in education and product development.</p>
              </div>
              <div className="text-center p-8 space-y-4 rounded-2xl border border-white/5 bg-darkbg/30 hover:border-toyoorange/30 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toyoorange/10 text-toyoorange text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <h3 className="text-xl font-bold text-white">Innovation</h3>
                <p className="text-gray-500 text-sm">Always exploring the edge of what's possible in the tech space.</p>
              </div>
              <div className="text-center p-8 space-y-4 rounded-2xl border border-white/5 bg-darkbg/30 hover:border-toyoblue/30 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toyoblue/10 text-toyoblue text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <h3 className="text-xl font-bold text-white">Community</h3>
                <p className="text-gray-500 text-sm">Building a supportive ecosystem for long-term career growth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The visionaries driving our mission forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Elijah Abolaji . O (M.N.C.S)", role: "CEO & Founder", image: "toyotech-founder.png" },
              { name: "Citp. Lawrence Ogbu", role: "CTO", image: "lawrence-o.jpg" },
              { name: "David Kim", role: "Head of Education", image: "https://i.pravatar.cc/300?u=david" },
            ].map((person, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl border border-white/5 bg-cardbg/30 hover:bg-cardbg/50 transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-2 border-white/10 group-hover:border-toyoblue/50 transition-colors">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover object-top" // object-top ensures faces are visible
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkbg/30 via-transparent to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{person.name}</h3>
                <p className="text-toyoblue font-medium mb-4">{person.role}</p>
                <p className="text-gray-400 text-sm">Driving innovation and excellence in EdTech</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;