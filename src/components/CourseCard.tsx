import React from 'react';
import { Clock, Calendar, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  level: string;
  duration: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string }>;
  onViewDetails: () => void;
    courseType?: 'comprehensive' | 'crash' | unknown;
    detailedInfo?: {
    overview: string;
    modules: string[];
    prerequisites: string[];
    outcomes: string[];
    tools: string[];
    schedule: string;
    price: string;
    certification: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  level, 
  duration, 
  desc, 
  icon: Icon,
  onViewDetails,
  courseType = 'comprehensive'
}) => {
  const isCrashCourse = courseType === 'crash';
  
  return (
    <div className={`glass p-8 rounded-3xl border border-white/5 hover:border-${isCrashCourse ? 'toyoorange' : 'toyoblue'}/40 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-${isCrashCourse ? 'toyoorange' : 'toyoblue'}/5`}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-widest text-toyoorange font-bold border border-toyoorange/30 px-2 py-1 rounded-md w-fit">
            {level}
          </span>
          {isCrashCourse && (
            <span className="text-[10px] uppercase tracking-widest text-toyoblue font-bold border border-toyoblue/30 px-2 py-1 rounded-md w-fit">
              Crash Course
            </span>
          )}
        </div>
        {Icon && (
          <div className={`p-2 rounded-lg ${isCrashCourse ? 'bg-toyoorange/10 text-toyoorange' : 'bg-toyoblue/10 text-toyoblue'}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-toyoblue transition-colors">
        {title}
      </h3>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className={`flex items-center text-sm ${isCrashCourse ? 'text-toyoorange' : 'text-toyoblue'}`}>
          <Clock className="w-4 h-4 mr-1" />
          {duration}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          {isCrashCourse ? 'Monthly Cohorts' : 'Flexible Start Dates'}
        </div>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {desc}
      </p>
      
      <div className="flex flex-col gap-3">
        <button 
          onClick={onViewDetails}
          className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all group/btn"
        >
          View Detailed Curriculum
          <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity group-hover/btn:translate-x-1" />
        </button>
        
        <div className="flex gap-3">
          <a 
            href="#/enroll" 
            className={`flex-1 text-center py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 ${isCrashCourse ? 'bg-toyoorange hover:bg-orange-600 text-white' : 'bg-toyoblue hover:bg-blue-600 text-white'}`}
          >
            Enroll Now
          </a>
          <a 
            href="#/contact" 
            className="flex-1 text-center py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
          >
            Talk to Advisor
          </a>
        </div>
      </div>
      
      {/* Quick info badge */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>👨‍💻 Live Mentorship</span>
          <span>📚 Project-Based</span>
          <span>🎓 Certificate</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;