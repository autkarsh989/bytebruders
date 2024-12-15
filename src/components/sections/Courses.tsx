import React from 'react';
import { BookOpen, Clock, Award, Star } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { courses } from '@/data/courses';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const Courses = () => {
  const handleEnroll = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      toast.success(`Enrolled in ${course.title}`);
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Educational Courses"
          description="Learn from industry experts and get certified"
        />

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
                  <Button 
                    onClick={() => handleEnroll(course.id)}
                    variant="primary"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};