import { Link } from 'waku';
type Colors = 'orange' | 'blue' | 'pink' | 'green'

function getColor(color:Colors): string {
	switch (color) {
		case "orange":
			return "hover:bg-orange-200"
		case "blue":
			return "hover:bg-sky-300"
		case "pink":
			return "hover:bg-pink-300"
		case "green":
			return "hover:bg-green-300"
	}
}

export function LinkButton({ link, color ,children }: { link: string; color: Colors ;children: React.ReactNode }) {
  return <Link 
		to={link}
		className={"bg-mine-grey-2 cursor-[url(arrow.png),_default] hover:cursor-[url(pointer.png),_pointer] transition-colors duration-300 ease-in-out  px-2 py-1 text-zinc-300 hover:text-mine-grey-3 font-bold rounded-md text-xs "+getColor(color)}
		>
		{children}
		</Link>;
}
export function LinkButtonUnstyled({ link, className="",children }: { link: string; className?: string ;children: React.ReactNode }) {
  return <Link
		to={link} 
		className={className+"cursor-[url(arrow.png),_default] hover:cursor-[url(pointer.png),_pointer]"}
		>
		{children}
		</Link>;
}