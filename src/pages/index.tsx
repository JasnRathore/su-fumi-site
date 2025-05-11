//import { Link } from 'waku';
import AboutSection from "../sections/about";
import ContactSection from "../sections/contact";
import HomeSection from "../sections/home";
import ProductsSection from "../sections/products";


import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default async function HomePage() {
  return (
    <>
    <Header />
    <HomeSection />
    <ProductsSection />
    <AboutSection />
    <ContactSection />
  </>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
