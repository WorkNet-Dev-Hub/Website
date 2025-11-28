import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  LayoutGrid, 
  Zap, 
  Link, 
  LineChart, 
  Users, 
  Layers, 
  Lock
} from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon: Icon, color }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${color} bg-opacity-10 transition-all duration-300 group-hover:scale-110`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        {/* Feature card background effect */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-radial from-secondary/5 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Background elements configuration
  const circles = [
    { size: 400, x: -100, y: 50, delay: 0, color: 'from-primary/20' },
    { size: 300, x: '85%', y: 200, delay: 0.2, color: 'from-secondary/20' },
    { size: 350, x: '40%', y: 400, delay: 0.4, color: 'from-primary/20' },
    { size: 250, x: '90%', y: 500, delay: 0.6, color: 'from-secondary/20' },
    { size: 320, x: -50, y: 600, delay: 0.8, color: 'from-primary/20' },
    { size: 280, x: '60%', y: 300, delay: 1, color: 'from-secondary/20' },
    { size: 220, x: '20%', y: 700, delay: 1.2, color: 'from-primary/20' },
    { size: 380, x: '75%', y: 100, delay: 1.4, color: 'from-secondary/20' },
  ];

  const features = [
    {
      title: 'Enhanced Security',
      description: 'End-to-end encryption and advanced threat detection keep sensitive data secure at all times.',
      icon: Shield,
      color: 'bg-primary text-primary',
    },
    {
      title: 'Unified Access',
      description: 'Single sign-on capabilities across all applications and services with granular permission controls.',
      icon: Lock,
      color: 'bg-secondary text-secondary',
    },
    {
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards providing actionable insights into operations and performance.',
      icon: LineChart,
      color: 'bg-accent text-accent',
    },
    {
      title: 'API Integration',
      description: 'Seamlessly connect legacy systems with modern applications via our comprehensive API ecosystem.',
      icon: Link, 
      color: 'bg-primary text-primary',
    },
    {
      title: 'Workflow Automation',
      description: 'Intelligent process automation reduces manual tasks and accelerates approval workflows.',
      icon: Zap,
      color: 'bg-secondary text-secondary', 
    },
    {
      title: 'Collaborative Tools',
      description: 'Purpose-built collaboration features for cross-team projects with secure document sharing.',
      icon: Users,
      color: 'bg-accent text-accent',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle the demands of enterprise-scale operations, from startups to large organizations.',
      icon: Layers,
      color: 'bg-primary text-primary',
    },
    {
      title: 'Network Resilience',
      description: 'Distributed infrastructure ensures consistent service availability even during peak demand.',
      icon: LayoutGrid,
      color: 'bg-secondary text-secondary',
    }
  ];
  
  return (
    <section id="features" className="section relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background circles */}
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-radial ${circle.color} to-transparent`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.6,
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            delay: circle.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
            filter: 'blur(80px)',
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(to right, #4F46E5 1px, transparent 1px), linear-gradient(to bottom, #4F46E5 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-custom relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Features
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Building the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Infrastructure</span> of Tomorrow
          </h2>
          <p className="text-gray-600">
            WorkNET provides a comprehensive suite of tools and capabilities designed for modern organizations. Our platform is built to power the next generation of digital transformation.
          </p>
        </motion.div>
        
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;