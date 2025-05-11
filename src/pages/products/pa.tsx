import { FancyTitle, ConBlock, OutLink, CodeBlock } from "../../components/miscellaneous";
import { ScrollButtonUnstyled } from "../../components/scroll-button";
import { GOLogo, PowerShellLogo, SqliteLogo } from "../../components/tp-logos";
import { PALogo } from "../../logos";
import { CommandIcon, GithubIcon, MonitorDown, PocketKnife } from "lucide-react";

export default async function PaPage() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 px-4 lg:pl-24 pt-12">
      {/* Sidebar - hidden on mobile, shown on lg screens */}
      <div className="hidden lg:flex bg-mine-grey flex-col items-center gap-4 font-['Roboto'] w-56 sticky top-12 py-6 px-3 rounded-md border border-mine-grey-4 h-[70svh] min-h-fit">      
        <ScrollButtonUnstyled targetId="getting_started" className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3">
          Getting Started
        </ScrollButtonUnstyled>
        <ScrollButtonUnstyled targetId="installation" className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3">
          Installation
        </ScrollButtonUnstyled>
        <ScrollButtonUnstyled targetId="commands" className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3">
          Commands
        </ScrollButtonUnstyled>
        <ScrollButtonUnstyled targetId="shortcuts" className="w-full transition-colors duration-200 ease-in-out rounded-md py-1 text-left hover:bg-mine-grey-4 px-3">
          Shortcuts
        </ScrollButtonUnstyled>
      </div>
      
      {/* Mobile navigation - shown on mobile, hidden on lg screens */}
      <div className="lg:hidden rounded-md flex flex-wrap overflow-x-auto py-2 gap-2 sticky top-0 bg-mine-grey-2 z-10">
        <ScrollButtonUnstyled targetId="getting_started" className="whitespace-nowrap w-1/2 text-left transition-colors duration-200 ease-in-out rounded-md py-1 px-3 hover:bg-mine-grey-4">
          Getting Started
        </ScrollButtonUnstyled>
        <ScrollButtonUnstyled targetId="installation" className="whitespace-nowrap text-left transition-colors duration-200 ease-in-out rounded-md py-1 px-3 hover:bg-mine-grey-4">
          Installation
        </ScrollButtonUnstyled>
        <ScrollButtonUnstyled targetId="commands" className="whitespace-nowrap text-left w-1/2 transition-colors duration-200 ease-in-out rounded-md py-1 px-3 hover:bg-mine-grey-4">
          Commands
        </ScrollButtonUnstyled>
        <ScrollButtonUnstyled targetId="shortcuts" className="whitespace-nowrap text-left transition-colors duration-200 ease-in-out rounded-md py-1 px-3 hover:bg-mine-grey-4">
          Shortcuts
        </ScrollButtonUnstyled>
      </div>
      
      {/* Main content */}
      <div className="flex-1 h-[70svh] overflow-y-auto w-full flex flex-col gap-8 px-4 lg:pr-24 pb-12">      
        <GettingStartedSection />
        <InstallationSection />
        <CommandsSection />
        <ShortcutsSection />
      </div>
    </div>
  );
}
const GettingStartedSection = () => {
  return (
    <div id="getting_started" className="min-h-100 flex flex-col items-start gap-4">
      <div className="flex flex-row items-center gap-4">
        <PALogo className="size-12 lg:size-18"/>
        <span className="font-roboto-mono text-2xl lg:text-3xl tracking-widest">
          Project - Aliaser
        </span>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <span className="py-1">
          A simple CLI tool that lets you alias your project or folder locations, making it easy to quickly switch between directories. Perfect for streamlining your workflow and jumping between projects with ease.
        </span>
        <span className="text-xl lg:text-2xl">
          Tech Stack
        </span>
        <div className="flex flex-row gap-4 flex-wrap">
          <div className="flex flex-col items-center gap-2"> <SqliteLogo className="w-10 h-10 lg:w-12 lg:h-12"/> <FancyTitle color="pink" >SQLite</FancyTitle> </div>         
          <div className="flex flex-col items-center gap-2"> <GOLogo className="w-10 h-10 lg:w-12 lg:h-12"/> <FancyTitle color="blue" >GO</FancyTitle> </div>         
          <div className="flex flex-col items-center gap-2"> <PowerShellLogo className="w-10 h-10 lg:w-12 lg:h-12"/> <FancyTitle color="orange" >PowerShell</FancyTitle> </div>         
        </div>
        <span className='flex flex-col sm:flex-row gap-2 sm:gap-4 py-2 items-start sm:items-center'>
          <GithubIcon className='size-6 lg:size-8 stroke-white'/>
          <div className="flex flex-row gap-2 items-center">
            <ConBlock color='pink' line='github.com/JasnRathore/project-aliaser' />
            <OutLink link='https://github.com/JasnRathore/project-aliaser' color='pink' />
          </div>
          <span className="text-sm sm:text-base">(Repo to contribute or build from source.)</span>
        </span>
      </div>
    </div>
  )
}

