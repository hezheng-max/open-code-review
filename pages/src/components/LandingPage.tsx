import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import HighlightsSection from './HighlightsSection';
import UseCasesSection from './UseCasesSection';
import FeaturesSection from './FeaturesSection';
import BenchmarkSection from './BenchmarkSection';
import QuickStartSection from './QuickStartSection';
import Footer from './Footer';
import FadeInSection from './FadeInSection';

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1440,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection delay={100}>
        <HighlightsSection />
      </FadeInSection>
      <FadeInSection delay={100}>
        <UseCasesSection />
      </FadeInSection>
      <FadeInSection delay={100}>
        <FeaturesSection />
      </FadeInSection>
      <FadeInSection delay={100}>
        <BenchmarkSection />
      </FadeInSection>
      <FadeInSection delay={100}>
        <QuickStartSection />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};

export default LandingPage;
