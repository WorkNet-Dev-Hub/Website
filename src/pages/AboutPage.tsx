import React from 'react';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, TrendingUp, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to transforming how organizations operate in the digital age, making technology work for people, not the other way around."
    },
    {
      icon: Users,
      title: "People-First",
      description: "Every solution we build prioritizes user experience and human-centered design, ensuring technology enhances rather than complicates work."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our platform serves organizations worldwide, from local agencies to multinational enterprises, creating positive change at scale."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in security, performance, and reliability, earning trust from the most demanding organizations."
    }
  ];


  return (
    <div className="pt-24">
      <About />
      
      {/* Company Mission & Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              WorkNET exists to bridge the gap between traditional organizational structures and the digital future. 
              We believe that technology should empower people and organizations to achieve their full potential, 
              not create barriers or complexity.
            </p>
            <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-8">
              <blockquote className="text-xl font-medium text-gray-900 italic">
                "To create the digital infrastructure that powers human progress, 
                enabling organizations to focus on their mission while we handle the technology."
              </blockquote>
              <p className="mt-4 text-gray-600">— WorkNET Leadership Team</p>
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${value.bgColor}`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">WorkNET by the Numbers</h2>
            <p className="text-gray-600">Building trust through transparency and measurable results</p>
          </motion.div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg bg-blue-50 p-6"
            >
              <p className="text-blue-800">
                WorkNET is currently in development as a concept for transforming digital work infrastructure. 
                We're exploring partnerships with government agencies and organizations to bring this vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What We <span className="text-secondary">Build</span>
              </h2>
              <p className="text-gray-600 mb-6">
                WorkNET specializes in creating comprehensive digital infrastructure solutions that serve as the backbone 
                for modern organizations. We don't just build software—we architect entire digital ecosystems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Digital Transformation Platform</h4>
                    <p className="text-gray-600">End-to-end solutions that modernize legacy systems and processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-secondary/10 p-2 mt-1">
                    <Heart className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Human-Centered Technology</h4>
                    <p className="text-gray-600">Intuitive interfaces and workflows designed around how people actually work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/10 p-2 mt-1">
                    <Globe className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable Infrastructure</h4>
                    <p className="text-gray-600">Cloud-native architecture that grows with your organization's needs</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="WorkNET team collaboration"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Organizations Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default AboutPage