"use client";
import { Card } from "../Card";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import { SidebarItem } from "../SidebarItem";
import { Button } from "../Button";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
  DownloadIcon,
  UploadIcon,
  UploadCloudIcon,
  FileIcon,
  DollarSignIcon,
} from "lucide-react";
import { Table } from "../Table";

const buttonData = [
  {
    id: 1,
    label: "File Download",
    icon: <DownloadIcon />,
  },
  {
    id: 2,
    label: "Full Upload",
    icon: <UploadIcon />,
  },
  {
    id: 3,
    label: "Partial Upload",
    icon: <UploadCloudIcon />,
  },
  {
    id: 4,
    label: "File Template",
    icon: <FileIcon />,
  },
];

export function Dashboard() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-row">
        <div className="flex">
          <Sidebar>
            <SidebarItem
              icon={<Home size={30} color="white" />}
              text="Home"
              className="mb-16"
              alert
            />
            <SidebarItem
              icon={<LayoutDashboard size={30} color="white" />}
              text="Dashboard"
              className="mb-16"
              active
            />
            <SidebarItem
              icon={<DollarSignIcon size={30} color="white" />}
              text="Projects"
              alert
            />

            <hr className="my-3" />
            <SidebarItem
              icon={<Settings size={30} color="white" />}
              text="Settings"
            />
            <SidebarItem
              icon={<LifeBuoy size={30} color="white" />}
              text="Help"
            />
          </Sidebar>
        </div>
        <div className="flex flex-col bg-gray-100 w-full px-8 py-2">
          <Card />
          <div className="p-4 px-6">
            <div className="flex justify-between items-center mb-4  p-2 gap-4">
              <div className="flex items-center gap-4">
                <h4>Payroll Area</h4>
                <select className="border p-2 rounded">
                  <option>MONTHLY</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                {buttonData.map(({ id, label, icon }) => (
                  <Button
                    key={id}
                    className="flex items-center bg-primary text-white rounded-lg gap-2 p-2"
                  >
                    {icon}
                    <span>{label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
