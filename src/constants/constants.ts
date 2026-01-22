import { CourseType } from '../../types';
import {type NavLink } from '../../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Courses', href: '#/courses' },
  { label: 'Incubation', href: '#/incubation' },
  { label: 'Careers', href: '#/careers' },
  { label: 'Contact', href: '#/contact' },
];

export const COURSES = Object.values(CourseType);

export const SITE_NAME = 'ToyotechICT Solutions';
export const TAGLINE = 'a step into the future';

export const COLORS = {
  blue: '#5680c4',
  orange: '#f26726',
};

export const TESTIMONIALS = [
  {
    name: "Racheal",
    role: "Data Analyst @ Rays Collections",
    content: "Transitioning from finance to IT was daunting until I joined the coding school at ToyotechnICT Solutions. Their curriculum is truly futuristic.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Paula Opurum",
    role: "Final Year Student, Veritas University",
    content: "The incubation hub didn't just give us space; they gave us the technical backbone to build our skill from 0 to 100% with their hands-on approach.",
    avatar: "https://i.pravatar.cc/150?u=chidi"
  },
  {
    name: "Mayowa Ajoye",
    role: "Data Scientist @ Barterverse",
    content: "The data analytics track is world-class. I was able to navigate the data space within the first few weeks of the course. The mentorship is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=james"
  }
];

