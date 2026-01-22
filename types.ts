// Course constants
export const CourseType = {
  SOFTWARE_ENGINEERING: 'Software Engineering',
  DATA_ANALYTICS: 'Data Analytics',
  AI_MACHINE_LEARNING: 'AI & Machine Learning',
  CYBER_SECURITY: 'Cyber Security',
  UI_UX_DESIGN: 'UI/UX Design',
  CLOUD_COMPUTING: 'Cloud Computing',
  DIGITAL_MARKETING: 'Digital Marketing',
  DATA_SCIENCE: 'Data Science',
} as const;

export type CourseType = typeof CourseType[keyof typeof CourseType];

// Rest of your code remains the same
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