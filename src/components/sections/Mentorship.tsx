import React from 'react';
import { Users, Star, MessageSquare } from 'lucide-react';
import { useForm } from '@/hooks/useForm';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { SectionHeader } from '@/components/ui/SectionHeader';

const areaOptions = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Development' },
  { value: 'data', label: 'Data Science' },
  { value: 'cloud', label: 'Cloud Computing' },
];

export const Mentorship = () => {
  const initialFormState = {
    fullName: '',
    email: '',
    areaOfInterest: 'web',
  };

  const handleSubmit = async (data: Record<string, string>) => {
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
        <SectionHeader
          title="Mentorship Program"
          description="Get guidance from industry experts"
        />

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
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Select
                label="Area of Interest"
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                options={areaOptions}
              />
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                className="w-full"
              >
                Apply Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};