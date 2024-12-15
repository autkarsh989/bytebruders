import React from 'react';
import { Globe, Smartphone, Code, Database, Cloud, Shield, ArrowRight } from 'lucide-react';
import { ServiceCard } from './ui/ServiceCard';
import { SectionHeader } from './ui/SectionHeader';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Services"
          description="Comprehensive IT solutions for your business needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;