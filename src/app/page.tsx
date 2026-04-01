import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-auto pb-32 w-full max-w-[1400px] mx-auto min-h-screen">
        <HeroSection />
        <div className="mt-24 sm:mt-32">
           <div className="flex flex-col gap-16">
             <ProjectsSection />
             
             {/* 2-column layout for Skills and Experience at the bottom */}
             <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 px-8 sm:px-16 lg:px-24">
                <div className="px-0">
                  <SkillsSection />
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <ExperienceSection />
                </div>
             </div>
           </div>
        </div>
      </main>
    </>
  );
}
