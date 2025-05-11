import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LinkButton, LinkButtonUnstyled } from "./link-button";
import MyLogo from "./logo";
import { ScrollButton, ScrollButtonUnstyled } from "./scroll-button";
'use client'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header id="header" className="flex items-center text-white bg-mine-grey border-b border-mine-grey-4 w-full justify-between p-4 sm:p-6 lg:sticky lg:left-0 lg:top-0 z-40">
      <h2 className="text-lg sm:text-xl font-bold font-['Roboto Mono'] tracking-[0.2em] sm:tracking-[0.3em] flex flex-row items-center gap-2 text-[1.5em] sm:text-[1.75em]">
        <ScrollButtonUnstyled targetId="home"><MyLogo /></ScrollButtonUnstyled>
        <span className="bg-mine-grey-4 whitespace-pre w-[2px] sm:w-[3px] rounded h-full"></span>
        <ScrollButtonUnstyled targetId="home">Su-Fumi</ScrollButtonUnstyled>
      </h2>

      {/* Desktop Navigation (hidden on mobile) */}
      <nav className="hidden md:block">
        <ol className="flex flex-row gap-2 sm:gap-4 text-xs sm:text-sm">
          <li><ScrollButton color="orange" targetId="home">Home</ScrollButton></li>
          <li><ScrollButton color="pink" targetId="products">Products</ScrollButton></li>
          <li><ScrollButton color="blue" targetId="about">About</ScrollButton></li>
          <li><ScrollButton color="green" targetId="contact">Contact</ScrollButton></li>
        </ol>
      </nav>

      {/* Mobile Menu Button (hidden on desktop) */}
      <button 
        className="md:hidden p-2 rounded-md focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu (hidden on desktop) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-12 rounded-md right-12 bg-mine-grey border-t border-mine-grey-4 z-50">
          <nav className="p-4">
            <ol className="flex flex-col gap-4 text-sm">
              <li onClick={toggleMenu}><ScrollButton color="orange" targetId="home" >Home</ScrollButton></li>
              <li onClick={toggleMenu}><ScrollButton color="pink" targetId="products">Products</ScrollButton></li>
              <li onClick={toggleMenu}><ScrollButton color="blue" targetId="about" >About</ScrollButton></li>
              <li onClick={toggleMenu}><ScrollButton color="green" targetId="contact" >Contact</ScrollButton></li>
            </ol>
          </nav>
        </div>
      )}
    </header>
  );
};

export const ProductHeader = () => {
  return (
    <header id="header" className="flex items-center text-white bg-mine-grey border-b border-mine-grey-4 w-full justify-between p-4 sm:p-6 lg:sticky lg:left-0 lg:top-0 z-40">
      <h2 className="text-lg sm:text-xl font-bold font-['Roboto Mono'] tracking-[0.2em] sm:tracking-[0.3em] flex flex-row items-center gap-2 text-[1.5em] sm:text-[1.75em]">
        <LinkButtonUnstyled link="/"><MyLogo /></LinkButtonUnstyled>
        <span className="bg-mine-grey-4 whitespace-pre w-[2px] sm:w-[3px] rounded h-full"></span>
        <LinkButtonUnstyled link="/">Su-Fumi</LinkButtonUnstyled>
      </h2>
      <nav>
        <ol className="flex flex-row gap-2 sm:gap-4 text-xs sm:text-sm">
          <li><LinkButton color="orange" link="/">Home</LinkButton></li>
        </ol>
      </nav>
    </header>
  );
};