import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  const benefits = [
    
  ];
  
  return (
    <section id="contact" className="section bg-surface relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-radial from-secondary/30 via-secondary/10 to-transparent blur-3xl" />
      
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-white/10 bg-surface-light p-8 shadow-xl lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Get Started
              </span>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Transform Your <span className="title-gradient">Digital Infrastructure</span>?
              </h2>
              <p className="mb-8 text-text-secondary">
                Request a demo to see how WorkNET can revolutionize your agency's digital capabilities, enhance collaboration, and improve service delivery.
              </p>
              
              <ul className="mb-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="relative mb-8 rounded-xl border border-white/10 bg-surface p-4">
                <p className="text-sm text-text-secondary italic">
                  
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-surface-lighter" />
                  <div>
                    <p className="text-xs font-medium"></p>
                    <p className="text-xs text-text-secondary"></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-xl border border-white/10 bg-surface p-8 text-center"
                >
                  <div className="mb-6 rounded-full bg-secondary/10 p-3">
                    <CheckCircle className="h-12 w-12 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Request Received!</h3>
                  <p className="mb-8 text-text-secondary">
                    Thank you for your interest in WorkNET. One of our government solutions specialists will contact you within 24 hours to schedule your personalized demo.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="gradient-border relative space-y-4 rounded-xl border border-white/10 bg-surface p-0.5"
                >
                  <div className="rounded-[calc(0.75rem-2px)] bg-surface p-6 sm:p-8">
                    <h3 className="mb-6 text-xl font-semibold">Request Your Demo</h3>
                    
                    <div className="grid gap-4">
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="organization" className="mb-1 block text-sm font-medium">
                          Agency / Department
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formState.organization}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="mb-1 block text-sm font-medium">
                          Tell us about your needs
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary mt-6 w-full"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </span>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;