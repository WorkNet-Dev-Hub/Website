import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Revolutionary Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Impact Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform Work life with modern solutions that deliver measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast Performance</h3>
              <p className="text-gray-600 mb-6">
                Experience real time results with our optimized infrastructure that processes and analyses work operations.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span></span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security</h3>
              <p className="text-gray-600 mb-6">
                Collaboration with the Government can allow WorkNET to securely and effectivly protect all data
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <span></span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Growth</h3>
              <p className="text-gray-600 mb-6">
                Scale seamlessly from startup to enterprise with our flexible architecture that grows with you.
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                <span></span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Innovating the backbone for work</h2>
            <p className="text-xl text-gray-300">
              The potential to create better foundations for a working system
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">2M+</div>
              <div className="text-gray-300">Active employees in NZ</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Driving a better economy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50B+</div>
              <div className="text-gray-300">Reduced costs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Innovation That Drives Results
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our unique platform combines The old working sytem and advanced analytics to deliver unprecedented insights and automation of your work life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                    <p className="text-gray-600">A unique platform provide real-time insights and predictive analytics. keeping you a step ahead for your work or your business</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                    <p className="text-gray-600">Connect seemlessly and gain access to tools designed to help you strive.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Collaboration</h3>
                    <p className="text-gray-600">Enable teams to work together efficiently with live updates and synchronized workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Innovation showcase" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Impact, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              See how organizations and people alike can achieve extraordinary outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Success story" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4"></h3>
              <p className="text-gray-600 mb-4">
                WorkNET can transform your operations, reducing processing time and increasing customer satisfaction.
              </p>
              <div className="text-2xl font-bold text-blue-600"></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Success story" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4"></h3>
              <p className="text-gray-600 mb-4">
                The scalability and reliability of WorkNET can enabled anyone expand their horizons in the workforce.
              </p>
              <div className="text-2xl font-bold text-green-600"></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Success story" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4"></h3>
              <p className="text-gray-600 mb-4">
                With WorkNET's capabilities, you can expect tasks to become routine and focus strategic growth.
              </p>
              <div className="text-2xl font-bold text-purple-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Work?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Become a part of a pionering new way to improve work life and work for all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Contact
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="https://worknet-dev-hub.github.io/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              See Demo
            </a>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
           What we can do together
          </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;