'use client'
import { ScrollSection } from "../components/scroll-section"
import { LinkButton } from "../components/link-button";
import { PALogo } from "../logos"

export default function ProductsSection() {
  return (
    <ScrollSection 
      id='products' 
      className='flex flex-col items-center relative pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 w-full mt-8 md:mt-12 z-3'
    >
      <span className="text-5xl md:text-7xl lg:text-8xl text-mine-grey-3 font-bold font-dancing-script absolute top-2 md:top-4 z-2">
        Products
      </span>
      <div className="flex flex-col md:flex-row justify-around w-full max-w-6xl z-4 mt-8 md:mt-0">
        <ProductCard
          name="Project-Aliaser" 
          logo={<PALogo className="size-6 md:size-8"/>} 
          vidSrc="/vid/PA-DEMO.mp4"
          link="products/pa"
        />
        {/* You can add more ProductCards here and they'll stack vertically on mobile 
            and display horizontally on medium screens and above */}
      </div>
    </ScrollSection>
  )
}

interface ProductCardParams {
  name: string
  logo: React.ReactNode
  vidSrc: string
  link: string
}

const ProductCard = (params: ProductCardParams) => {
  return (
    <div className="rounded-md overflow-clip w-full md:max-w-sm lg:max-w-md mb-6 md:mb-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <video 
        className="w-full aspect-video" 
        autoPlay 
        muted 
        playsInline
        loop
      >
        <source src={params.vidSrc} type="video/mp4" />
      </video>
      <div className="border-t border-mine-grey-4 bg-mine-grey-2 w-full p-2 md:p-3">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            {params.logo}
            <span className="text-sm md:text-base font-medium">{params.name}</span>
          </div>
          <LinkButton link={params.link} color="green">
            Visit
          </LinkButton>
        </div>
      </div>
    </div>
  )
}