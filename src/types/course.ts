export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  price: number;
  rating: number;
  students: number;
  image: string;
}

export interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
}