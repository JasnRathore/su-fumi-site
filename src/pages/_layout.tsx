import '../styles.css';
import type { ReactNode } from 'react';
import GridBG from '../components/grid-bg';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Roboto'] cursor-[url(arrow.png),_default] min-h-screen max-w-screen">
      <meta name="description" content={data.description} />
      <title>Su-Fumi</title>
      <link rel="icon" type="image/png" href={data.icon} />
      <GridBG />
      <main className="flex items-center justify-start flex flex-col min-h-svh text-white bg-black">
        {children}
      </main>
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/logo_s.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
