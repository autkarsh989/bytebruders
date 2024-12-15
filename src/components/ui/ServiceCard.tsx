import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/types/service';

export const ServiceCard: React.FC<Service> = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient 
}) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-lg card-hover overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} mb-6 shadow-glow group-hover:scale-110 transition-transform`}>
        <Icon className="h-6 w-6 text-white animate-glow" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6">
        <button className="text-sm font-semibold text-gray-900 flex items-center group-hover:text-blue-600 transition-colors">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};