import React from 'react';
import { X, Clock, Users, BookOpen, CheckCircle, Download, Award, Calendar, DollarSign } from 'lucide-react';
import { type CourseForModal } from '../../types';

interface CourseDetailsProps {
  course: CourseForModal;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsProps> = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl border border-white/10 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 z-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm uppercase tracking-widest text-toyoorange font-bold px-3 py-1 rounded-full bg-toyoorange/10">
                {course.level}
              </span>
              <span className="text-sm uppercase tracking-widest text-toyoblue font-bold px-3 py-1 rounded-full bg-toyoblue/10">
                {course.courseType === 'comprehensive' ? 'Comprehensive Program' : 'Crash Course'}
              </span>
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">{course.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{course.desc}</p>
          </div>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-darkbg/50 border border-white/5">
              <Clock className="w-5 h-5 text-toyoblue mb-2" />
              <h4 className="font-bold text-white text-sm">Duration</h4>
              <p className="text-gray-400 text-sm">{course.duration}</p>
            </div>
            <div className="p-4 rounded-xl bg-darkbg/50 border border-white/5">
              <Calendar className="w-5 h-5 text-toyoorange mb-2" />
              <h4 className="font-bold text-white text-sm">Schedule</h4>
              <p className="text-gray-400 text-sm">{course.schedule}</p>
            </div>
            <div className="p-4 rounded-xl bg-darkbg/50 border border-white/5">
              <DollarSign className="w-5 h-5 text-toyoblue mb-2" />
              <h4 className="font-bold text-white text-sm">Investment</h4>
              <p className="text-gray-400 text-sm">{course.price}</p>
            </div>
            <div className="p-4 rounded-xl bg-darkbg/50 border border-white/5">
              <Award className="w-5 h-5 text-toyoorange mb-2" />
              <h4 className="font-bold text-white text-sm">Certification</h4>
              <p className="text-gray-400 text-sm">{course.certification}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="font-orbitron text-xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-toyoblue" />
              Course Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">{course.overview}</p>
          </div>

          {/* Curriculum Modules */}
          <div className="mb-8">
            <h3 className="font-orbitron text-xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-toyoblue" />
              Curriculum Outline
            </h3>
            <div className="space-y-3">
              {course.modules.map((module, idx) => (
                <div key={idx} className="flex items-start p-4 rounded-lg bg-cardbg/30 hover:bg-cardbg/50 transition-colors group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-toyoblue/10 text-toyoblue flex items-center justify-center mr-3 font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Two-column layout for Prerequisites and Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Prerequisites */}
            <div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-4">Prerequisites</h3>
              <ul className="space-y-2">
                {course.prerequisites.map((req, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-toyoblue rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-toyoorange" />
                What You'll Achieve
              </h3>
              <ul className="space-y-2">
                {course.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-toyoorange mr-3 mt-1 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools & Technologies */}
          {course.tools && course.tools.length > 0 && (
            <div className="mb-8">
              <h3 className="font-orbitron text-xl font-bold text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-2 rounded-lg bg-toyoblue/10 text-toyoblue text-sm font-medium hover:bg-toyoblue/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
            <a 
              href="#/enroll" 
              className="flex-1 bg-toyoorange text-white text-center py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center"
              onClick={onClose}
            >
              Enroll Now
            </a>
            <button 
              className="flex-1 flex items-center justify-center py-4 rounded-xl border border-toyoblue text-toyoblue font-bold hover:bg-toyoblue/10 transition-colors"
              onClick={() => {
                // Implement download syllabus functionality
                console.log('Download syllabus for:', course.title);
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Syllabus
            </button>
            <a 
              href="#/contact" 
              className="flex-1 text-center py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors flex items-center justify-center"
              onClick={onClose}
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;