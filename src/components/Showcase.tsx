import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  organization: string;
  description: string;
  results: string;
  image: string;
  link: string;
  delay: number;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, organization, description, results, image, link, delay }) => {
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
      className="group"
    >
      <div className="card border border-white/10 bg-surface-light hover:shadow-neon">
        <div className="mb-4 h-48 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-2">
          <div className="mb-4">
            <span className="mb-2 inline-block text-sm text-text-secondary">{organization}</span>
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm text-text-secondary">{description}</p>
          </div>
          
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <p className="text-sm font-medium text-secondary">{results}</p>
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-full p-1 transition-colors hover:bg-secondary/10"
            >
              <ArrowUpRight className="h-5 w-5 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Showcase: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const caseStudies = [
    {
      title: 'Business-Government Platform Integration',
      organization: 'P2H Digital Solutions',
      description: 'Streamlined platform connecting businesses with government services, reducing bureaucratic barriers and improving service delivery.',
      results: 'Improved business-gov interaction',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://p2h.com/case-studies/business-government-platform/?utm_source=chatgpt.com'
    },
    {
      title: 'National Health Workforce Analytics',
      organization: 'Indonesia NHWA Program',
      description: 'Comprehensive health workforce data system enabling evidence-based policy decisions and workforce planning.',
      results: 'Enhanced workforce planning',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://hrh2030program.org/indonesia-nhwa-case-study/?utm_source=chatgpt.com'
    },
    {
      title: 'Education to Earnings Data System',
      organization: 'New Jersey Department of Education',
      description: 'Integrated data system tracking student outcomes from education through career progression, informing policy decisions.',
      results: 'Better education-career alignment',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://careertech.org/resource/case-study-new-jerseys-education-to-earnings-data-system/?utm_source=chatgpt.com'
    },
  ];
  
  return (
    <section id="showcase" className="section bg-surface">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
            Case Studies
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            See WorkNET in <span className="title-gradient">Action</span>
          </h2>
          <p className="text-text-secondary">
            Discover how organizations across industries are leveraging WorkNET to transform their digital infrastructure and improve operational efficiency.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudy 
              key={index}
              {...caseStudy}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="/case-studies" className="btn btn-outline">
            View All Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;