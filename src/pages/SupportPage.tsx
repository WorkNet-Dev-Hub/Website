import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Clock, HelpCircle, FileText, Video } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Get instant help from our technical support team",
      availability: "24/7 for Enterprise customers",
      action: "Currently unavaillable"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      availability: "Mon-Fri, 6AM-8PM PST",
      action: "Currently unavaillable"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Submit detailed support requests via email",
      availability: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: Video,
      title: "Screen Sharing",
      description: "Get hands-on assistance with screen sharing sessions",
      availability: "By appointment",
      action: "Currently unavaillable"
    }
  ];

  const faqItems = [
    {
      question: "How long would WorkNET take to setup?",
      answer: "WorkNET is designed to create a seamlees transition from the norm to the new."
    },
    {
      question: "What if im worried about my privacy?",
      answer: "WorkNET aims for the highest level of keeping your information pivate and secure. Working with the government will enable complete security with out being invasive to any personal information. You decide who gets to see it."
    },
    {
      question: "What benifit do i gain from WorkNET?",
      answer: "The benifits to WorkNet is it creates an easier and more enjoyable work experience. WorkNET strives for efficiency and accessibility, saving time and money for everyone."
    },
    {
      question: "What does WorkNet offer",
      answer: "WorkNET offers a unique user interface that will be used instead of the traditional working system. Your CV, refrences, job search, academic records and other resources alike in one simple space. "
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
              Support Center
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              We're Here to <span className="text-secondary">Help</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Get the support you need to maximize your WorkNET experience. Our dedicated team is committed to your success.
            </p>
          </motion.div>

          {/* Support Options */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <option.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{option.title}</h3>
                  <p className="mb-3 text-gray-600">{option.description}</p>
                  <p className="mb-4 text-sm text-gray-500">{option.availability}</p>
                  <button className="w-full rounded-lg bg-secondary px-4 py-2 font-semibold text-white transition-all hover:bg-secondary-600">
                    {option.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-6 w-6 text-secondary" />
                      <div>
                        <h3 className="mb-2 font-semibold text-gray-900">{item.question}</h3>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Support Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16"
          >
            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <Clock className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Support Hours</h3>
                  <p className="text-gray-600">Monday - Friday<br />6:00 AM - 8:00 PM PST</p>
                </div>
                <div className="text-center">
                  <MessageCircle className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Average Response</h3>
                  <p className="text-gray-600">Critical: 15 minutes<br />Standard: 2 hours</p>
                </div>
                <div className="text-center">
                  <FileText className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Knowledge Base</h3>
                  <p className="text-gray-600">Articles<br />Easily accessible via our website</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;