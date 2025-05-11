import { useState } from 'react';
import { ArrowUpRight, Check, ClipboardCopy } from 'lucide-react';

type Colors = 'orange' | 'blue' | 'pink' | 'green'

export function FancyTitle({ color, children }: { color: Colors; children: React.ReactNode }) {
  return (
    <span className={`bg-mine-grey-2 cursor-[url(arrow.png),_default] px-1.5 sm:px-2 py-0.5 sm:py-1 font-bold rounded-md text-xs sm:text-sm ${getColor(color)}`}>
      {children}
    </span>
  );
}

export const OutLink = ({ link, color }: { link: string, color: Colors }) => {
  return (
    <a href={link} target='_blank' className='group size-fit bg-gray-800 p-1 sm:p-1.5 rounded-md'>
      <div className={`p-0.5 rounded-sm transition-colors duration-300 ease-in-out ${getGrpColor(color)}`}>
        <ArrowUpRight className='size-5 sm:size-6 group-hover:stroke-mine-grey-3' />
      </div>
    </a>
  )
}

'use client';
export const ConBlock = ({ line, color }: { line: string, color: Colors }) => {
  const [clicked, setClicked] = useState(false)
  const [temp, setTemp] = useState(false)
  
  const tempH = () => {
    return temp ? "animate-fade-out" : ""
  }
  
  const handleClick = async () => {
    copyToClipboard(line)
    setTemp(true)
    setTimeout(() => {
      setTemp(false)
      setClicked(true);
    }, 100)
    setTimeout(() => setClicked(false), 1600)
  }
  
  return (
    <code className="text-xs sm:text-sm md:text-base inline-flex text-left items-center space-x-2 sm:space-x-4 bg-gray-800 text-white rounded-lg p-1 px-2 sm:px-3 break-all sm:break-normal">
      <span className="flex flex-row gap-2 sm:gap-4 items-center">
        <span className="flex-1 overflow-hidden text-ellipsis">
          <span>{line}</span>
        </span>
        <button 
          className={`cursor-[url(arrow.png),_default] group p-0.5 sm:p-1 rounded-md hover:cursor-[url(pointer.png),_pointer] transition-colors duration-300 ease-in-out ${getBgColor(color)} ${getColor(color)}`}
          onClick={handleClick}
        >
          {clicked ? 
            <Check className='animate-fade-in size-5 sm:size-6 group-hover:stroke-mine-grey-3'/> : 
            <ClipboardCopy className={`animate-fade-in size-5 sm:size-6 group-hover:stroke-mine-grey-3 ${tempH()}`}/>
          }
        </button>
      </span>
    </code>
  )
}

export const CodeBlock = ({ line }: { line: string }) => {
  return (
    <code className="inline-flex text-left items-center space-x-2 sm:space-x-4 bg-gray-800 text-white rounded-lg p-0.5 px-1 sm:px-1.5 break-all sm:break-normal">
      <span className="flex flex-row gap-2 sm:gap-4 items-center">
        <span className="flex-1 text-xs sm:text-sm">
          <span>{line}</span>
        </span>
      </span>
    </code>
  )
}

export function copyToClipboard(content: string) {
  navigator.clipboard.writeText(content).then(() => {
  }).catch(err => {
    alert("Copying to Clipboard Failed: " + err);
  });
}

function getGrpColor(color: Colors): string {
  switch (color) {
    case "orange":
      return "group-hover:bg-orange-200"
    case "blue":
      return "group-hover:bg-sky-300"
    case "pink":
      return "group-hover:bg-pink-300"
    case "green":
      return "group-hover:bg-green-300"
  }
}

function getColor(color: Colors): string {
  switch (color) {
    case "orange":
      return "text-orange-200"
    case "blue":
      return "text-sky-300"
    case "pink":
      return "text-pink-300"
    case "green":
      return "text-green-300"
  }
}

function getBgColor(color: Colors): string {
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