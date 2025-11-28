import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption standards."
    },
    {
      icon: Lock,
      title: "Multi-Factor Authentication",
      description: "Advanced MFA options including biometric authentication and hardware tokens."
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 security monitoring with real-time threat detection and response."
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Built-in compliance with FISMA, FedRAMP, and other government security standards."
    }
  ];

  const certifications = [
    "FedRAMP High Authorization",
    "FISMA Compliance",
    "SOC 2 Type II",
    "ISO 27001 Certified",
    "NIST Cybersecurity Framework",
    "CJIS Security Policy Compliant"
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
            <span className="mb-3 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
              Security & Compliance
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Enterprise-Grade <span className="text-red-600">Security</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              WorkNET is built with security at its core, meeting the highest standards for government and enterprise data protection.
            </p>
          </motion.div>

          {/* Security Features */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <feature.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Security Certifications</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-gray-900">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Alert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16"
          >
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <div>
                  <h3 className="mb-2 font-semibold text-amber-800">Security Notice</h3>
                  <p className="text-amber-700">
                    WorkNET undergoes regular security audits and penetration testing. Our latest security assessment was completed in February 2025 with zero critical vulnerabilities found.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;