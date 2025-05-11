import { ScrollSection } from '../components/scroll-section';
import { Caravan, GithubIcon, MailIcon } from 'lucide-react';
import { ConBlock, OutLink } from '../components/miscellaneous';

export default function ContactSection() {
  return (
    <ScrollSection 
      id='contact' 
      className='flex flex-col relative justify-center items-center pt-20 md:pt-28 lg:pt-32 pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-8 lg:mt-12 w-full z-4'
    >
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-mine-grey-3 font-bold font-dancing-script absolute top-4 z-2">
        Contact
      </span>
      
      <div className='w-full flex flex-col gap-4 mt-8 sm:mt-6 md:mt-4'>
        <span className='flex flex-row flex-wrap gap-2 md:gap-4 items-center'>
          <MailIcon className='size-6 md:size-8 stroke-white'/>
          <ConBlock color='orange' line='sufumi.devs@protonmail.com' />
          <span className="text-sm md:text-base">(Plaintext preferred.)</span>
        </span>
        
        <span className='flex flex-row flex-wrap gap-2 md:gap-4 items-center'>
          <GithubIcon className='size-6 md:size-8 stroke-white'/>
          <ConBlock color='pink' line='github.com/JasnRathore' />
          <OutLink link='https://github.com/JasnRathore' color='pink' />
          <span className="text-sm md:text-base">(Issues {'>'} DMs.)</span>
        </span>
        
        <span className='flex flex-row flex-wrap gap-2 md:gap-4 items-center'>
          <Caravan className='size-6 md:size-8 stroke-white'/>
          <ConBlock line='jasnrathore.vercel.app' color='blue'/>
          <OutLink link='https://jasnrathore.vercel.app' color='blue'/>
          <span className="text-sm md:text-base">(My Portfolio)</span>
        </span>
      </div>
    </ScrollSection>
  );
}