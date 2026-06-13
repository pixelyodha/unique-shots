"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10 transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6">
          <div className="font-headline-md text-headline-md text-primary tracking-tighter">
            UNIQUESHOTS
          </div>
          <div className="hidden md:flex space-x-gutter">
            <a className="font-nav-item text-nav-item uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-300" href="#films">Films</a>
            <a className="font-nav-item text-nav-item uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-300" href="#gallery">Gallery</a>
            <a className="font-nav-item text-nav-item uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-300" href="#process">Process</a>
            <a className="font-nav-item text-nav-item uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-300" href="#journal">Journal</a>
          </div>
          <a className="hidden md:inline-block font-label-caps text-label-caps uppercase btn-champagne px-8 py-4 transition-all duration-500" href="#contact">
            Inquire
          </a>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden vignette">
        <img alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-70 img-zoom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR5L8EaIqfU13SoOo0xCvKGnw1Dvmlehter41OXusQpYhG-0PAN1U6kEzQ3zzHVscYhbarfihnGIIaswmCn1xOl_ycgcDAEgWq8U237OCPYwje9wlIlC-uj7H9LJRQm2TrQjKXN_Hy8kXnvaoF1SjObdfK5Aw0uXqDOtXMa9YAKGhobqdvjyD6hw7LN1sOb5HF-HupQ8d8zbuGt6YN4SQWQdWsQYubVz9EyBXOWtI2YC7HE9k5f22tIdObmtyLEFKc9j_ZyH-nKa8Z" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop flex flex-col items-center max-w-4xl">
          <span className="font-label-caps text-label-caps text-primary mb-6 tracking-[0.3em] uppercase block reveal-on-scroll">Uniqueshots</span>
          <h1 className="font-display-lg text-[48px] md:text-display-lg text-on-background mb-8 reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
            Capturing Forever, <br /><span className="italic text-surface-variant">One Frame at a Time</span>
          </h1>
          <a className="mt-8 font-label-caps text-label-caps uppercase btn-champagne px-10 py-5 reveal-on-scroll inline-block" href="#contact" style={{ transitionDelay: "400ms" }}>
            Inquire for 2026 Dates
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 reveal-on-scroll" style={{ transitionDelay: "600ms" }}>
          <span className="font-label-caps text-[10px] mb-2">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideDown_2s_infinite]"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-surface" id="process">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 reveal-on-scroll">
            <div className="img-zoom-container ghost-border p-4 relative">
              <img alt="" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 img-zoom" src="/g1.jpg" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-primary/30"></div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 mt-stack-md md:mt-0 reveal-on-scroll">
            <span className="font-label-caps text-label-caps text-primary mb-4 block">The Director</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-8">
              Cinematic Storytelling for the Ultra-Luxury Era.
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body-md">
              <p>
                Led by Gurvir Singh, Uniqueshots transcends traditional wedding documentation. Operating across Canada and the USA, we approach each event as a high-fashion editorial combined with a cinematic masterpiece.
              </p>
              <p>
                Our philosophy relies on intentional shadows, profound contrast, and capturing the authentic, unscripted moments that define absolute luxury. We don&apos;t just record the day; we craft an enduring legacy.
              </p>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <img alt="A sophisticated, minimalist profile avatar" className="w-16 h-16 rounded-full border border-primary/20" src="/logo.jpg" />
              <div>
                <div className="font-headline-md text-[20px] text-on-surface">Gurvir Singh</div>
                <div className="font-label-caps text-[10px] text-primary/70 mt-1">Founder &amp; Lead Cinematographer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-background" id="gallery">
        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-md reveal-on-scroll">
          <div>
            <span className="font-label-caps text-label-caps text-primary mb-4 block">The Archive</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">Selected Works</h2>
          </div>
          <a className="hidden md:inline-flex items-center space-x-2 text-primary font-label-caps hover:text-white transition-colors group" href="#">
            <span>View Full Portfolio</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontSize: "16px" }}>arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-[800px]">
          <div className="md:col-span-8 h-full min-h-0 img-zoom-container relative group reveal-on-scroll">
            <img alt="" className="w-full h-full object-cover img-zoom" src="/g2.jpg" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            <div className="absolute bottom-8 left-8">
              <span className="font-label-caps text-white/70 block mb-2">Toronto, Ontario</span>
              <h3 className="font-headline-md text-white">The City</h3>
            </div>
          </div>
          <div className="md:col-span-4 h-full min-h-0 flex flex-col gap-gutter">
            <div className="flex-1 min-h-0 img-zoom-container relative group reveal-on-scroll ghost-border p-2" style={{ transitionDelay: "100ms" }}>
              <img alt="" className="w-full h-full object-cover img-zoom" src="/g1.jpg" />
              <div className="absolute bottom-6 left-6">
                <span className="font-label-caps text-white/70 block mb-1">traditional</span>
                <h3 className="font-headline-md text-[24px] text-white">Portraits</h3>
              </div>
            </div>
            <div className="flex-1 min-h-0 img-zoom-container relative group reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
              <img alt="" className="w-full h-full object-cover img-zoom" src="/g3.jpg" />
              <div className="absolute bottom-6 left-6">
                <span className="font-label-caps text-white/70 block mb-1">Unscripted</span>
                <h3 className="font-headline-md text-[24px] text-white">Joy</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop bg-surface border-t border-white/5">
        <div className="text-center mb-stack-lg reveal-on-scroll">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">Offerings</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">Curated Experiences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="ghost-border p-10 flex flex-col hover-champagne transition-all duration-500 reveal-on-scroll">
            <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: "32px", fontWeight: "300" }}>photo_camera</span>
            <h3 className="font-headline-md text-[28px] text-on-surface mb-4">Photography</h3>
            <p className="font-body-md text-on-surface-variant flex-grow mb-8">
              Editorial coverage focusing on high-fashion portraiture and genuine, unscripted moments throughout your celebration.
            </p>
            <div className="font-label-caps text-primary/60 border-t border-white/10 pt-6 mt-auto">Starting at $8k</div>
          </div>
          <div className="ghost-border-champagne bg-primary-container/5 p-10 flex flex-col relative reveal-on-scroll" style={{ transitionDelay: "100ms" }}>
            <div className="absolute top-0 right-8 bg-primary text-on-primary font-label-caps px-4 py-1 text-[10px] transform -translate-y-1/2">Signature</div>
            <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: "32px", fontWeight: "300" }}>movie</span>
            <h3 className="font-headline-md text-[28px] text-on-surface mb-4">Cinematography</h3>
            <p className="font-body-md text-on-surface-variant flex-grow mb-8">
              A cinematic short film crafted with narrative pacing, color grading, and intentional sound design worthy of the silver screen.
            </p>
            <div className="font-label-caps text-primary border-t border-white/10 pt-6 mt-auto">Starting at $12k</div>
          </div>
          <div className="ghost-border p-10 flex flex-col hover-champagne transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
            <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: "32px", fontWeight: "300" }}>diamond</span>
            <h3 className="font-headline-md text-[28px] text-on-surface mb-4">The Collective</h3>
            <p className="font-body-md text-on-surface-variant flex-grow mb-8">
              Comprehensive photo and video coverage by our master team, ensuring a cohesive aesthetic across all visual mediums.
            </p>
            <div className="font-label-caps text-primary/60 border-t border-white/10 pt-6 mt-auto">Custom Quote</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface w-full border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-lg reveal-on-scroll">
        <div className="font-headline-md text-headline-md text-primary mb-6 md:mb-0">
          UNIQUESHOTS
        </div>
        <div className="flex space-x-8 mb-6 md:mb-0">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/uniqueshots.1/">Instagram</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="https://www.youtube.com/@Uniqueshots01">YouTube</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="https://wa.me/12896233551" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant">
          © 2026 UNIQUESHOTS. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
}
