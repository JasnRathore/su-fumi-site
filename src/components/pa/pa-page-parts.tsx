import { ConBlock, CodeBlock, OutLink, FancyTitle } from "../miscellaneous";
import { ScrollButtonUnstyled } from "../../components/scroll-button";
import { GOLogo, PowerShellLogo, SqliteLogo } from "../../components/tp-logos";
import { PALogo } from "../../logos";
import { CommandIcon, GithubIcon, MonitorDown, PocketKnife, Menu, X } from "lucide-react";

import { useState } from "react";
'use client'
// Responsive layout component with mobile sidebar toggle
export const PAResponsiveLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Mobile menu button */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-mine-grey p-2 rounded-md"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? (
          <X className="size-6 stroke-white" />
        ) : (
          <Menu className="size-6 stroke-white" />
        )}
      </button>

      {/* Sidebar - fixed on mobile when open, always visible on desktop */}
      <div className={`
        ${sidebarOpen ? 'fixed inset-0 z-40 block' : 'hidden'} 
        md:relative md:block
        bg-black/50 md:bg-transparent
        transition-all duration-300 ease-in-out
      `}>
        <div className={`
          bg-mine-grey 
          w-64 max-w-[80%] md:w-56
          h-full md:sticky md:top-0
          flex flex-col items-center gap-4 
          font-['Roboto'] py-6 px-3 
          rounded-r-md md:rounded-md 
          border-r md:border border-mine-grey-4
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="md:hidden w-full text-right mb-4">
            <button onClick={toggleSidebar} className="p-2">
              <X className="size-6 stroke-white inline-block" />
            </button>
          </div>
          
          <ScrollButtonUnstyled 
            targetId="getting_started" 
            className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3"
            onClick={() => setSidebarOpen(false)}
          >
            Getting Started
          </ScrollButtonUnstyled>
          
          <ScrollButtonUnstyled 
            targetId="installation" 
            className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3"
            onClick={() => setSidebarOpen(false)}
          >
            Installation
          </ScrollButtonUnstyled>
          
          <ScrollButtonUnstyled 
            targetId="commands" 
            className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3"
            onClick={() => setSidebarOpen(false)}
          >
            Commands
          </ScrollButtonUnstyled>
          
          <ScrollButtonUnstyled 
            targetId="shortcuts" 
            className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3"
            onClick={() => setSidebarOpen(false)}
          >
            Shortcuts
          </ScrollButtonUnstyled>
        </div>
      </div>

      {/* Main content */}
      <div className="h-full overflow-y-auto w-full flex flex-col gap-8 px-4 md:px-6 lg:px-12 pt-16 md:pt-12 pb-12">
        <GettingStartedSection />
        <InstallationSection />
        <CommandsSection />
        <ShortcutsSection />
      </div>
    </div>
  );
};

const GettingStartedSection = () => {
  return (
    <div id="getting_started" className="min-h-100 flex flex-col items-start gap-4">
      <div className="flex flex-row items-center gap-4">
        <PALogo className="size-10 md:size-18"/>
        <span className="font-roboto-mono text-xl md:text-3xl tracking-widest">
          Project - Aliaser
        </span>
      </div>
      <div className="flex flex-col justify-center gap-4">
        {/* 
        <video className="w-full max-w-3xl aspect-video" autoPlay controls muted playsInline>
          <source src="/vid/pa.mp4" type="video/mp4" />
        </video> 
        */}

        <span className="py-1">
          A simple CLI tool that lets you alias your project or folder locations, making it easy to quickly switch between directories. Perfect for streamlining your workflow and jumping between projects with ease.
        </span>
        <span className="text-xl md:text-2xl">
          Tech Stack
        </span>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2"> <SqliteLogo /> <FancyTitle color="pink" >SQLite</FancyTitle> </div>         
          <div className="flex flex-col items-center gap-2"> <GOLogo /> <FancyTitle color="blue" >GO</FancyTitle> </div>         
          <div className="flex flex-col items-center gap-2"> <PowerShellLogo /> <FancyTitle color="orange" >PowerShell</FancyTitle> </div>         
        </div>
        <span className='flex flex-row flex-wrap gap-4 py-2 items-center'>
          <GithubIcon className='size-6 md:size-8 stroke-white'/>
          <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
            <ConBlock color='pink' line='github.com/JasnRathore/project-aliaser' />
            <OutLink link='https://github.com/JasnRathore/project-aliaser' color='pink' />
          </div>
          <span className="w-full sm:w-auto">(Repo to contribute or build from source.)</span>
        </span>
      </div>
    </div>
  )
}

const InstallationSection = () => {
  return (
    <div id="installation" className="min-h-100 flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <MonitorDown className="size-6 md:size-8 stroke-green-300"/>
        <span className="font-roboto-mono text-xl md:text-3xl">
            Installation
        </span>
      </div>
      <ol className="flex flex-col gap-2">
          <li>1. <strong>Download</strong> the latest release (<code className="break-words">project-aliaser@v0.1.0.zip</code>). from <a href="https://github.com/JasnRathore/project-aliaser/releases/tag/v0.1.0" className="underline text-sky-300" target="_blank"> Here </a> </li>
          <li>2. <strong>Extract</strong> the files in a folder (e.g., <code className="break-words">~\sufumi\project-aliaser\</code>)</li>
          <li>3. <strong>Add</strong> the folder to your <code>$PATH</code>.</li>
          <li>4. <strong>Run in PowerShell</strong>:
              <pre className="mt-2 overflow-x-auto">  <ConBlock line="pa  # Launches the interactive TUI" color="orange" /></pre>
          </li>
      </ol>
      
      <div className="border-l pl-2 text-gray-500">
          <div>Note:</div>
          <p>Files included are as follows:</p>
          <p className="break-words"><code>aliases.db</code>, <code>fa.exe</code>, <code>lib.psm1</code>, <code>mid_file.json</code>, <code>pa.ps1</code></p>
      </div>
    </div>
  )
}

const CommandsSection = () => {
  return (
    <div id="commands" className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <CommandIcon className="size-6 md:size-8 stroke-sky-300" />
        <span className="font-roboto-mono text-xl md:text-3xl">
          Commands
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="overflow-hidden rounded-xl border border-mine-grey-4 shadow-sm min-w-full">
          <table className="w-full divide-y divide-mine-grey-4">
            {/* Header with rounded corners */}
            <thead className="bg-mine-grey [&>tr]:rounded-xl [&>tr]:overflow-hidden">
              <tr className="relative">
                {/* We'll use a pseudo-element to create the rounded corners */}
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Command</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alias</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
              </tr>
            </thead>
            
            <tbody className="bg-mine-grey-2 divide-y divide-mine-grey-4">
              <tr>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Add </td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500"><CodeBlock line="add" /> , <CodeBlock line="ad" /></td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-500">Create a new directory alias (validates path)</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm font-mono text-gray-400 overflow-x-auto"><CodeBlock line="pa add myproj 'C:\projects\myproject'" /></td>
              </tr>
              
              <tr>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Delete</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500"><CodeBlock line="delete" /> , <CodeBlock line="dl" /></td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-500">Remove an existing alias</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm font-mono text-gray-400"><CodeBlock line="pa delete myproj" /></td>
              </tr>
              
              <tr>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">List</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500"><CodeBlock line="list" /> , <CodeBlock line="ls" /></td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-500">Show all stored aliases (formatted output)</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm font-mono text-gray-400"><CodeBlock line="pa list" /></td>
              </tr>
              
              <tr>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Change Directory</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">(none)</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-500">Jump to a directory using its alias</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm font-mono text-gray-400"><CodeBlock line="pa myproj" /></td>
              </tr>
              
              <tr>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Interactive Mode</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">(none)</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm text-gray-500">Launch the fuzzy-search TUI</td>
                <td className="px-2 sm:px-4 md:px-6 py-4 text-sm font-mono text-gray-400"><CodeBlock line="pa" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const ShortcutsSection = () => {
  return (
    <div id="shortcuts" className="min-h-100 flex flex-col items-start gap-4">
      <div className="flex flex-row items-center gap-4">
        <PocketKnife className="size-6 md:size-8 stroke-orange-200"/>
        <span className="font-roboto-mono text-xl md:text-3xl tracking-widest">
          Shortcuts & Tricks
        </span>
      </div>
      <ol className="flex flex-col gap-4 w-full">
        <li className="flex flex-col gap-1">
          <span>1. <strong className="">Current directory shortcut</strong>:</span>
          <div className="overflow-x-auto">
            <pre>  Use <CodeBlock line="." /> to save current path</pre>
            <pre>  <CodeBlock line="pa add myproj ." /></pre>
          </div>
        </li>
        <li className="flex flex-col gap-1">
          <span>2. <strong>Home directory</strong>:</span>
          <div className="overflow-x-auto">
            <pre>  Use <CodeBlock line="~" /> for your user folder</pre>
            <pre>  <CodeBlock line="pa add home ~" /></pre>
          </div>
        </li>
        <li className="flex flex-col gap-1">
          <span>3. <strong>Environment variables</strong>:</span>
          <div className="overflow-x-auto">
            <pre>  Supports <CodeBlock line="~" /> syntax</pre>
            <pre>  <CodeBlock line="pa add downloads '$env:USERPROFILE\Downloads'" /></pre>
          </div>
        </li>
      </ol>
    </div>
  )
}
