import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function HeroSection() {
  const images = [
    { src: "/photos/DSC09060.jpg", alt: "Aswath standing", rotate: "-rotate-2" },
    { src: "/photos/IMG_20251108_122554_411.webp", alt: "Aswath portrait", rotate: "rotate-2" },
    { src: "/photos/20250118_093846.png", alt: "Aswath speaking", rotate: "-rotate-2" },
    { src: "/photos/IMG_9894.JPG", alt: "Aswath casual", rotate: "rotate-2" },
  ];

  return (
    <div>
      <div className="mt-32 px-8 sm:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, distributed systems builder, and ML enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Aswath Siddharth R., a Software Engineering Intern currently pursuing my B.Tech in Computer Science at Amrita Vishwa Vidyapeetham. 
            I focus on building reliable backend systems, lightweight ML pipelines, and impactful end-to-end applications.
          </p>
          <div className="mt-6 flex gap-6">
            <a href="https://github.com/aswath-siddharth" target="_blank" aria-label="GitHub" className="group -m-1 p-1">
              <FaGithub className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
            <a href="https://linkedin.com/in/aswath-siddharth-rajendran" target="_blank" aria-label="LinkedIn" className="group -m-1 p-1">
              <FaLinkedin className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
            <a href="mailto:aswathsiddharthrajendran@gmail.com" aria-label="Mail" className="group -m-1 p-1">
              <Mail className="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-zinc-600 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${img.rotate} hover:rotate-0 transition duration-500 hover:scale-105`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
