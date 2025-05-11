
export default async function LogoPage() {
  return (
    <div className="z-4 flex items-center justify-center h-screen w-full">
			<div id="logoDiv" className="p-8 bg-green-500">
				<span className="text-9xl tracking-[-0.15em] font-['Robot Mono'] font-bold">
					<span className="text-orange-300">ス</span>
					<span className="text-orange-300">フ</span>
					<span className="text-orange-300">ミ</span>
				</span>
    	</div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