const InstallationSection = () => {
  return (
    <div id="installation" className="min-h-100 flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <MonitorDown className="size-6 lg:size-8 stroke-green-300"/>
        <span className="font-roboto-mono text-2xl lg:text-3xl">
            Installation
        </span>
      </div>
      <ol className="flex flex-col gap-2 pl-4 list-decimal">
        <li><strong>Download</strong> the latest release (<code>project-aliaser@v0.1.0.zip</code>). from <a href="https://github.com/JasnRathore/project-aliaser/releases/tag/v0.1.0" className="underline text-sky-300" target="_blank"> Here </a></li>
        <li><strong>Extract</strong> the files in a folder (e.g., <code>~\sufumi\project-aliaser\</code>)</li>
        <li><strong>Add</strong> the folder to your <code>$PATH</code>.</li>
        <li><strong>Run in PowerShell</strong>:
            <pre className="mt-2">  <ConBlock line="pa  # Launches the interactive TUI" color="orange" /></pre>
        </li>
      </ol>
    
      <div className="border-l pl-2 text-gray-500">
          <div>Note:</div>
          <p>Files included are as follows:</p>
          <p><code>aliases.db</code>, <code>fa.exe</code>, <code>lib.psm1</code>, <code>mid_file.json</code>, <code>pa.ps1</code></p>
      </div>
    </div>
  )
}

const CommandsSection = () => {
  return (
    <div id="commands" className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <CommandIcon className="size-6 lg:size-8 stroke-sky-300" />
        <span className="font-roboto-mono text-2xl lg:text-3xl">
          Commands
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden rounded-xl border border-mine-grey-4 shadow-sm">
            <table className="min-w-full divide-y divide-mine-grey-4">
              <thead className="bg-mine-grey">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Command</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alias</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                </tr>
              </thead>
              
              <tbody className="bg-mine-grey-2 divide-y divide-mine-grey-4">
                <tr>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Add</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500"><CodeBlock line="add" />, <CodeBlock line="ad" /></td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-gray-500">Create a new directory alias (validates path)</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400"><CodeBlock line="pa add myproj 'C:\projects\myproject'" /></td>
                </tr>
                
                <tr>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Delete</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500"><CodeBlock line="delete" />, <CodeBlock line="dl" /></td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-gray-500">Remove an existing alias</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400"><CodeBlock line="pa delete myproj" /></td>
                </tr>
                
                <tr>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">List</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500"><CodeBlock line="list" />, <CodeBlock line="ls" /></td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-gray-500">Show all stored aliases (formatted output)</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400"><CodeBlock line="pa list" /></td>
                </tr>
                
                <tr>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Change Directory</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">(none)</td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-gray-500">Jump to a directory using its alias</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400"><CodeBlock line="pa myproj" /></td>
                </tr>
                
                <tr>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">Interactive Mode</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">(none)</td>
                  <td className="px-4 lg:px-6 py-4 text-sm text-gray-500">Launch the fuzzy-search TUI</td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400"><CodeBlock line="pa" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShortcutsSection = () => {
  return (
    <div id="shortcuts" className="h-fit min-h-100 flex flex-col items-start gap-4">
      <div className="flex flex-row items-center gap-4">
        <PocketKnife className="size-6 lg:size-8 stroke-orange-200"/>
        <span className="font-roboto-mono text-2xl lg:text-3xl tracking-widest">
          Shortcuts & Tricks
        </span>
      </div>
      <ol className="flex flex-col gap-2 pl-4 list-decimal">
        <li className="flex flex-col gap-1">
          <span><strong>Current directory shortcut</strong>:</span>
          <pre>  Use <CodeBlock line="." /> to save current path</pre>
          <pre>  <CodeBlock line="pa add myproj ." /></pre>
        </li>
        <li className="flex flex-col gap-1">
          <span><strong>Home directory</strong>:</span>
          <pre>  Use <CodeBlock line="~" /> for your user folder</pre>
          <pre>  <CodeBlock line="pa add home ~" /></pre>
        </li>
        <li className="flex flex-col gap-1">
          <span><strong>Environment variables</strong>:</span>
          <pre>  Supports <CodeBlock line="~" /> syntax</pre>
          <pre>  <CodeBlock line="pa add downloads '$env:USERPROFILE\Downloads'" /></pre>
        </li>
      </ol>
    </div>
  )
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};