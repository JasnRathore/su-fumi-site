import { ScrollSection } from '../components/scroll-section';
import { ScrollButton } from "../components/scroll-button";

export default function AboutSection() {
  return (
    <ScrollSection 
      id='about' 
      className='min-h-screen flex flex-col relative justify-center items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 mt-12 w-full'
    >
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-mine-grey-3 font-bold font-dancing-script absolute top-4 z-2">
        About Us
      </span>
      
      <div className="z-4 leading-[1.8] sm:leading-[2] flex flex-col md:flex-row items-center gap-4 md:gap-8 pt-16 md:pt-0">
        {/* Image container - hidden on small screens, progressively larger on bigger screens */}
        <div className='hidden sm:block w-full sm:w-80 md:w-96 lg:w-156 max-w-full'>
          <img src="images/abt_graphic.png" className='scale-x-100 w-full h-auto' alt="About graphic" />
        </div>
        
        {/* Text content - takes full width on mobile, adjusts on bigger screens */}
        <div className="w-full md:max-w-md lg:max-w-xl">
          <CodeBlock /><br/>
          <p className="my-4">(…just kidding. I'm one guy writing CLI tools so small they barely need a --help flag.)</p>
          
          <p className="my-4">No agencies. No "synergy." Just lean, typed-in-the-dark utilities for automating the tedious and slicing through bloated workflows. Think of me as your <DirBlock /> janitor—quiet, precise, and allergic to meetings.</p>
          
          <p className="my-4">(Want one? curl my brain at our <ScrollButton color="green" targetId="contact">Contact</ScrollButton>.)</p>
        </div>
      </div>
    </ScrollSection>
  )
}

const CodeBlock = () => {
  return (
    <code className="text-xs sm:text-sm md:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-1 px-2 sm:px-3 overflow-x-auto max-w-full">
      <span className="flex gap-2 sm:gap-4">
        <span className="shrink-0 text-gray-500">$</span>
        <span className="flex-1 whitespace-nowrap">
          <span className="text-yellow-500">npm&nbsp;</span>
          <span>install&nbsp;</span>
          <span className="text-gray-500">-g&nbsp;</span>
          <span>ego</span>
        </span>
      </span>
    </code>
  )
}

const DirBlock = () => {
  return (
    <code className="text-xs sm:text-sm md:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-1 px-2 sm:px-3 overflow-x-auto max-w-full">
      <span className="flex gap-2 sm:gap-4">
        <span className="flex-1 whitespace-nowrap">
          <span>/usr/local/bin/</span>
        </span>
      </span>
    </code>
  )
}