import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid, Globe, Workflow, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen bg-cover bg-center pt-24"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        '--mouse-x': 0.5,
        '--mouse-y': 0.5,
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gray-900/80" />
      <div 
        className="pointer-events-none absolute left-[calc(var(--mouse-x)*100%)] top-[calc(var(--mouse-y)*100%)] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent opacity-60 blur-3xl transition-opacity duration-300"
        aria-hidden="true"
      />
      
      <div className="container-custom relative flex min-h-[calc(100vh-96px)] items-center">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Revolutionizing Digital Infrastructure
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              The <span className="title-gradient">Digital Highway</span> for Modern Work
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-300">
              Transform the working life with a modernised infrastructure that connects people, businesses, drives innovation and builds the future of digital innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://worknet-dev-hub.github.io/dashboard/"
                target="_blank" 
                className="btn btn-primary">
                See Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
                Learn More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-medium text-white"> Effective structure</span>
                </div>
                <p className="mt-2 text-sm text-gray-300">Seemlessly reducing time and money, for everyone</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-white">Employers and Employees </span>
                </div>
                <p className="mt-2 text-sm text-gray-300">Effortlessly working together</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-full w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
              <div className="flex h-10 items-center border-b border-white/10 bg-white/5 px-4">
                <div className="flex space-x-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="relative p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <LayoutGrid className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-white">Unified Platform</h3>
                    <p className="text-xs text-gray-300">One platform, endless possibilities</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="rounded-full bg-secondary/10 p-3">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-sm font-medium text-white">Work Identity</h3>
                    <p className="text-xs text-gray-300">Secure access management</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="rounded-full bg-accent/10 p-3">
                      <Workflow className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-sm font-medium text-white">Smart Workflows</h3>
                    <p className="text-xs text-gray-300">Automate with intelligence</p>
                  </div>
                  
                  <div className="col-span-2 flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-white">Real-time Collaboration</h3>
                    <p className="text-xs text-gray-300">Work together, seamlessly</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-radial from-secondary/30 via-primary/10 to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-radial from-primary/20 via-secondary/10 to-transparent blur-3xl" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      <div className="container-custom relative py-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">0</h3>
              <p className="mt-2 text-gray-300">Time wasted</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-secondary">24/7</h3>
              <p className="mt-2 text-gray-300">Platform Availability</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-accent">100%</h3>
              <p className="mt-2 text-gray-300">Use for everyone</p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white">The World is Evolving.</h2>
          <p className="mt-4 text-xl text-gray-300">Time to evolve with it.</p>
          <div className="mx-auto mt-8 max-w-2xl text-gray-300">
            <p>In today's fast-paced digital landscape, staying ahead means embracing transformation. WorkNET provides the foundation you need to build the future of work.</p>
          </div>
          <Link to="/how-it-works" className="btn btn-primary mt-8">
            Discover How <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;