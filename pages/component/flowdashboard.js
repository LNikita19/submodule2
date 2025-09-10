"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarCollapse,
  Navbar,
  Dropdown,
  DropdownItem,
  Avatar,
  NavbarBrand,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Select,   // ✅ keep only this
} from "flowbite-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaSms, FaWhatsapp, FaRegCommentDots, FaMicrophoneAlt, FaEnvelope, FaRobot, FaComments, FaChartLine } from "react-icons/fa";

import { MdOutlineEmail, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoAnalytics, IoChatbubbleOutline } from "react-icons/io5";
import { BsJournalPlus } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { FiPieChart } from "react-icons/fi";
import { AiOutlinePieChart } from "react-icons/ai";
import { HiMail, HiBell, HiMoon, HiSun, HiSearch } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Calendar, MoreHorizontal, MessageSquare, Smartphone, Mail, Edit, Filter } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, RadialBarChart, Tooltip, RadialBar, CartesianGrid, ResponsiveContainer, Legend, PieChart, Pie
} from "recharts";


import { Bell, Moon } from "lucide-react";
import EmailDashboard from "./test";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Data for the "Recent Interactions" chart
  const data = [
    { date: "1 Oct", value: 1800 },
    { date: "2 Oct", value: 3000 },
    { date: "3 Oct", value: 1700 },
    { date: "4 Oct", value: 1500 },
    { date: "5 Oct", value: 1600 },
    { date: "6 Oct", value: 1650 },
    { date: "7 Oct", value: 1900 },
    { date: "8 Oct", value: 2200 },
    { date: "9 Oct", value: 2000 },
    { date: "10 Oct", value: 1800 },
  ];
  const datas = [
    { name: "Previous Month", value: 75, fill: "#3b82f6" }, // Blue
    { name: "Current Month", value: 90, fill: "#06b6d4" }, // Cyan
  ];


  const cards = [
    { title: "Total SMS Interactions", value: "45,231.89", growth: { percent: "+20.1%", period: "from last month" }, icon: <FaRegCommentDots className="h-5 w-5 text-gray-400" /> },
    { title: "Total WA Interactions", value: "55,231.89", growth: { percent: "+80.1%", period: "from last month" }, icon: <FaWhatsapp className="h-5 w-5 text-gray-400" /> },
    { title: "Total RCS Interactions", value: "12,234", growth: { percent: "+19%", period: "from last month" }, icon: <FaRegCommentDots className="h-5 w-5 text-gray-400" /> },
    { title: "Total Voice Interactions", value: "2,234", growth: { percent: "+43%", period: "since last hour" }, icon: <FaMicrophoneAlt className="h-5 w-5 text-gray-400" /> },
    { title: "Total Email Interactions", value: "41,231.89", growth: { percent: "+20.1%", period: "from last month" }, icon: <MdOutlineEmail className="h-5 w-5 text-gray-400" /> },
    { title: "Total Bot Interactions", value: "+762350", growth: { percent: "+80.1%", period: "from last month" }, icon: <FaRobot className="h-5 w-5 text-gray-400" /> },
    { title: "Total Livechat Interactions", value: "12,234", growth: { percent: "+19%", period: "from last month" }, icon: <IoChatbubbleOutline className="h-5 w-5 text-gray-400" /> },
    { title: "Total Ads", value: "+573", growth: { percent: "201", period: "since last hour" }, icon: <FaChartLine className="h-5 w-5 text-gray-400" /> },
  ];
  function getChannelIcon(channel) {
    switch (channel) {
      case "WhatsApp":
        return <FaWhatsapp className="h-5 w-5" />;
      case "RCS":
        return <MessageSquare className="h-5 w-5" />;
      case "SMS":
        return <Smartphone className="h-5 w-5" />;
      case "Email":
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  }

  const campaigns = [
    {
      name: "Campaign Name WhatsApp",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "WhatsApp",
      status: "Completed",
    },
    {
      name: "Campaign Name WhatsApp",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "WhatsApp",
      status: "In progress",
    },
    {
      name: "Campaign Name WhatsApp",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "WhatsApp",
      status: "Failed",
    },
    {
      name: "Campaign Name RCS",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "RCS",
      status: "Completed",
    },
    {
      name: "Campaign Name RCS",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "RCS",
      status: "Completed",
    },
    {
      name: "Campaign Name RCS",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "RCS",
      status: "Failed",
    },
    {
      name: "Campaign Name SMS",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "SMS",
      status: "Completed",
    },
    {
      name: "Campaign Name SMS",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "SMS",
      status: "Completed",
    },
    {
      name: "Campaign Name SMS",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "SMS",
      status: "Completed",
    },
    {
      name: "Campaign Name Email",
      date: "15 Mar 2025 - 15 Mar 2025",
      channel: "Email",
      status: "Completed",
    },
  ];

  const statusColors = {
    Completed: "text-green-600 bg-green-100",
    "In progress": "text-orange-600 bg-orange-100",
    Failed: "text-red-600 bg-red-100",
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar aria-label="Default sidebar example">
        <img src="/Logo.png" alt="Logo" />
        <SidebarItems>
          <SidebarItemGroup>
            <p className="text-sm font-normal text-[#71717A]">Platform</p>
            <SidebarItem href="#" icon={LuLayoutDashboard}>
              Dashboard
            </SidebarItem>
            <SidebarCollapse label="Campaigns" icon={MdOutlineSpaceDashboard}>
              <SidebarItem href="#">SMS</SidebarItem>
              <SidebarItem href="#">WhatsApp</SidebarItem>
              <SidebarItem href="#">RCS</SidebarItem>
              <SidebarItem href="#">Voice</SidebarItem>
              <SidebarItem href="#">Analytics</SidebarItem>
              <SidebarItem href="#">Tools</SidebarItem>
            </SidebarCollapse>
            <SidebarItem href="#" icon={BsJournalPlus}>
              Journeys
            </SidebarItem>
            <SidebarItem href="#" icon={IoAnalytics}>
              Analytics
            </SidebarItem>
            <SidebarItem href="#" icon={LiaToolsSolid}>
              Tools
            </SidebarItem>
            <p className="text-sm font-normal pt-[3rem] pl-6 text-[#71717A]">
              Single Sign-On
            </p>
            <SidebarItem icon={AiOutlinePieChart} href="#">
              Ads Manager
            </SidebarItem>
            <SidebarItem icon={FiPieChart} href="#">
              ChatBot
            </SidebarItem>
            <SidebarItem icon={HiMail} href="#">
              Email
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <div className=" bg-white  flex items-center justify-between h-[8rem] px-6 shadow-sm">
          {/* Left side */}
          <h2 className="text-lg font-semibold">Dashboard</h2>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-60 pl-10 rounded border border-gray-300 py-2 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 mt-1  top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </div>

            {/* Dark Mode Toggle */}
            <button className="p-2 rounded hover:bg-gray-100">
              <Moon className="h-5 w-5 text-gray-600" />
            </button>

            {/* Notifications */}
            <button className="p-2 rounded hover:bg-gray-100 relative">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>

            {/* Avatar */}
            <img
              src="/Avatar.png"
              alt="user avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <main className="p-6 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-4 gap-6">
            {cards.map((card, i) => (
              <Card key={i} className="relative p-4 shadow-md">

                <div className="absolute -mt-[5rem] ml-[18.6rem] text-[#71717A]">
                  {card.icon}
                </div>
                <h5 className="text-sm font-[500px] text-[#09090B]">{card.title}</h5>
                <div className="">
                  <p className="text-2xl font-semibold text-[#09090B]">{card.value}</p>
                  <span className="text-xs">
                    <span className="text-green-600">{card.growth.percent}</span>{" "}
                    <span className="text-[#71717A]">{card.growth.period}</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-row">
            
            <EmailDashboard />
            
            <Card className="rounded-xl shadow-lg w-full max-w-md h-[70%] mt-6">
              {/* Header */}
              <div className="px-4 pt-4">
                <h3 className="text-md font-semibold text-gray-900">General Interactions</h3>
                <p className="text-sm text-gray-400">Channel Breakdown</p>
              </div>

              {/* Chart Container */}
              <div className="relative h-[16.4rem] w-full  flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="110%"
                    barSize={10}
                    data={datas}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar background dataKey="value" cornerRadius={30} />
                  </RadialBarChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">$36,358</h3>
                  <p className="text-sm text-green-500">+9% then last month ↑</p>
                </div>
              </div>

              {/* Legends */}
              <div className="flex justify-around items-center text-sm text-gray-600 mt-4">
                {/* Previous Month */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    <span>Previous Month</span>
                  </div>
                  <span className="font-medium text-gray-900">Aug</span>
                </div>

                {/* Current Month */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                    <span>Current Month</span>
                  </div>
                  <span className="font-medium text-gray-900">Sep</span>
                </div>
              </div>


            </Card>
          </div>


          <div className="bg-white rounded-xl shadow-md border-1 border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold">Last 10 Campaigns</h2>
                <p className="text-sm text-gray-500">You made 14 campaigns this month.</p>
              </div>
              <Button color="" size="md" className="flex items-center gap-2 px-4 py-4  border-2 border-gray-300">
                <Filter className="w-4 h-4" /> Filter
              </Button>
            </div>

            <table className="w-full text-sm text-left">
              <thead className="text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="py-2">Campaigns Name</th>
                  <th className="py-2">Start Date - End Date</th>
                  <th className="py-2">Channel</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c, i) => (
                  <tr key={i} className="border-b  border-gray-200 hover:bg-gray-50">
                    <td className="py-3">{c.name}</td>
                    <td className="py-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      {c.date}
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        {getChannelIcon(c.channel)}
                        <span>{c.channel}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${statusColors[c.status]}`}
                      >
                        ● {c.status}
                      </span>
                    </td>
                    <td className="py-3 flex gap-2">
                      <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700">
                        <MoreHorizontal className="w-4 h-4 text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
              <span>Showing 1-10 of 100</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <button
                    key={n}
                    className={`px-3 py-1 rounded-lg ${n === 1 ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                      }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div >
  );
}
