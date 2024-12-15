import React from 'react';
import { Users, Star, MessageSquare, ArrowRight } from 'lucide-react';
import { useForm } from '../hooks/useForm';
import { toast } from 'react-hot-toast';

const Mentorship = () => {
  const initialFormState = {
    fullName: '',
    email: '',
    areaOfInterest: 'Web Development',
  };

  const handleSubmit = async (data: Record<string, string>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Application submitted successfully!');
  };

  const { formData, errors, isSubmitting, handleChange, handleSubmit: onSubmit } = useForm(
    initialFormState,
    handleSubmit
  );

  return (
    <section id="mentorship" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Mentorship Program</h2>
          <p className="text-xl text-gray-600">Get guidance from industry experts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-6">Why Choose Our Mentorship?</h3>
            <div className="space-y-8">
              {[
                {
                  icon: Users,
                  title: 'Expert Mentors',
                  description: 'Learn from professionals with years of industry experience',
                },
                {
                  icon: Star,
                  title: 'Personalized Guidance',
                  description: 'Get customized advice for your career growth',
                },
                {
                  icon: MessageSquare,
                  title: 'Regular Sessions',
                  description: 'Weekly one-on-one meetings with your mentor',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-glow group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Join Our Mentorship Program</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                <select 
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Data Science</option>
                  <option>Cloud Computing</option>
                </select>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Apply Now'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;