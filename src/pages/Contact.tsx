
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h1 className="font-orbitron text-4xl font-bold text-white">Get In Touch</h1>
              <p className="text-gray-400 text-lg">
                Have a project idea? Want to join our academy? Or interested in our incubation hub? 
                Drop us a line and let's build the future together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-toyoblue/10 rounded-xl text-toyoblue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Office Address</h4>
                    <p className="text-gray-400">123 Tech Hub Ave, Ikeja, Lagos, Nigeria.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-toyoorange/10 rounded-xl text-toyoorange">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email Us</h4>
                    <p className="text-gray-400">hello@toyotechnict.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-toyoblue/10 rounded-xl text-toyoblue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Call Us</h4>
                    <p className="text-gray-400">+234 800 TOYO TECH</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue" placeholder="Email Address" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Subject</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-toyoblue resize-none" placeholder="Your message..."></textarea>
                </div>
                <button className="w-full bg-toyoblue hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
