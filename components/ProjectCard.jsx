import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ title, description, detailedInfo, tech, image, links, gallery = [] }) {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(image || '/assets/projects/placeholder.svg');

  // Stop propagation for inner links so clicking them doesn't trigger the modal again or close it unexpectedly
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div 
        className="card flex flex-col h-full overflow-hidden cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <div className="relative overflow-hidden w-full h-56">
          <Image
            src={imgSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgSrc('/assets/projects/placeholder.svg')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-80" />
        </div>
        <div className="p-6 flex flex-col flex-grow relative -mt-8 z-10">
          <h4 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{title}</h4>
          <p className="text-gray-400 text-base mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                {t}
              </span>
            ))}
          </div>
          <button className="text-left text-sm text-secondaryAccent font-medium hover:text-white transition-colors">
            Read Detailed Info &rarr;
          </button>
        </div>
      </div>

      {open && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6" 
          onClick={() => setOpen(false)}
        >
          <div 
            className="bg-midnight border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-glowLg flex flex-col" 
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <Image
                src={imgSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
              <button 
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full text-white flex items-center justify-center transition border border-white/10 z-20"
              >
                &#x2715;
              </button>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span key={t} className="text-sm px-3 py-1 bg-accent/20 text-blue-200 rounded-md border border-accent/30">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 sm:p-10 space-y-8 text-gray-300">
              <div>
                <h5 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-1 bg-accent rounded"></span>
                  Overview
                </h5>
                <p className="leading-relaxed text-lg whitespace-pre-wrap">{detailedInfo || description}</p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/5">
                {links?.github && (
                  <a target="_blank" rel="noreferrer" href={links.github} onClick={handleLinkClick} className="px-6 py-2.5 rounded-md bg-accent text-white font-semibold hover:bg-secondaryAccent transition-colors shadow-glow btn-glow">
                    View on GitHub
                  </a>
                )}
                {links?.demo && (
                  <a target="_blank" rel="noreferrer" href={links.demo} onClick={handleLinkClick} className="px-6 py-2.5 rounded-md border border-slate-500 hover:border-accent text-white transition-colors">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


