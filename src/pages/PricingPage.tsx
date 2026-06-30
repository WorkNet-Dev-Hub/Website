import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Building, Globe, Info } from 'lucide-react';

const PricingPage: React.FC = () => {
  const features = [
    "Universal digital work identity for all citizens",
    "Seamless integration across all government services",
    "Real-time employment and skills verification",
    "Automated tax and benefit calculations",
    "Cross-agency collaboration tools",
    "Digital credential and qualification management",
    "Career pathway recommendations and matching",
    "Employer-employee connection platform",
    "Skills development tracking and certification",
    "Economic impact analytics and reporting"
  ];

  const benefits = [
    {
      icon: Users,
      title: "For Citizens",
      description: "Streamlined access to employment services, benefits, and career development opportunities through a single digital identity."
    },
    {
      icon: Building,
      title: "For Employers",
      description: "Efficient talent acquisition, verified credentials, and simplified compliance with employment regulations."
    },
    {
      icon: Globe,
      title: "For Government",
      description: "Reduced administrative costs, improved service delivery, and comprehensive economic insights for policy making."
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
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Public Infrastructure Pricing
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Affordable <span className="text-primary">Digital Infrastructure</span> for Everyone
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              WorkNET operates as a public infrastructure platform, funded through a minimal contribution 
              that ensures universal access to modern digital work services.
            </p>
          </motion.div>

          {/* Pricing Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-1">
                <div className="rounded-xl bg-white p-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900">Public Infrastructure Model</h2>
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-primary">$1</div>
                    <div className="text-xl text-gray-600">per week, per working person</div>
                    <div className="mt-2 text-sm text-gray-500">Funded through existing tax infrastructure</div>
                  </div>
                  
                  <div className="mb-8 rounded-lg bg-blue-50 p-6">
                    <div className="flex items-start gap-3">
                      <Info className="h-6 w-6 text-blue-600 mt-1" />
                      <div className="text-left">
                        <h3 className="mb-2 font-semibold text-blue-900">How It Works</h3>
                        <p className="text-blue-800">
                          WorkNET operates as a government-backed public infrastructure platform, similar to roads or utilities. 
                          The minimal $1 weekly contribution per working person is collected through the existing tax system, 
                          ensuring universal access while maintaining financial sustainability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="mb-2 text-2xl font-bold text-secondary">$52</div>
                      <div className="text-sm text-gray-600">Annual cost per person</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-2xl font-bold text-accent">100%</div>
                      <div className="text-sm text-gray-600">Population coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-2xl font-bold text-primary">$0</div>
                      <div className="text-sm text-gray-600">Out-of-pocket costs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Funding Models */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Potential Funding Models</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Government-Backed Model</h3>
                <p className="mb-4 text-gray-600">
                  Fully funded through government budget allocation, treating WorkNET as essential public infrastructure 
                  like transportation or healthcare systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Universal access guaranteed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">No direct cost to individuals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Integrated with existing services</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Public-Private Hybrid</h3>
                <p className="mb-4 text-gray-600">
                  Collaborative funding between government, employers, and service providers, sharing costs 
                  based on usage and benefits received.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Shared investment model</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Employer participation incentives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Sustainable long-term funding</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">What's Included</h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits for Stakeholders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Benefits for All Stakeholders</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Economic Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16"
          >
            <div className="rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 p-8">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Economic Impact</h2>
              <div className="grid gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">75%</div>
                  <div className="text-sm text-gray-600">Reduction in administrative costs</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-secondary">$2.5B</div>
                  <div className="text-sm text-gray-600">Estimated annual savings</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-accent">40%</div>
                  <div className="text-sm text-gray-600">Faster job matching</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">User satisfaction rate</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default PricingPage;