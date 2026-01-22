// types.ts

// Separate comprehensive and crash courses
export const ComprehensiveCourseType = {
  SOFTWARE_ENGINEERING: 'Software Engineering',
  DATA_ANALYTICS: 'Data Analytics',
  AI_MACHINE_LEARNING: 'AI & Machine Learning',
  CYBER_SECURITY: 'Cyber Security',
  UI_UX_DESIGN: 'UI/UX Design',
  CLOUD_COMPUTING: 'Cloud Computing',
} as const;

export const CrashCourseType = {
  DATA_ANALYTICS_BOOTCAMP: 'Data Analytics Bootcamp',
  PROGRAMMING_FUNDAMENTALS: 'Programming Fundamentals',
  MOBILE_APP_DEVELOPMENT: 'Mobile App Development',
  WEB_DEVELOPMENT_ACCELERATOR: 'Web Development Accelerator',
  NO_CODE_CMS_MASTERY: 'No-Code CMS Mastery',
  DIGITAL_MARKETING: 'Digital Marketing & SEO',
  CONTENT_CREATION: 'Content Creation & Video Editing',
} as const;

export type ComprehensiveCourseType = typeof ComprehensiveCourseType[keyof typeof ComprehensiveCourseType];
export type CrashCourseType = typeof CrashCourseType[keyof typeof CrashCourseType];
export type CourseType = ComprehensiveCourseType | CrashCourseType;

// All courses combined (for backward compatibility)
export const CourseType = {
  ...ComprehensiveCourseType,
  ...CrashCourseType,
} as const;

// Rest of your interfaces
export interface EnrollmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: CourseType;
  experienceLevel: 'Beginner' | 'Intermediate' | 'Professional';
  message?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface CourseDetailedInfo {
  overview: string;
  modules: string[];
  prerequisites: string[];
  outcomes: string[];
  tools: string[];
  schedule: string;
  price: string;
  certification: string;
}

export interface FullCourse {
  id: number;
  title: string;
  level: string;
  duration: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string }>;
  courseType: 'comprehensive' | 'crash';
  detailedInfo: CourseDetailedInfo;
}

export interface CourseForModal {
  id: number;
  title: string;
  level: string;
  duration: string;
  desc: string;
  courseType: 'comprehensive' | 'crash';
  overview: string;
  modules: string[];
  prerequisites: string[];
  outcomes: string[];
  tools: string[];
  schedule: string;
  price: string;
  certification: string;
}

export const flattenCourse = (course: FullCourse): CourseForModal => {
  return {
    id: course.id,
    title: course.title,
    level: course.level,
    duration: course.duration,
    desc: course.desc,
    courseType: course.courseType,
    overview: course.detailedInfo.overview,
    modules: course.detailedInfo.modules,
    prerequisites: course.detailedInfo.prerequisites,
    outcomes: course.detailedInfo.outcomes,
    tools: course.detailedInfo.tools,
    schedule: course.detailedInfo.schedule,
    price: course.detailedInfo.price,
    certification: course.detailedInfo.certification,
  };
};