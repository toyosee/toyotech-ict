import React, { useState } from 'react';
import { COURSES } from '../constants/constants';
import { type EnrollmentData, CourseType } from '../../types';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Enrollment: React.FC = () => {
  // Initialize with all keys to ensure the payload is never "missing" properties
  const [formData, setFormData] = useState<EnrollmentData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: CourseType.ONLINE_PYTHON_CLASS,
    experienceLevel: 'Beginner',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // NOTE: Ensure your filename in netlify/functions/ is exactly 'enrollments.ts'
      // If the filename is 'enrollment.ts', remove the 's' below.
      const response = await fetch('/.netlify/functions/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: result.message });
        // Reset form to defaults
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          course: CourseType.SOFTWARE_ENGINEERING,
          experienceLevel: 'Beginner',
          message: ''
        });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.error || 'Failed to submit enrollment. Please check all fields.' 
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-4xl font-bold text-white mb-4 uppercase tracking-wider">Course Enrollment</h1>
          <p className="text-gray-400">Join the elite cohort. <span className="text-toyoorange italic">a step into the future</span> starts here.</p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden bg-white/5 backdrop-blur-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-toyoorange/10 blur-[60px] -z-10"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">First Name *</label>
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-all"
                  placeholder="Elijah"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Last Name *</label>
                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-all"
                  placeholder="Abolaji"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number *</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-all"
                  placeholder="+234 800 000 0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Preferred Course *</label>
                <select
                  required
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-all cursor-pointer"
                >
                  {COURSES.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Experience Level *</label>
                <select
                  required
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-all cursor-pointer"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Additional Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue transition-all resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>

            {status.type && (
              <div className={`p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${
                status.type === 'success' 
                ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <p className="text-sm">{status.message}</p>
              </div>
            )}

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-toyoorange hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  <span>Submitting Enrollment...</span>
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