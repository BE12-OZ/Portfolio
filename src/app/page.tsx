"use client";

import AboutSection from '@/components/AboutSection/AboutSection';
import JourneyTimeline from '@/components/JourneyTimeline/JourneyTimeline';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import ParallaxTitle from '@/components/ParallaxTitle/ParallaxTitle';
import Hero from '@/components/Hero/Hero';
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';
import DynamicBackgrounds from '@/components/DynamicBackgrounds/DynamicBackgrounds'; // Import DynamicBackgrounds

export default function Home() {
  const aboutRef = useGsapFadeIn();
  const skillsRef = useGsapFadeIn();
  const projectsRef = useGsapFadeIn();
  const journeyRef = useGsapFadeIn();
  const contactRef = useGsapFadeIn();

  return (
    <DynamicBackgrounds>
      {/* Home Section */}
      <Hero />

      {/* About Section */}
      <section id="about" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="About Me" />
          <AboutSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="Skills" />
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="Projects" />
          <ProjectGrid />
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" ref={journeyRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="My Journey" />
          <JourneyTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef}>
        <div className="container mx-auto px-4">
          <ParallaxTitle title="Contact" />
          <ContactSection />
        </div>
      </section>
    </DynamicBackgrounds>
  );
}
