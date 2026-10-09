import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Deployments from './components/Deployments';
import DeploymentDrawer from './components/DeploymentDrawer';
import ExecutionFramework from './components/ExecutionFramework';
import TechInfrastructure from './components/TechInfrastructure';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeDrawer, setActiveDrawer] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
      <BackgroundCanvas />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero onViewWork={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} />
          <Capabilities />
          <Deployments onOpenCase={(dep) => setActiveDrawer(dep)} />
          <ExecutionFramework />
          <TechInfrastructure />
          <Testimonials />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Persistent Floating WhatsApp quick-action button */}
      <FloatingWhatsApp />

      {activeDrawer && (
        <DeploymentDrawer
          deployment={activeDrawer}
          onClose={() => setActiveDrawer(null)}
        />
      )}
    </div>
  );
}
