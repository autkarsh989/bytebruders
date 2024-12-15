import React from 'react';
import { BookOpen, Clock, Award, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const courses = [
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

const Courses = () => {
  const { dispatch } = useCart();

  const handleEnroll = (course: typeof courses[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: course.id,
        title: course.title,
        price: course.price,
        type: 'course',
      },
    });
    toast.success(`Enrolled in ${course.title}`);
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Educational Courses</h2>
          <p className="text-xl text-gray-600">Learn from industry experts and get certified</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full glass-effect">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span>{course.students.toLocaleString()} students enrolled</span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold gradient-text">${course.price}</span>
                  <button 
                    onClick={() => handleEnroll(course)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;