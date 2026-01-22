
import React from 'react';
import { CourseType } from '../../types';

const CourseCard = ({ title, level, duration, desc }: { title: string, level: string, duration: string, desc: string }) => (
  <div className="glass p-8 rounded-3xl border border-white/5 hover:border-toyoblue/40 transition-all duration-300 group flex flex-col h-full">
    <div className="mb-4">
      <span className="text-[10px] uppercase tracking-widest text-toyoorange font-bold border border-toyoorange/30 px-2 py-1 rounded-md">{level}</span>
    </div>
    <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-toyoblue transition-colors">{title}</h3>
    <p className="text-toyoblue text-sm font-medium mb-4">{duration}</p>
    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
    <a href="#/enroll" className="inline-block w-full text-center py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
      View Curriculum
    </a>
  </div>
);

const Courses: React.FC = () => {
  const courseList = [
    { 
      title: CourseType.SOFTWARE_ENGINEERING, 
      level: 'Professional', 
      duration: '6 Months', 
      desc: 'Master full-stack development using React, Node.js, and modern cloud architectures. Build production-grade applications.' 
    },
    { 
      title: CourseType.DATA_ANALYTICS, 
      level: 'Intermediate', 
      duration: '4 Months', 
      desc: 'Learn to extract insights from complex data. Master Python, SQL, Tableau, and statistical modeling for business intelligence.' 
    },
    { 
      title: CourseType.AI_MACHINE_LEARNING, 
      level: 'Advanced', 
      duration: '5 Months', 
      desc: 'Deep dive into Neural Networks, NLP, and Computer Vision. Build and deploy intelligent models using TensorFlow and PyTorch.' 
    },
    { 
      title: CourseType.UI_UX_DESIGN, 
      level: 'Beginner', 
      duration: '3 Months', 
      desc: 'Design intuitive digital experiences. Master Figma, user research, wireframing, and the psychology of interaction design.' 
    },
    { 
      title: CourseType.CYBER_SECURITY, 
      level: 'Professional', 
      duration: '6 Months', 
      desc: 'Protect digital assets. Learn ethical hacking, network security, risk management, and security architecture.' 
    },
    { 
      title: CourseType.CLOUD_COMPUTING, 
      level: 'Intermediate', 
      duration: '4 Months', 
      desc: 'Master AWS, Azure, and Google Cloud. Learn DevOps practices, containerization with Docker, and Kubernetes orchestration.' 
    }
  ];

  return (
    <div className="min-h-screen py-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
            Our Learning <span className="text-toyoorange">Tracks</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Curated programs designed to transform beginners into industry-ready professionals. 
            <i> a step into the future</i> starts with the right skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>

        <div className="mt-20 p-12 glass rounded-[3rem] text-center border border-toyoblue/20">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-4">Not sure where to start?</h2>
            <p className="text-gray-400 mb-8">Schedule a free career consultation with our tech advisors.</p>
            <a href="#/contact" className="bg-toyoblue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all inline-block">
                Contact an Advisor
            </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
