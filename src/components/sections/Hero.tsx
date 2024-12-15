import React from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-96 h-96 top-1/2 right-0 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-white/90">Transforming Ideas into Reality</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build Your Future with
              <span className="block gradient-text">Tech Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Empowering businesses through cutting-edge technology solutions, expert education, 
              and personalized mentorship programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" icon={ArrowRight}>Get Started</Button>
              <Button variant="outline" icon={Code}>View Services</Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-2xl opacity-30 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};