
import React, { useState } from 'react';
import { COURSES } from '../constants/constants';
import {type EnrollmentData, CourseType } from '../../types';
import { submitEnrollment } from '../services/enrollmentService';

const Enrollment: React.FC = () => {
  const [formData, setFormData] = useState<Partial<EnrollmentData>>({
    course: CourseType.SOFTWARE_ENGINEERING,
    experienceLevel: 'Beginner'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const result = await submitEnrollment(formData as EnrollmentData);
    
    if (result.success) {
      setStatus({ type: 'success', message: result.message });
      setFormData({
        course: CourseType.SOFTWARE_ENGINEERING,
        experienceLevel: 'Beginner'
      });
    } else {
      setStatus({ type: 'error', message: result.message });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-4xl font-bold text-white mb-4">Course Enrollment</h1>
          <p className="text-gray-400">Join the elite cohort. <i>a step into the future</i> starts here.</p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-toyoorange/10 blur-[60px] -z-10"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">First Name</label>
                <input
                  required
                  name="firstName"
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Last Name</label>
                <input
                  required
                  name="lastName"
                  value={formData.lastName || ''}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-colors"
                  placeholder="+234 800 000 0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Preferred Course</label>
                <select
                  required
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-colors appearance-none cursor-pointer"
                >
                  {COURSES.map(course => (
                    <option key={course} value={course} className="bg-darkbg">{course}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Experience Level</label>
                <select
                  required
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-colors appearance-none cursor-pointer"
                >
                  <option value="Beginner" className="bg-darkbg">Beginner</option>
                  <option value="Intermediate" className="bg-darkbg">Intermediate</option>
                  <option value="Professional" className="bg-darkbg">Professional</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Additional Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message || ''}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-colors resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>

            {status.type && (
              <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {status.message}
              </div>
            )}

            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full bg-toyoorange hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center space-x-2`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span>Processing...</span>
                </>
              ) : (
                <span>Complete Enrollment</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
