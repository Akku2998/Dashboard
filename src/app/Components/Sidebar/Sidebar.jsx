"use client";

import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import logoImage from "../Images/logo.png";
import Image from "next/image";

import { createContext, useState } from "react";

export const SidebarContext = createContext();

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <aside className="h-full">
        <nav className="h-full flex flex-col bg-primary text-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <Image
              src={logoImage}
              height={30}
              width={30}
              className={`rounded-full overflow-hidden transition-all ${
                expanded ? "w-16" : "w-0"
              }`}
            />

            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-500 hover:bg-gray-600"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <Image src={logoImage} height={30} width={30} alt="logo" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">NumeroAlpha</h4>
                <span className="text-xs text-gray-600">
                  numeroalpha@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
