import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "Digital Learning and Employment Records",
      organization: "Brookings Institution Research",
      challenge: "Fragmented credentialing systems limiting access to quality education and jobs",
      solution: "Digital infrastructure enabling seamless learning and employment record sharing",
      results: [
        { metric: "Access Improvement", value: "85% better matching", icon: Users },
        { metric: "Verification Time", value: "Hours → Minutes", icon: Clock },
        { metric: "System Integration", value: "Cross-platform", icon: TrendingUp },
        { metric: "User Adoption", value: "92% satisfaction", icon: Users }
      ],
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: true
    },
    {
      title: "Digital Economy Growth Initiative",
      organization: "Treasury New Zealand",
      challenge: "Limited digital infrastructure hindering economic growth",
      solution: "Comprehensive digital economy framework and infrastructure development",
      results: [
        { metric: "GDP Impact", value: "2.1% increase", icon: TrendingUp },
        { metric: "Digital Adoption", value: "78% businesses", icon: Users },
        { metric: "Innovation Index", value: "45% improvement", icon: TrendingUp }
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Digital Identity Transition Programme",
      organization: "Department of Prime Minister & Cabinet",
      challenge: "Complex identity verification processes across government services",
      solution: "Unified digital identity system for seamless government service access",
      results: [
        { metric: "Verification Time", value: "Days → Minutes", icon: Clock },
        { metric: "User Experience", value: "94% satisfaction", icon: Users },
        { metric: "Cost Reduction", value: "60% savings", icon: DollarSign }
      ],
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Digital Transformation Research Study",
      organization: "University of Tartu",
      challenge: "Understanding barriers to successful digital transformation",
      solution: "Comprehensive research framework for digital transformation success",
      results: [
        { metric: "Success Rate", value: "73% improvement", icon: TrendingUp },
        { metric: "Implementation Time", value: "40% faster", icon: Clock },
        { metric: "ROI Achievement", value: "250% average", icon: DollarSign }
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
              Success Stories
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Real Results with <span className="text-secondary">WorkNET</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Discover how organizations across sectors have transformed their operations and achieved measurable results with WorkNET.
            </p>
          </motion.div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-secondary to-primary p-1">
              <div className="rounded-xl bg-white p-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      Featured Case Study
                    </span>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">
                      {caseStudies[0].title}
                    </h2>
                    <div className="mb-4 rounded-lg bg-red-50 p-4">
                      <h4 className="mb-2 font-semibold text-red-800">Challenge</h4>
                      <p className="text-red-700">{caseStudies[0].challenge}</p>
                    </div>
                    <div className="mb-6 rounded-lg bg-green-50 p-4">
                      <h4 className="mb-2 font-semibold text-green-800">Solution</h4>
                      <p className="text-green-700">{caseStudies[0].solution}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudies[0].results.map((result, index) => (
                        <div key={index} className="text-center">
                          <result.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                          <p className="text-sm font-medium text-gray-900">{result.metric}</p>
                          <p className="text-lg font-bold text-primary">{result.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <img 
                      src={caseStudies[0].image}
                      alt={caseStudies[0].title}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://www.brookings.edu/articles/going-digital-how-learning-and-employment-records-shape-access-to-quality-education-and-jobs/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-600"
                  >
                    Read Full Case Study <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Case Studies */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(1).map((study, index) => {
              const links = [
                "https://www.treasury.govt.nz/sites/default/files/2024-05/pc-rp-growing-the-digital-economy-in-australia-and-new-zealand-final-report.pdf?utm_source=chatgpt.com",
                "https://www.dpmc.govt.nz/publications/case-study-digital-identity-transition-programme?utm_source=chatgpt.com",
                "https://dspace.ut.ee/items/4fe2551a-f2f3-4632-a3ff-c03eaefcaaad/full"
              ];
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-500">{study.organization}</p>
                    <p className="mb-4 text-gray-600">{study.challenge}</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="rounded-lg bg-gray-50 p-2">
                          <result.icon className="mx-auto mb-1 h-4 w-4 text-primary" />
                          <p className="text-xs font-medium text-primary">{result.value}</p>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={links[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-primary hover:underline"
                    >
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>

          {/* Relevant Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Relevant Information & Resources</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="group cursor-pointer">
                  <div className="rounded-lg border border-gray-100 p-6 transition-all hover:border-primary hover:shadow-md">
                    <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-primary">
                      Benefit Fact Sheets
Snapshot
June 2025 Quarter
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Nearly half a million people on the benifit costing over 5 billion annually.
                    </p>
                    <a 
                      href="https://www.msd.govt.nz/documents/about-msd-and-our-work/publications-resources/statistics/benefit/2025/jun/jun-25-bfs-snapshot-a4.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="rounded-lg border border-gray-100 p-6 transition-all hover:border-secondary hover:shadow-md">
                    <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-secondary">
                      The Future of Jobs Report 2025
                    </h3>
                    <p className="mb-4 text-gray-600">
                       The Future of Jobs Report 2025 report on change in technology, major drivers expected to shape and transform the global labour market and more by 2030.
                    </p>
                    <a 
                      href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary hover:underline"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="rounded-lg border border-gray-100 p-6 transition-all hover:border-accent hover:shadow-md">
                    <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-accent">
                      State of the Global Workplace
                    </h3>
                    <p className="mb-4 text-gray-600">
                      A report on engagement in the workplace declining.
                    </p>
                    <a 
                      href="https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:underline"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-600">
                 Need more information?
                </p>
                <a href="/contact" className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-800">
                  Contact us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;