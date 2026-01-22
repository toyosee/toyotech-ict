import React from 'react';
import { TESTIMONIALS } from '../constants/constants';
import { Icons } from '../constants/icons';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-1/4 -right-20 w-[800px] h-[800px] bg-toyoblue opacity-[0.08] rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute -bottom-1/4 -left-20 w-[600px] h-[600px] bg-toyoorange opacity-[0.06] rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-toyoblue/30 bg-toyoblue/10 text-toyoblue text-xs font-bold uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-toyoblue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-toyoblue"></span>
              </span>
              <span>Transition into IT the right way</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold leading-[1.1] text-white tracking-tight">
              Evolve Your <br />
              <span className="text-toyoblue relative">
                Digital
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-toyoorange opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
              </span> <br />
              <span className="text-toyoorange">Potential</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-light">
              ToyotechnICT Solutions is your gateway to mastery. From world-class coding bootcamps to 
              startup incubation, we bridge the gap between today and tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#/enroll" className="group relative bg-toyoorange text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-toyoorange/20 transition-all hover:bg-orange-600 overflow-hidden text-center">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
              </a>
              <a href="#/courses" className="glass hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/10 text-center">
                Explore Courses
              </a>
            </div>

            <div className="pt-8 flex items-center space-x-6">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <img key={i} className="w-10 h-10 rounded-full border-2 border-darkbg" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                    ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                    <span className="text-white font-bold">1k+</span> students trained so far
                </p>
            </div>
          </div>

          <div className="relative hidden lg:block animate-float">
            <div className="relative z-10 p-3 futuristic-glow rounded-[2.5rem] bg-cardbg/40 border border-white/10 backdrop-blur-md overflow-hidden transform hover:rotate-1 transition-transform duration-500">
                <img 
                    src="/toyotech-students.jpg" 
                    alt="Futuristic Tech" 
                    className="rounded-[2rem] grayscale-[0.5] hover:grayscale-0 transition-all duration-700 object-cover h-[600px] w-full shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbg/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-6 glass rounded-2xl border border-white/20">
                    <p className="text-white font-bold text-lg mb-1 uppercase tracking-wider font-orbitron">Incubation Hub v3.0</p>
                    <p className="text-gray-400 text-sm">Now accepting applications for Q1 2026</p>
                </div>
            </div>
            {/* Background decorative square */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-toyoblue/20 rounded-3xl -z-10 rotate-12"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-toyoorange/20 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="py-12 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 overflow-hidden">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" />
            </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-8 text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
            Our <span className="text-toyoblue">Dynamic</span> Ecosystem
          </h2>
          <div className="w-24 h-1.5 bg-toyoorange mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We provide a comprehensive environment for technical growth, from the first line of code to the first million in revenue.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: 'Coding School', 
              desc: 'Accelerated bootcamps in Software Engineering, Data, and AI. Built for the modern job market.', 
              icon: <Icons.Code />, 
              color: 'toyoblue' 
            },
            { 
              title: 'Incubation Hub', 
              desc: 'Turn your prototype into a product. Mentorship, workspace, and funding access for tech founders.', 
              icon: <Icons.Cpu />, 
              color: 'toyoorange' 
            },
            { 
              title: 'IT Transition', 
              desc: 'Specialized programs for professionals from non-tech backgrounds looking to break into IT.', 
              icon: <Icons.Database />, 
              color: 'toyoblue' 
            },
            { 
              title: 'Skill Acquisition', 
              desc: 'Short-term intensive workshops for high-demand skills like UI/UX and Cyber Security.', 
              icon: <Icons.Users />, 
              color: 'toyoorange' 
            },
          ].map((item, idx) => (
            <div key={idx} className="group p-10 rounded-[3rem] bg-cardbg/30 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className={`mb-8 p-5 rounded-2xl w-fit ${item.color === 'toyoblue' ? 'bg-toyoblue/10 text-toyoblue' : 'bg-toyoorange/10 text-toyoorange'} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <a href="#/courses" className="text-white text-xs font-bold uppercase tracking-widest flex items-center group-hover:text-toyoblue transition-colors">
                Learn More 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-darkbg">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl text-left">
                    <h2 className="font-orbitron text-4xl font-bold text-white mb-4 uppercase">
                      Voice of the <span className="text-toyoorange">Future</span>
                    </h2>
                    <p className="text-gray-500 text-lg italic">"a step into the future" isn't just a tagline, it's our graduates' reality.</p>
                </div>
                <div className="flex space-x-4">
                    <button 
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all"
                      aria-label="Previous testimonial"
                    >
                      ←
                    </button>
                    <button 
                      className="w-12 h-12 rounded-full border border-toyoblue/30 flex items-center justify-center text-toyoblue hover:bg-toyoblue/10 transition-all"
                      aria-label="Next testimonial"
                    >
                      →
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 relative group hover:border-toyoorange/20 transition-all">
                        <div className="mb-8">
                            {[1,2,3,4,5].map(star => (
                              <span key={star} className="text-toyoorange text-xl">★</span>
                            ))}
                        </div>
                        <p className="text-gray-300 text-lg font-light italic mb-10 leading-relaxed">"{t.content}"</p>
                        <div className="flex items-center space-x-4">
                            {/* <img 
                              src={t.avatar} 
                              alt={t.name} 
                              className="w-14 h-14 rounded-full border-2 border-toyoblue/20 group-hover:border-toyoorange/40 transition-colors" 
                            /> */}
                            {/* <User className="w-14 h-14 text-toyoblue/40 group-hover:text-toyoorange/60 transition-colors" /> */}
                            <div>
                                <div className="text-white font-bold">{t.name}</div>
                                <div className="text-toyoblue text-xs font-semibold uppercase tracking-wider">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-8 text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
            Featured <span className="text-toyoorange">Courses</span>
          </h2>
          <div className="w-24 h-1.5 bg-toyoblue mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Industry-relevant curriculum designed to equip you with tomorrow's tech skills today.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: 'AI & Machine Learning', 
              desc: 'Master neural networks, deep learning, and AI model deployment.', 
              icon: <Icons.Cpu />, 
              color: 'toyoblue',
              duration: '16 weeks'
            },
            { 
              title: 'Cyber Security', 
              desc: 'Learn ethical hacking, threat detection, and network security protocols.', 
              icon: <Icons.Shield />, 
              color: 'toyoorange',
              duration: '12 weeks'
            },
            { 
              title: 'Cloud Computing', 
              desc: 'AWS, Azure, and Google Cloud certification preparation.', 
              icon: <Icons.Cloud />, 
              color: 'toyoblue',
              duration: '14 weeks'
            },
            { 
              title: 'Data Analytics', 
              desc: 'Data visualization, SQL, and predictive analytics mastery.', 
              icon: <Icons.Database />, 
              color: 'toyoorange',
              duration: '10 weeks'
            },
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-[2.5rem] bg-cardbg/40 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-toyoblue/10">
              <div className={`mb-6 p-4 rounded-2xl w-fit ${item.color === 'toyoblue' ? 'bg-toyoblue/10 text-toyoblue' : 'bg-toyoorange/10 text-toyoorange'} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-xs text-gray-400 font-medium">{item.duration}</span>
                <a href="#/courses" className="text-toyoblue text-xs font-bold uppercase tracking-widest flex items-center hover:text-white transition-colors">
                  Enroll Now
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8">
            <div className="glass rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(86,128,196,0.1)]">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(86,128,196,0.15)_0%,_transparent_70%)]"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-7xl font-orbitron font-bold text-white mb-8">
                      Ready to <span className="text-toyoorange">Start</span>?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
                        Don't wait for the future. Create it. Enroll today and secure your spot in our next cohort.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <a href="#/enroll" className="w-full sm:w-auto bg-toyoorange text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-toyoorange/20">
                            Apply for Admission
                        </a>
                        <a href="#/contact" className="w-full sm:w-auto glass border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;