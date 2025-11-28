import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, LayoutGrid, Zap, Link, BarChart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.section 
      id="about" 
      className="section bg-gray-50 relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          className="grid gap-12 md:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              About WorkNET
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Revolutionizing <span className="title-gradient">Digital Infrastructure</span>
            </h2>
            <p className="mb-6 text-gray-600">
              WorkNET creates a secure, efficient digital highway that connects all aspects of modern operations. We enable seamless collaboration, information flow, and service delivery across organizations of all sizes.
            </p>
            <p className="mb-8 text-gray-600">
              Built with cutting-edge technology, our platform addresses the challenges of legacy systems, data silos, and inefficient workflows that have historically hampered digital transformation.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div 
                className="flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-gray-900">Enhanced Security</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-gray-900">Increased Efficiency</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Link className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-900">Seamless Integration</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div 
              className="relative z-10 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">The Digital Highway Concept</h3>
              
              <motion.div 
                className="group relative mb-6 overflow-hidden rounded-lg bg-gray-50 p-5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <LayoutGrid className="h-10 w-10 text-secondary" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Just as physical highways connect cities and enable the flow of goods and people, 
                    WorkNET creates digital pathways that connect teams, applications, and data. 
                    This infrastructure allows information to flow securely and efficiently across 
                    your entire organization.
                  </p>
                </div>
              </motion.div>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-full bg-primary/10 p-2">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Measured Impact</h4>
                    <p className="text-sm text-gray-600">Organizations using WorkNET report 47% faster service delivery and 63% improvement in team collaboration.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-radial from-secondary/30 via-primary/10 to-transparent blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-radial from-primary/20 via-secondary/10 to-transparent blur-3xl" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;