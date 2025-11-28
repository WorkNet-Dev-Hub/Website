import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Zap, Layers, Shield, Users, BarChart } from 'lucide-react';

const RoadmapPage: React.FC = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "completed",
      items: [
        {
          icon: Shield,
          title: "Enhanced Security Framework",
          description: "Advanced threat detection and zero-trust architecture implementation"
        },
        {
          icon: Users,
          title: "Improved User Management",
          description: "Streamlined user onboarding and role-based access controls"
        }
      ]
    },
    {
      quarter: "Q2 2025",
      status: "in-progress",
      items: [
        {
          icon: Zap,
          title: "AI-Powered Automation",
          description: "Machine learning algorithms for intelligent workflow optimization"
        },
        {
          icon: BarChart,
          title: "Advanced Analytics Dashboard",
          description: "Real-time insights and predictive analytics for better decision making"
        }
      ]
    },
    {
      quarter: "Q3 2025",
      status: "planned",
      items: [
        {
          icon: Layers,
          title: "Multi-Cloud Architecture",
          description: "Support for hybrid and multi-cloud deployments"
        },
        {
          icon: Users,
          title: "Citizen Portal Integration",
          description: "Direct citizen access portal with self-service capabilities"
        }
      ]
    },
    {
      quarter: "Q4 2025",
      status: "planned",
      items: [
        {
          icon: Shield,
          title: "Quantum-Ready Encryption",
          description: "Future-proof encryption standards for quantum computing era"
        },
        {
          icon: BarChart,
          title: "Blockchain Integration",
          description: "Immutable audit trails and smart contract capabilities"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-blue-600 bg-blue-100';
      case 'planned':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'in-progress':
        return Clock;
      case 'planned':
        return Calendar;
      default:
        return Calendar;
    }
  };

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
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              Product Roadmap
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The Future of <span className="text-accent">WorkNET</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Discover what's coming next in WorkNET's evolution. Our roadmap reflects our commitment to continuous innovation and customer feedback.
            </p>
          </motion.div>

          {/* Roadmap Timeline */}
          <div className="mt-16 space-y-12">
            {roadmapItems.map((quarter, quarterIndex) => {
              const StatusIcon = getStatusIcon(quarter.status);
              return (
                <motion.div
                  key={quarterIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: quarterIndex * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${getStatusColor(quarter.status)}`}>
                      <StatusIcon className="h-4 w-4" />
                      {quarter.quarter}
                    </div>
                    <div className="h-px flex-1 bg-gray-200"></div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {quarter.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (quarterIndex * 0.2) + (itemIndex * 0.1) }}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                      >
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feedback Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20"
          >
            <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 text-white">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-2xl font-bold">Shape Our Roadmap</h2>
                <p className="mb-6">
                  Your feedback drives our development priorities. Share your ideas and help us build the features that matter most to your organization.
                </p>
                <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-gray-100">
                  Submit Feedback
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;