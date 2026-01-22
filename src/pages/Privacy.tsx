
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="font-orbitron text-4xl font-bold text-white mb-12">Privacy Policy</h1>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Data Collection</h2>
            <p>At ToyotechICT Solutions, we collect personal information such as name, email, and phone number exclusively for enrollment and communication purposes. This data is stored securely and never sold to third parties.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Usage of Information</h2>
            <p>Your data helps us process your enrollment applications, send important updates about your chosen tracks, and improve our educational services. We use Google Sheets to record applications which are managed by our internal administration team.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Security</h2>
            <p>We implement industry-standard security measures to protect your information. Access to enrollment records is restricted to authorized personnel only.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Third Parties</h2>
            <p>We may use third-party tools (like analytics) to understand website usage. These tools might use cookies to track anonymous behavior. We do not share your direct contact information with these partners.</p>
          </section>

          <p className="text-sm pt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
