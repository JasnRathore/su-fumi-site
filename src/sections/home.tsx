import { MoveDown } from 'lucide-react';
import { ScrollSection } from '../components/scroll-section';

export default function HomeSection() {
  return (
    <ScrollSection 
      id='home' 
      className='flex w-full min-h-[70svh] md:min-h-[92svh] lg:min-h-[90svh] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10'
    >
      <div className="text-center sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide font-['Roboto Mono'] font-bold">
          Minimal. Fast. Open Source.
        </h1>
        <h2 className="bg-gradient-to-r from-sky-300 via-green-300 to-pink-300 font-bold inline-block text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-3">
          Command Line Tools Built for Speed.
        </h2>
      </div>
      
      <div className='absolute bottom-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 pb-6 md:pb-8'>
        <div className='flex flex-row justify-between items-center w-full border-t border-mine-grey-4 pt-4'>
          <div className='flex flex-col'>
            <span className='text-xs sm:text-sm tracking-widest'>
              Scroll to discover
            </span>
            <span className='text-xs sm:text-sm tracking-widest mt-1'>
              Su-Fumi
            </span>
          </div>
          <div className='animate-bounce'>
            <MoveDown className='stroke-white w-5 h-5 sm:w-6 sm:h-6'/>
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}