import React, { useState, useEffect } from 'react';
import { ComprehensiveCourseType } from '../../types';
import { Calendar, Clock, Code, Database, Zap, Users, BookOpen, CheckCircle, Award, Target, Smartphone, Globe, Layout, Shield, Cpu, Video } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import CourseDetailsModal from '../components/CourseDetailsModal';
import {type CourseForModal, type FullCourse, flattenCourse } from '../../types';

// Define the local course structure that matches your data
interface LocalCourse {
  id: number;
  title: string;
  level: string;
  duration: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string }>;
  courseType: 'comprehensive' | 'crash';
  detailedInfo: {
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

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseForModal | null>(null);


  const handleViewDetails = (course: FullCourse) => {
    const flatCourse = flattenCourse(course);
    setSelectedCourse(flatCourse);
  };

  // All available courses (matching your CourseType enum)
  const comprehensiveCourses: LocalCourse[] = [
    { 
      id: 1,
      title: ComprehensiveCourseType.SOFTWARE_ENGINEERING, 
      level: 'Professional', 
      duration: '6 Months', 
      desc: 'Master full-stack development using React, Node.js, Next.js, Django, Flask and modern cloud architectures. Build production-grade applications.',
      icon: Code,
      courseType: 'comprehensive',
      detailedInfo: {
        overview: 'Transform into a full-stack developer capable of building enterprise-level applications. This comprehensive program covers frontend, backend, databases, and deployment.',
        modules: [
          'HTML5, CSS3 & Modern JavaScript (ES6+)',
          'React.js & Next.js with TypeScript',
          'Node.js, Express & RESTful API Development',
          'Python with Django & Flask Frameworks',
          'Database Design: PostgreSQL, MongoDB & Redis',
          'Authentication & Authorization (JWT, OAuth)',
          'DevOps: Docker, CI/CD, AWS, Vercel Deployment',
          'Final Capstone: Full-stack Project Development'
        ],
        prerequisites: ['Basic computer literacy', 'No prior coding experience required'],
        outcomes: [
          'Build and deploy full-stack web applications',
          'Implement secure user authentication systems',
          'Design scalable database architectures',
          'Write clean, maintainable, and tested code',
          'Collaborate using Git and Agile methodologies'
        ],
        tools: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
        schedule: 'Mon/Wed/Fri 2-4 PM or Saturday Intensive 12 PM - 4 PM',
        price: '₦450,000 (Flexible payment plans available)',
        certification: 'ToyotechICT Full-Stack Developer Certification and CISCO certification'
      }
    },
    { 
      id: 2,
      title: ComprehensiveCourseType.DATA_ANALYTICS, 
      level: 'Intermediate', 
      duration: '4 Months', 
      desc: 'Learn to extract insights from complex data. Master Python, SQL, Tableau, and statistical modeling for business intelligence.',
      icon: Database,
      courseType: 'comprehensive',
      detailedInfo: {
        overview: 'Become a data-driven decision maker by mastering data analysis, visualization, and statistical modeling techniques.',
        modules: [
          'Excel and PowerBI for Data Analysis',
          'Python for Data Analysis: Pandas & NumPy',
          'SQL for Data Extraction & Manipulation',
          'Data Visualization with Matplotlib, Seaborn & Plotly',
          'Business Intelligence with Tableau & Power BI',
          'Statistical Analysis & Hypothesis Testing',
          'Predictive Analytics Fundamentals',
          'Real-world Data Analysis Project'
        ],
        prerequisites: ['Basic mathematics knowledge', 'Familiarity with Excel is helpful'],
        outcomes: [
          'Clean, transform, and analyze complex datasets',
          'Create interactive dashboards and reports',
          'Extract insights using SQL queries',
          'Apply statistical methods for business decisions',
          'Present data-driven recommendations effectively'
        ],
        tools: ['Python', 'Jupyter', 'SQL', 'Tableau', 'Power BI', 'Excel'],
        schedule: 'Mon/Wed/Fri 10 AM - 12 PM',
        price: '₦150,000',
        certification: 'ToyotechnICT Data Analyst Certification & CISCO Data Analytics Certification'
      }
    },
    { 
      id: 3,
      title: ComprehensiveCourseType.AI_MACHINE_LEARNING, 
      level: 'Advanced', 
      duration: '5 Months', 
      desc: 'Deep dive into Neural Networks, NLP, and Computer Vision. Build and deploy intelligent models using TensorFlow and PyTorch.',
      icon: Cpu,
      courseType: 'comprehensive',
      detailedInfo: {
        overview: 'Master artificial intelligence and machine learning to build intelligent systems and predictive models.',
        modules: [
          'Python for AI/ML: NumPy, Pandas, Scikit-learn',
          'Mathematics for ML: Linear Algebra & Calculus',
          'Supervised & Unsupervised Learning Algorithms',
          'Deep Learning with TensorFlow & PyTorch',
          'Natural Language Processing (NLP)',
          'Computer Vision & Image Recognition',
          'Model Deployment & MLOps',
          'Capstone: AI Product Development'
        ],
        prerequisites: ['Python programming knowledge', 'Basic statistics understanding'],
        outcomes: [
          'Build and train machine learning models',
          'Implement neural networks for complex problems',
          'Process and analyze text data with NLP',
          'Develop computer vision applications',
          'Deploy ML models to production'
        ],
        tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Hugging Face', 'FastAPI'],
        schedule: 'Tue/Thur 3-5:30 PM & Saturday 3 PM - 5 PM',
        price: '₦350,000',
        certification: 'ToyotechnICT AI/ML Engineer Certification & CISCO Certification'
      }
    },
    { 
      id: 4,
      title: ComprehensiveCourseType.CYBER_SECURITY, 
      level: 'Professional', 
      duration: '6 Months', 
      desc: 'Protect digital assets. Learn ethical hacking, network security, risk management, and security architecture.',
      icon: Shield,
      courseType: 'comprehensive',
      detailedInfo: {
        overview: 'Become a cybersecurity expert capable of protecting organizations from digital threats and vulnerabilities.',
        modules: [
          'Networking Fundamentals & Protocols',
          'Linux System Administration',
          'Cryptography & Encryption Techniques',
          'Ethical Hacking & Penetration Testing',
          'Network Security & Firewall Configuration',
          'Incident Response & Digital Forensics',
          'Cloud Security (AWS, Azure)',
          'Security Compliance & Risk Management',
          'Capstone: Security Assessment Project'
        ],
        prerequisites: ['Basic networking knowledge', 'Linux familiarity helpful'],
        outcomes: [
          'Identify and mitigate security vulnerabilities',
          'Perform ethical hacking and penetration tests',
          'Configure and manage network security tools',
          'Respond to security incidents effectively',
          'Implement security policies and compliance'
        ],
        tools: ['Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Kali Linux', 'AWS Security'],
        schedule: 'Mon/Wed/Fri 6-9 PM',
        price: '₦480,000',
        certification: 'ToyotechnICT Cybersecurity Analyst Certification & CISCO Certification'
      }
    },
    { 
      id: 5,
      title: ComprehensiveCourseType.UI_UX_DESIGN, 
      level: 'Beginner', 
      duration: '3 Months', 
      desc: 'Design intuitive digital experiences. Master Figma, user research, wireframing, and the psychology of interaction design.',
      icon: Layout,
      courseType: 'comprehensive',
      detailedInfo: {
        overview: 'Learn user-centered design principles to create beautiful, functional, and accessible digital products.',
        modules: [
          'Design Thinking & User Research Methods',
          'Wireframing & Prototyping in Figma',
          'UI Design Principles & Design Systems',
          'UX Research: User Testing & Analytics',
          'Interaction Design & Micro-interactions',
          'Accessibility & Inclusive Design',
          'Design Handoff & Developer Collaboration',
          'Portfolio Project: Complete Product Design'
        ],
        prerequisites: ['Basic computer skills', 'Creative mindset'],
        outcomes: [
          'Conduct user research and create personas',
          'Design wireframes, prototypes, and high-fidelity mockups',
          'Create and maintain design systems',
          'Test and iterate on designs based on user feedback',
          'Build a professional design portfolio'
        ],
        tools: ['Figma', 'Adobe XD', 'Miro', 'UserTesting', 'Google Analytics'],
        schedule: 'Tue/Thu 6-9 PM & Project work on weekends',
        price: '₦280,000',
        certification: 'ToyotechnICT UI/UX Designer Certification & CISCO Certification'
      }
    },
    { 
      id: 6,
      title: ComprehensiveCourseType.CLOUD_COMPUTING, 
      level: 'Intermediate', 
      duration: '4 Months', 
      desc: 'Master AWS, Azure, and Google Cloud. Learn DevOps practices, containerization with Docker, and Kubernetes orchestration.',
      icon: Globe,
      courseType: 'comprehensive',
      detailedInfo: {
        overview: 'Master cloud infrastructure and DevOps to build scalable, resilient, and cost-effective systems.',
        modules: [
          'Cloud Fundamentals (AWS, Azure, GCP)',
          'Infrastructure as Code with Terraform',
          'Containerization with Docker',
          'Orchestration with Kubernetes',
          'CI/CD Pipelines with Jenkins & GitHub Actions',
          'Serverless Architecture & Microservices',
          'Cloud Security & Cost Optimization',
          'Monitoring & Logging with CloudWatch/Prometheus',
          'Capstone: Multi-cloud Deployment Project'
        ],
        prerequisites: ['Basic Linux knowledge', 'Understanding of networking concepts'],
        outcomes: [
          'Deploy and manage applications on cloud platforms',
          'Implement Infrastructure as Code',
          'Containerize applications with Docker',
          'Orchestrate containers with Kubernetes',
          'Build automated CI/CD pipelines'
        ],
        tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
        schedule: 'Tue/Thu 6-9 PM & Saturday labs',
        price: '₦380,000',
        certification: 'ToyotechnICT Cloud & DevOps Engineer Certification & CISCO Certification'
      }
    }
  ];

  // Short-term Crash Courses with detailed information
  const crashCourses: LocalCourse[] = [
    { 
      id: 7,
      title: 'Data Analytics Bootcamp', 
      level: 'Beginner/Intermediate', 
      duration: '4-8 Weeks', 
      desc: 'Intensive training in data analysis, visualization, and business intelligence. Duration varies based on prior experience.',
      icon: Database,
      courseType: 'crash',
      detailedInfo: {
        overview: 'Quickly acquire essential data analysis skills for business intelligence and decision-making roles.',
        modules: [
          'Excel for Business Analysis (Advanced)',
          'SQL Fundamentals for Data Extraction',
          'Python Basics for Data Analysis',
          'Data Visualization with Power BI/Tableau',
          'Dashboard Development & Reporting',
          'Final Project: Business Analysis Case Study'
        ],
        prerequisites: ['Basic Excel knowledge', 'No programming experience required'],
        outcomes: [
          'Analyze business data using Excel and SQL',
          'Create interactive dashboards and reports',
          'Extract insights from business datasets',
          'Present data findings to stakeholders',
          'Automate routine data analysis tasks'
        ],
        tools: ['Excel', 'SQL', 'Power BI', 'Tableau', 'Python (optional)'],
        schedule: 'Weekday evenings (4 weeks) or Weekend intensives (8 weeks)',
        price: '₦120,000 - ₦180,000 (based on duration)',
        certification: 'ToyotechnICT Data Analysis Certificate'
      }
    },
    { 
      id: 8,
      title: 'Programming Fundamentals', 
      level: 'Beginner', 
      duration: '6 Weeks', 
      desc: 'Choose from Java, Python, C#, or Dart. Learn core programming concepts, syntax, and problem-solving skills.',
      icon: Code,
      courseType: 'crash',
      detailedInfo: {
        overview: 'Build a solid programming foundation with hands-on practice in your chosen language.',
        modules: [
          'Programming Basics: Variables, Data Types',
          'Control Structures & Functions',
          'Object-Oriented Programming Principles',
          'Error Handling & Debugging',
          'Basic Algorithms & Problem Solving',
          'Final Project: Console Application'
        ],
        prerequisites: ['Basic computer literacy', 'No prior coding experience required'],
        outcomes: [
          'Write basic programs in chosen language',
          'Understand programming logic and structures',
          'Debug and fix common programming errors',
          'Solve algorithmic problems',
          'Prepare for advanced programming courses'
        ],
        tools: ['Java/Python/C#/Dart', 'VS Code/IntelliJ', 'Git Basics'],
        schedule: 'Mon/Wed/Fri 11 - 1 PM or Saturday 10 AM - 4 PM',
        price: '₦130,000',
        certification: 'ToyotechnICT Programming Fundamentals Certificate & CISCO Certification'
      }
    },
    { 
      id: 9,
      title: 'Mobile App Development', 
      level: 'Intermediate', 
      duration: '8 Weeks', 
      desc: 'Build native and cross-platform mobile applications for iOS and Android using React Native or Flutter.',
      icon: Smartphone,
      courseType: 'crash',
      detailedInfo: {
        overview: 'Create professional mobile applications for both iOS and Android platforms.',
        modules: [
          'React Native/Flutter Fundamentals',
          'UI Components & Navigation',
          'State Management & Data Persistence',
          'API Integration & Authentication',
          'App Deployment to App Stores',
          'Final Project: Complete Mobile App'
        ],
        prerequisites: ['Basic JavaScript/Dart knowledge', 'Understanding of programming concepts'],
        outcomes: [
          'Build cross-platform mobile applications',
          'Implement responsive mobile UIs',
          'Integrate with REST APIs',
          'Manage app state effectively',
          'Deploy to Google Play Store & App Store'
        ],
        tools: ['React Native/Flutter', 'Expo', 'Firebase', 'REST APIs'],
        schedule: 'Tue/Thu 6-9 PM & Saturday project sessions',
        price: '₦150,000',
        certification: 'ToyotechnICT Mobile Developer Certificate'
      }
    },
    { 
      id: 10,
      title: 'Web Development Accelerator', 
      level: 'Beginner/Intermediate', 
      duration: '6 Weeks', 
      desc: 'Master HTML, CSS, JavaScript, and modern frameworks to build responsive, interactive websites.',
      icon: Globe,
      courseType: 'crash',
      detailedInfo: {
        overview: 'Quickly learn to build modern, responsive websites from scratch.',
        modules: [
          'HTML5 & Semantic Markup',
          'CSS3, Flexbox & Grid Layouts',
          'JavaScript Fundamentals & DOM Manipulation',
          'Responsive Design & Mobile Optimization',
          'Basic React.js for Interactive UIs',
          'Final Project: Portfolio Website'
        ],
        prerequisites: ['Basic computer skills', 'No prior web development experience required'],
        outcomes: [
          'Build responsive, accessible websites',
          'Write clean HTML, CSS, and JavaScript',
          'Implement interactive features with JavaScript',
          'Create mobile-friendly web designs',
          'Deploy websites to live servers'
        ],
        tools: ['HTML5', 'CSS3', 'JavaScript', 'React Basics', 'GitHub Pages'],
        schedule: 'Mon/Wed/Fri 6-8:30 PM',
        price: '₦120,000',
        certification: 'ToyotechnICT Web Developer Certificate'
      }
    },
    { 
      id: 11,
      title: 'No-Code CMS Mastery', 
      level: 'Beginner', 
      duration: '4 Weeks', 
      desc: 'Learn WordPress, Webflow, and other no-code platforms to build websites and manage content without coding.',
      icon: Layout,
      courseType: 'crash',
      detailedInfo: {
        overview: 'Build professional websites and manage content without writing code.',
        modules: [
          'WordPress Setup & Theme Customization',
          'Page Builders: Elementor & Divi',
          'Webflow Fundamentals & CMS',
          'E-commerce with WooCommerce/Shopify',
          'SEO Optimization & Analytics',
          'Final Project: Client Website'
        ],
        prerequisites: ['Basic computer skills', 'No coding experience required'],
        outcomes: [
          'Build websites with WordPress and Webflow',
          'Customize themes and templates',
          'Set up e-commerce functionality',
          'Optimize websites for search engines',
          'Manage website content effectively'
        ],
        tools: ['WordPress', 'Webflow', 'Elementor', 'WooCommerce', 'Google Analytics'],
        schedule: 'Tue/Thu 6-8 PM & weekend workshops',
        price: '₦80,000',
        certification: 'ToyotechnICT No-Code Developer Certificate'
      }
    },
    { 
      id: 12,
      title: 'Digital Marketing & SEO', 
      level: 'Beginner', 
      duration: '4 Weeks', 
      desc: 'Master SEO, social media marketing, email campaigns, and analytics to drive online business growth.',
      icon: Target,
      courseType: 'crash',
      detailedInfo: {
        overview: 'Acquire essential digital marketing skills to promote businesses online effectively.',
        modules: [
          'SEO Fundamentals & Keyword Research',
          'Social Media Marketing (Facebook, Instagram)',
          'Email Marketing & Automation',
          'Google Ads & PPC Campaigns',
          'Content Marketing & Blogging',
          'Analytics: Google Analytics & Social Insights',
          'Final Project: Digital Marketing Campaign'
        ],
        prerequisites: ['Basic computer skills', 'Familiarity with social media platforms'],
        outcomes: [
          'Develop and execute digital marketing strategies',
          'Optimize websites for search engines',
          'Create effective social media campaigns',
          'Analyze marketing performance metrics',
          'Run PPC advertising campaigns'
        ],
        tools: ['Google Analytics', 'Facebook Ads', 'Mailchimp', 'SEMrush', 'Canva'],
        schedule: 'Mon/Wed 6-9 PM & practical assignments',
        price: '₦100,000',
        certification: 'ToyotechnICT Digital Marketing Certificate'
      }
    },
    { 
      id: 13,
      title: 'Content Creation & Video Editing', 
      level: 'Beginner', 
      duration: '4 Weeks', 
      desc: 'Learn content creation, video editing, and storytelling for social media and digital platforms.',
      icon: Video,
      courseType: 'crash',
      detailedInfo: {
        overview: 'Master the art of creating engaging content and professional video editing.',
        modules: [
          'Content Strategy & Storytelling',
          'Video Shooting & Production Basics',
          'Adobe Premiere Pro Fundamentals',
          'Canva & Graphic Design for Content',
          'YouTube & Social Media Optimization',
          'Final Project: Content Portfolio'
        ],
        prerequisites: ['Basic computer skills', 'Smartphone with camera'],
        outcomes: [
          'Create engaging video content',
          'Edit professional videos using Premiere Pro',
          'Design graphics for social media',
          'Develop content strategies',
          'Optimize content for different platforms'
        ],
        tools: ['Adobe Premiere Pro', 'Canva', 'CapCut', 'Adobe Photoshop'],
        schedule: 'Weekend workshops (Saturdays 10 AM - 4 PM)',
        price: '₦85,000',
        certification: 'ToyotechnICT Content Creator Certificate'
      }
    }
  ];

  // Fix for smooth scrolling - Add this useEffect
  useEffect(() => {
    // Only handle section navigation within this page
    const handleInternalNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]:not([href*="/"])');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleInternalNavigation);
    
    return () => {
      document.removeEventListener('click', handleInternalNavigation);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen py-24 animate-in fade-in duration-700">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
              Our Learning <span className="text-toyoorange">Tracks</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From comprehensive career programs to intensive crash courses, we offer pathways for every learning goal.
              <i> a step into the future</i> starts with the right skills.
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#comprehensive" className="px-4 py-2 rounded-full bg-toyoblue/10 text-toyoblue text-sm font-bold hover:bg-toyoblue/20 transition-colors">
                Comprehensive Programs
              </a>
              <a href="#crash" className="px-4 py-2 rounded-full bg-toyoorange/10 text-toyoorange text-sm font-bold hover:bg-toyoorange/20 transition-colors">
                Crash Courses
              </a>
              <a href="#features" className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition-colors">
                Program Features
              </a>
            </div>
          </div>

          {/* Comprehensive Courses Section */}
          <div id="comprehensive" className="mb-24 scroll-mt-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-orbitron text-3xl font-bold text-white mb-2">Comprehensive Career Programs</h2>
                <p className="text-gray-500">In-depth training for career transformation (3-6 months)</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="px-4 py-2 rounded-full bg-toyoblue/10 text-toyoblue text-sm font-bold">
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Industry Certifications
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-toyoblue/10 text-toyoblue text-sm font-bold">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    3-6 Months
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comprehensiveCourses.map((course) => (
                <CourseCard
                  key={`comprehensive-${course.id}`}
                  title={course.title}
                  level={course.level}
                  duration={course.duration}
                  desc={course.desc}
                  icon={course.icon}
                  courseType={course.courseType}
                  onViewDetails={() => handleViewDetails(course)}
                />
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-2xl bg-cardbg/30 border border-white/5">
                <div className="text-2xl font-bold text-toyoblue mb-2">6</div>
                <div className="text-sm text-gray-400">Programs</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-cardbg/30 border border-white/5">
                <div className="text-2xl font-bold text-toyoorange mb-2">500+</div>
                <div className="text-sm text-gray-400">Graduates</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-cardbg/30 border border-white/5">
                <div className="text-2xl font-bold text-toyoblue mb-2">95%</div>
                <div className="text-sm text-gray-400">Job Placement</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-cardbg/30 border border-white/5">
                <div className="text-2xl font-bold text-toyoorange mb-2">1:1</div>
                <div className="text-sm text-gray-400">Mentorship</div>
              </div>
            </div>
          </div>

          {/* Short-term Crash Courses Section */}
          <div id="crash" className="mb-24 scroll-mt-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-orbitron text-3xl font-bold text-white mb-2">Short-term Crash Courses</h2>
                <p className="text-gray-500">Intensive training for quick skill acquisition (4-12 weeks)</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="px-4 py-2 rounded-full bg-toyoorange/10 text-toyoorange text-sm font-bold">
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Fast-track Learning
                  </span>
                </div>
                <div className="px-4 py-2 rounded-full bg-toyoorange/10 text-toyoorange text-sm font-bold">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    4-12 Weeks
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crashCourses.map((course) => (
                <CourseCard
                  key={`crash-${course.id}`}
                  title={course.title}
                  level={course.level}
                  duration={course.duration}
                  desc={course.desc}
                  icon={course.icon}
                  courseType={course.courseType}
                  onViewDetails={() => handleViewDetails(course)}
                />
              ))}
            </div>

            {/* Crash Course Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-cardbg/50 border border-white/5 hover:border-toyoorange/30 transition-all hover:-translate-y-1">
                <h4 className="font-bold text-white mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-toyoorange" />
                  Flexible Duration
                </h4>
                <p className="text-sm text-gray-500">Courses adapt to your experience level (4-8 weeks)</p>
              </div>
              <div className="p-6 rounded-2xl bg-cardbg/50 border border-white/5 hover:border-toyoblue/30 transition-all hover:-translate-y-1">
                <h4 className="font-bold text-white mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-toyoblue" />
                  Rolling Admissions
                </h4>
                <p className="text-sm text-gray-500">Start anytime - new cohorts begin monthly</p>
              </div>
              <div className="p-6 rounded-2xl bg-cardbg/50 border border-white/5 hover:border-toyoorange/30 transition-all hover:-translate-y-1">
                <h4 className="font-bold text-white mb-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-toyoorange" />
                  Hands-on Projects
                </h4>
                <p className="text-sm text-gray-500">Build real-world portfolios during the course</p>
              </div>
            </div>
          </div>

          {/* Learning Support Section */}
          <div id="features" className="mb-20 p-12 glass rounded-3xl border border-white/5 scroll-mt-24">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-8 text-center">What Makes Our Programs Unique</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 group hover:-translate-y-2 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toyoblue/10 text-toyoblue text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-white mb-2">1:1 Mentorship</h4>
                <p className="text-sm text-gray-500">Personalized guidance from industry experts</p>
              </div>
              <div className="text-center p-6 group hover:-translate-y-2 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toyoorange/10 text-toyoorange text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-white mb-2">Project-Based</h4>
                <p className="text-sm text-gray-500">Build portfolio projects employers value</p>
              </div>
              <div className="text-center p-6 group hover:-translate-y-2 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toyoblue/10 text-toyoblue text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-white mb-2">Industry-Recognized</h4>
                <p className="text-sm text-gray-500">Certifications valued by employers</p>
              </div>
              <div className="text-center p-6 group hover:-translate-y-2 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toyoorange/10 text-toyoorange text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-white mb-2">Career Support</h4>
                <p className="text-sm text-gray-500">Resume review, interview prep, job placement</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 p-12 glass rounded-[3rem] text-center border border-toyoblue/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-toyoblue/5 via-transparent to-toyoorange/5"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-4">Not sure which track is right for you?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you're looking for a career change or quick skill upgrade, our advisors will help you choose the perfect program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#/contact" className="bg-toyoblue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all inline-block hover:-translate-y-1">
                  Schedule Career Consultation
                </a>
                <a href="#/enroll" className="border border-toyoorange text-toyoorange px-8 py-4 rounded-xl font-bold hover:bg-toyoorange/10 transition-all inline-block hover:-translate-y-1">
                  View All Course Details
                </a>
              </div>
            </div>
          </div>

          {/* Course Comparison */}
          <div className="mt-20 glass p-8 rounded-3xl">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-8 text-center">Choose Your Learning Path</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-toyoblue/10 to-transparent border border-toyoblue/20 hover:-translate-y-2 transition-transform">
                <h4 className="text-xl font-bold text-white mb-4">Comprehensive Programs</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoblue rounded-full mr-3"></div>3-6 months duration</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoblue rounded-full mr-3"></div>Career transformation focus</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoblue rounded-full mr-3"></div>Job placement support</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoblue rounded-full mr-3"></div>Portfolio development</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoblue rounded-full mr-3"></div>Industry certifications</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-toyoorange/10 to-transparent border border-toyoorange/20 hover:-translate-y-2 transition-transform">
                <h4 className="text-xl font-bold text-white mb-4">Crash Courses</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoorange rounded-full mr-3"></div>4-12 weeks duration</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoorange rounded-full mr-3"></div>Quick skill acquisition</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoorange rounded-full mr-3"></div>Flexible scheduling</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoorange rounded-full mr-3"></div>Industry-specific training</li>
                  <li className="flex items-center text-gray-300"><div className="w-2 h-2 bg-toyoorange rounded-full mr-3"></div>Certificate of completion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Modal for detailed curriculum */}
      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
};

export default Courses;