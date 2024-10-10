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
} from "lucide-react";
import { Table } from "../Table";

export function Dashboard() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-row">
        <div className="flex">
          <Sidebar>
            <SidebarItem icon={<Home size={20} />} text="Home" alert />
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active
            />
            <SidebarItem
              icon={<StickyNote size={20} />}
              text="Projects"
              alert
            />
            <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
            <SidebarItem icon={<Layers size={20} />} text="Tasks" />
            <SidebarItem icon={<Flag size={20} />} text="Reporting" />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
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
                <Button className="flex bg-primary text-white rounded-lg gap-2 ">
                  <DownloadIcon />
                  File Download
                </Button>
                <Button className="flex bg-primary text-white rounded-lg gap-2 ">
                  <UploadIcon />
                  Fill Upload
                </Button>
                <Button className="flex bg-primary text-white rounded-lg gap-2">
                  <UploadCloudIcon />
                  Partial Upload
                </Button>
                <Button className="flex bg-primary text-white rounded-lg gap-4 ">
                  <FileIcon />
                  File Template
                </Button>
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
