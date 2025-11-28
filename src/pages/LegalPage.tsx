import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, Eye } from 'lucide-react';

const LegalPage: React.FC = () => {
  const legalSections = [
    {
      icon: FileText,
      title: "Terms of Service",
      description: "Complete terms and conditions for using WorkNET services",
      lastUpdated: "March 1, 2025"
    },
    {
      icon: Eye,
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      lastUpdated: "February 15, 2025"
    },
    {
      icon: Shield,
      title: "Data Processing Agreement",
      description: "GDPR-compliant data processing terms for enterprise customers",
      lastUpdated: "January 20, 2025"
    },
    {
      icon: Scale,
      title: "Service Level Agreement",
      description: "Guaranteed service levels and performance commitments",
      lastUpdated: "February 1, 2025"
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
            <span className="mb-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
              Legal Information
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Legal & <span className="text-gray-700">Compliance</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Transparent legal documentation and compliance information for WorkNET services.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {legalSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <section.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{section.title}</h3>
                  <p className="mb-4 text-gray-600">{section.description}</p>
                  <p className="text-sm text-gray-500">Last updated: {section.lastUpdated}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-blue-900">Important Notice</h3>
              <p className="text-blue-800">
                While WorkNET is committed to maintaining the highest standards of legal compliance and data protection, this page is currently in progress.
                
                All services are designed to meet federal, state, and local regulatory requirements. For specific 
                compliance questions or legal inquiries, please contact our us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;