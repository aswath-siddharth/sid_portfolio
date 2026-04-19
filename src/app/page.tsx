import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-auto pb-32 w-full pt-12">
        <HeroSection />
        
        <div className="relative mt-24 sm:mt-32">
           <div className="flex flex-col gap-24">
             <ProjectsSection />
             
             {/* 2-column layout for Skills and Experience at the bottom */}
             <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-24 lg:grid-cols-2 px-6 lg:px-8">
                <div className="lg:pr-12">
                  <ExperienceSection />
                </div>
                <div className="lg:pl-12 lg:border-l lg:border-zinc-200 lg:dark:border-zinc-800">
                  <SkillsSection />
                </div>
             </div>
           </div>
        </div>
      </main>

      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 mt-20 text-center text-zinc-500 dark:text-zinc-600 font-inter text-sm max-w-7xl mx-auto px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Aswath Siddharth R. All rights reserved.</p>
        <p className="mt-2 text-xs">Developed with Next.js, Tailwind CSS & Framer Motion.</p>
      </footer>
    </>
  );
}
