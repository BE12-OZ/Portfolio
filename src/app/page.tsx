"use client";

import AboutSection from '@/components/AboutSection/AboutSection'; // Updated path
import JourneyTimeline from '@/components/JourneyTimeline/JourneyTimeline'; // Updated path
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid'; // Updated path
import SkillsSection from '@/components/SkillsSection/SkillsSection'; // Updated path
import ContactSection from '@/components/ContactSection/ContactSection'; // Updated path
import ParallaxTitle from '@/components/ParallaxTitle/ParallaxTitle'; // Updated path
import AnimatedText from '@/components/AnimatedText/AnimatedText'; // Updated path
import Hero from '@/components/Hero/Hero'; // Import the new Hero component
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn'; // Import useGsapFadeIn

export default function Home() {
  const aboutRef = useGsapFadeIn(); // Apply fade-in to About Section
  const skillsRef = useGsapFadeIn(); // Apply fade-in to Skills Section
  const projectsRef = useGsapFadeIn(); // Apply fade-in to Projects Section
  const journeyRef = useGsapFadeIn(); // Apply fade-in to Journey Section
  const contactRef = useGsapFadeIn(); // Apply fade-in to Contact Section

  return (
    <>
      {/* Home Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 min-h-screen flex flex-col justify-center" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="About Me" />
          <AboutSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-navy-dark/50 min-h-screen flex flex-col justify-center" ref={skillsRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="Skills" />
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 min-h-screen flex flex-col justify-center" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="Projects" />
          <ProjectGrid />
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 bg-navy-dark/50 min-h-screen flex flex-col justify-center" ref={journeyRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="My Journey" />
          <JourneyTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 min-h-screen flex flex-col justify-center" ref={contactRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="Contact" />
          <ContactSection />
        </div>
      </section>
    </>
  );
}
