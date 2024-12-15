import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    id: 'course-1',
    title: 'Full Stack Web Development',
    duration: '12 weeks',
    level: 'Intermediate',
    price: 599,
    rating: 4.8,
    students: 1234,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'course-2',
    title: 'Mobile App Development',
    duration: '10 weeks',
    level: 'Beginner',
    price: 499,
    rating: 4.9,
    students: 856,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'course-3',
    title: 'Data Science & Analytics',
    duration: '14 weeks',
    level: 'Advanced',
    price: 699,
    rating: 4.7,
    students: 2341,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
];