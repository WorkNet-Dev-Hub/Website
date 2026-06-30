import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Survey: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [formState, setFormState] = useState({
    role: '',
    department: '',
    challenges: '',
    requirements: '',
    timeline: '',
    budget: '',
    contact: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  return (
    <section id="survey" className="section bg-surface relative overflow-hidden">
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
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Digital Infrastructure Survey
              </span>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Help Us Understand Your <span className="title-gradient">Digital Needs</span>
              </h2>
              <p className="mb-8 text-text-secondary">
                Share your requirements and challenges to help us better understand how WorkNET can serve your organization's digital transformation journey.
              </p>
            </div>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-surface p-8 text-center"
              >
                <div className="mb-6 rounded-full bg-secondary/10 p-3">
                  <CheckCircle className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Thank You for Your Input!</h3>
                <p className="mb-8 text-text-secondary">
                  Your responses will help us better understand the digital infrastructure needs of government organizations. We'll use this information to enhance WorkNET's capabilities.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline"
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="role" className="mb-2 block text-sm font-medium">
                      Your Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formState.role}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="mb-2 block text-sm font-medium">
                      Department/Agency
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formState.department}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="challenges" className="mb-2 block text-sm font-medium">
                    Current Digital Infrastructure Challenges
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={4}
                    value={formState.challenges}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="requirements" className="mb-2 block text-sm font-medium">
                    Key Requirements for Digital Infrastructure
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formState.requirements}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="timeline" className="mb-2 block text-sm font-medium">
                      Expected Implementation Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formState.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="0-6">0-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12-24">1-2 years</option>
                      <option value="24+">2+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="<100k">Under $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1 million</option>
                      <option value="1m+">$1 million+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact" className="mb-2 block text-sm font-medium">
                    Contact Information
                  </label>
                  <input
                    type="email"
                    id="contact"
                    name="contact"
                    placeholder="Your work email"
                    value={formState.contact}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
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
                      Submit Survey <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Survey;