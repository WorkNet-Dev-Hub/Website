import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Layers, Workflow, Shield, Users, Clock } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Layers,
      title: "Infrastructure Assessment",
      description: "Our experts analyze your current digital infrastructure, identifying opportunities for optimization and integration.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Workflow,
      title: "Custom Implementation",
      description: "We develop a tailored implementation plan that aligns with your organization's specific needs and goals.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Shield,
      title: "Secure Integration",
      description: "Your systems are securely integrated into the WorkNET platform with minimal disruption to operations.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Users,
      title: "Team Onboarding",
      description: "We provide comprehensive training to ensure your team can fully leverage WorkNET's capabilities.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-white py-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Implementation Process
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              How <span className="text-primary">WorkNET</span> Works
            </h1>
            <p className="text-lg text-gray-600">
              Our streamlined implementation process ensures a smooth transition to the WorkNET platform, minimizing disruption while maximizing value.
            </p>
          </div>

          {/* Implementation Steps */}
          <div className="mt-20">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="card group hover:shadow-lg">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${step.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                      <step.icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 transform lg:block">
                      <ArrowRight className="h-8 w-8 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="mt-20 rounded-2xl bg-white border border-gray-200 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">The WorkNET Architecture</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Digital Highway Infrastructure</h3>
                <p className="mb-6 text-gray-600">
                  WorkNET operates as a digital highway system, creating secure pathways for data, processes, and communications. 
                  Just like physical highways connect cities, our platform connects departments, agencies, and external systems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multi-Layer Security</h4>
                      <p className="text-sm text-gray-600">Each data pathway is protected by multiple security layers, ensuring information travels safely</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-secondary/10 p-2">
                      <Workflow className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Intelligent Routing</h4>
                      <p className="text-sm text-gray-600">Smart algorithms route requests and data through the most efficient pathways</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Users className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Universal Access Points</h4>
                      <p className="text-sm text-gray-600">Standardized interfaces allow any authorized user to access any connected system</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Digital infrastructure visualization"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Real-World Impact */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Real-World Impact</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Time Savings</h3>
                <p className="text-gray-600">
                  Automated workflows and streamlined processes reduce manual tasks by up to 80%, 
                  allowing staff to focus on high-value activities.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Enhanced Security</h3>
                <p className="text-gray-600">
                  Centralized security management and real-time threat monitoring provide 
                  enterprise-grade protection for all connected systems.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Better Collaboration</h3>
                <p className="text-gray-600">
                  Break down silos between departments with unified communication tools 
                  and shared workspaces that promote cross-functional teamwork.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Methodology */}
          <div className="mt-16 rounded-2xl bg-white border border-gray-200 p-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Our Implementation Methodology</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Discovery & Planning</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive assessment of your current systems, workflows, and pain points. 
                    Our team works closely with stakeholders to understand unique requirements and develop a customized implementation strategy.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Phased Deployment</h3>
                  <p className="text-gray-600">
                    Implementation happens in carefully planned phases to minimize disruption. We start with pilot programs, 
                    gather feedback, and gradually expand across the organization while maintaining full operational continuity.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Continuous Optimization</h3>
                  <p className="text-gray-600">
                    Post-implementation, we provide ongoing monitoring, optimization, and support. 
                    Our platform learns from usage patterns and automatically suggests improvements to enhance efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20">
            <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 text-white md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
                  <p className="mb-6">
                    Transform your organization's digital infrastructure with WorkNET. Our team is ready to guide you through the implementation process.
                  </p>
                  <a href="/contact" className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-gray-100">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold">15+</div>
                    <p className="text-white/90">Years of Experience</p>
                    <div className="mb-2 mt-6 text-4xl font-bold">1000+</div>
                    <p className="text-white/90">Successful Implementations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HowItWorksPage;