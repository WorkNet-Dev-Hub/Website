import React from 'react';
import Features from '../components/Features';
import Showcase from '../components/Showcase';

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-24">
      <Features />
      <Showcase />
    </div>
  );
};

export default FeaturesPage