import React from 'react';
import { 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonLanding: React.FC = () => {
  const benefits = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & Machine Learning",
      desc: "The #1 language for building intelligent systems and neural networks."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science",
      desc: "Analyze massive datasets and visualize insights with Pandas and Matplotlib."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      desc: "Build scalable backends using frameworks like Django and FastAPI."
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Automation",
      desc: "Write scripts to handle repetitive tasks and save hours of manual work."
    }
  ];

  const curriculum = [
    {
      id: "01",
      title: "Python Fundamentals",
      topics: ["Variables & Data Types", "Control Flow", "Loops", "Functions"],
      icon: <Terminal className="w-5 h-5" />
    },
    {
      id: "02",
      title: "Intermediate Mastery",
      topics: ["Error Handling", "File I/O", "APIs", "List Comprehensions"],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      id: "03",
      title: "Numerical Computing",
      topics: ["NumPy Basics", "Vectorized Operations", "Array Indexing"],
      icon: <Database className="w-5 h-5" />
    },
    {
      id: "04",
      title: "Data Analysis & Viz",
      topics: ["Pandas DataFrames", "Data Cleaning", "Matplotlib Visuals"],
      icon: <Globe className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-darkbg text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-toyoblue/10 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-toyoorange" />
            <span className="text-sm font-medium">New: Interactive Online Cohort</span>
          </div>
          
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-toyoblue to-toyoorange">Python</span> <br />
            from Anywhere.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Go from zero to building production-grade AI, Web, and Automation tools. 
            The most versatile language in the world, taught by industry experts.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              to="/enroll" 
              className="px-8 py-4 bg-toyoorange hover:bg-orange-600 rounded-xl font-bold transition-all flex items-center gap-2 group shadow-lg shadow-orange-600/20"
            >
              Start Learning Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <a href="#curriculum" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
              View Curriculum
            </a> */}
          </div>
        </div>
      </section>

      {/* Why Python Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl font-bold mb-4">Why Python in 2026?</h2>
            <div className="h-1 w-20 bg-toyoorange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border border-white/5 hover:border-toyoblue/30 transition-all hover:-translate-y-2">
                <div className="p-3 bg-toyoblue/10 rounded-xl text-toyoblue w-fit mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-gray-400">Step-by-step path to Python proficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border border-white/5 relative group overflow-hidden">
                <span className="absolute top-4 right-6 text-6xl font-orbitron font-bold text-white/[0.03] group-hover:text-toyoorange/5 transition-colors">
                  {item.id}
                </span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-toyoorange/10 rounded-lg text-toyoorange">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-toyoblue/50" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persuasive Mid-Section */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-orbitron text-4xl font-bold leading-tight">
              Don't Just Learn <br /> Syntax. <span className="text-toyoblue">Build Systems.</span>
            </h2>
            <p className="text-gray-300">
              Most courses teach you how to write "Hello World." We teach you how to architect software. 
              Our Python Online Class focuses on real-world application—from Kaduna to the global market.
            </p>
            <ul className="space-y-4">
              {[
                "100% Online & Flexible for working professionals",
                "Direct mentorship via our Discord community",
                "Focus on AI and Automation frameworks",
                "Capstone project to boost your portfolio"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
             <div className="glass p-6 rounded-3xl border border-white/10 font-mono text-sm overflow-hidden shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-toyoblue"># Python Automation Script</p>
                <p className="text-white"><span className="text-toyoorange">import</span> neural_network</p>
                <p className="text-white"><span className="text-toyoorange">def</span> <span className="text-toyoblue">train_future</span>(talent):</p>
                <p className="text-gray-400 pl-4">skills = talent.learn(<span className="text-green-400">"Python"</span>)</p>
                <p className="text-gray-400 pl-4"><span className="text-toyoorange">return</span> skills.deploy_to_market()</p>
                <p className="text-white mt-4">train_future(<span className="text-green-400">"You"</span>)</p>
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-toyoorange/20 blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto glass p-12 rounded-[40px] border border-white/10 relative">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white">Ready to become a Python Pro?</h2>
          <p className="text-gray-400 mb-10">
            Join our next cohort starting soon. Limited seats available to ensure quality mentorship.
          </p>
          <Link 
            to="/enroll" 
            className="inline-flex px-10 py-5 bg-toyoblue hover:bg-blue-600 rounded-2xl font-bold text-white transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest"
          >
            Apply for Python Cohort
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PythonLanding;