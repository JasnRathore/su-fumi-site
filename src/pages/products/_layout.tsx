import { ReactNode } from "react";
import { ProductHeader } from "../../components/header";

type RootLayoutProps = { children: ReactNode };

export default async function ProductLayout({ children }:RootLayoutProps) {
  return (
    <div className="w-full z-10 cursor-[url(arrow.png),_default]">
			<ProductHeader />
      <div>{children}</div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};