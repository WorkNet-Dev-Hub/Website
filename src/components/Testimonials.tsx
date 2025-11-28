import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, organization, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="card border border-white/10 bg-gradient-to-br from-surface to-surface-light"
    >
      <Quote className="mb-4 h-8 w-8 text-primary" />
      <blockquote className="mb-6 text-white/90">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-surface-lighter"></div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-text-secondary">{role}, {organization}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const testimonials = [
    {
      quote: "WorkNET has completely transformed how our departments collaborate. What used to take weeks now happens in hours. The digital highway concept isn't just marketing—it's a real paradigm shift.",
      author: "Sarah Johnson",
      role: "CIO",
      organization: "Federal Communications Commission"
    },
    {
      quote: "The security features of WorkNET gave us the confidence to finally digitize our most sensitive operations. The platform's compliance with stringent federal regulations made approval a straightforward process.",
      author: "Mark Reynolds",
      role: "Director of Digital Transformation",
      organization: "Department of Defense"
    },
    {
      quote: "The speed at which we were able to deploy WorkNET across our organization was remarkable. Within months, we saw measurable improvements in efficiency and significant cost savings.",
      author: "Jennifer Chen",
      role: "Deputy Administrator",
      organization: "General Services Administration"
    }
  ];
  
  return (
    <section id="testimonials" className="section grid-bg bg-background">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            Testimonials
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="title-gradient">Trusted</span> by Government Leaders
          </h2>
          <p className="text-text-secondary">
            Hear from the agencies and departments that have transformed their operations with WorkNET's digital infrastructure.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              {...testimonial}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;