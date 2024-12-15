import { Globe, Smartphone, Code, Database, Cloud, Shield } from 'lucide-react';
import { Service } from '@/types/service';

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Database design, optimization, and management services.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Cloud infrastructure setup and management.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    gradient: 'from-red-500 to-pink-500',
  },
];