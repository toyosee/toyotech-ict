
import React from 'react';
import { SITE_NAME, NAV_LINKS } from '../constants/constants';
import {Twitter, Linkedin, Github} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkbg border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              {'ToyotechICT'}<span className="text-toyoorange">solutions</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Empowering the next generation of tech innovators through skill acquisition, 
              expert training, and strategic incubation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-toyoblue transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-toyoblue transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-toyoblue transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-toyoblue transition-colors">{link.label}</a>
                </li>
              ))}
              <li><a href="#/privacy" className="hover:text-toyoblue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Address</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>NO.1 Gongola Road, Barnawa. Kaduna</li>
              <li>Email: info@toyotechnict.com, tyabolaji@gmail.com</li>
              <li>Phone: +234 80-6921-3941</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic">...a step into the future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
