"use client";

import {
  Sidebar,
  SidebarItems,
  SidebarItem,
  SidebarItemGroup,
  SidebarCollapse,
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownItem,
  Avatar,
  Card,
  Tabs,
  TabItem,
  TabsItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { FcSms } from "react-icons/fc";

import {
  HiInbox,
  HiMail,
  HiOutlineArrowRight,
  HiChartPie,
  HiSearch,
} from "react-icons/hi";

import { FaSms, FaWhatsapp, FaRegCommentDots, FaMicrophoneAlt, FaEnvelope, FaRobot, FaComments, FaChartLine } from "react-icons/fa";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineSpaceDashboard } from "react-icons/md";
import { BsJournalPlus } from "react-icons/bs";
import { IoAnalytics, IoChatbubbleOutline, IoChatbubblesOutline } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiPieChart } from "react-icons/fi";
import { HiCalendar } from "react-icons/hi";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
export default function DashboardPage() {
  const [dateRange, setDateRange] = useState({
    start: new Date("2023-01-20"),
    end: new Date("2023-02-09"),
  });

  // Format date like "Jan 20, 2023"
  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

  const data = [
    { name: "Jan", value: 4500 },
    { name: "Feb", value: 6500 },
    { name: "Mar", value: 1700 },
    { name: "Apr", value: 2800 },
    { name: "May", value: 2600 },
    { name: "Jun", value: 3900 },
    { name: "Jul", value: 6100 },
    { name: "Aug", value: 1500 },
    { name: "Sep", value: 2200 },
    { name: "Oct", value: 5900 },
    { name: "Nov", value: 6200 },
    { name: "Dec", value: 4300 },
  ];

  const campaigns = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "/image.png", // Replace with actual image path
      channel: "WhatsApp",
    },
    ...Array(9).fill({
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "/image.png", // Replace with actual image path
      channel: "WhatsApp",
    }),
  ];
  const cards = [
    { title: "Total SMS Interactions", value: "45,231.89", growth: { percent: "+20.1%", period: "from last month" }, icon: <FaRegCommentDots className="h-5 w-5 text-gray-400" /> },
    { title: "Total WA Interactions", value: "55,231.89", growth: { percent: "+80.1%", period: "from last month" }, icon: <FaWhatsapp className="h-5 w-5 text-gray-400" /> },
    { title: "Total RCS Interactions", value: "12,234", growth: { percent: "+19%", period: "from last month" }, icon: <FaRegCommentDots className="h-5 w-5 text-gray-400" /> },
    { title: "Total Voice Interactions", value: "2,234", growth: { percent: "+43%", period: "since last hour" }, icon: <FaMicrophoneAlt className="h-5 w-5 text-gray-400" /> },
    { title: "Total Email Interactions", value: "41,231.89", growth: { percent: "+20.1%", period: "from last month" }, icon: <MdOutlineEmail className="h-5 w-5 text-gray-400" /> },
    { title: "Total Bot Interactions", value: "+762350", growth: { percent: "+80.1%", period: "from last month" }, icon: <FaRobot className="h-5 w-5 text-gray-400" /> },
    { title: "Total Livechat Interactions", value: "12,234", growth: { percent: "+19%", period: "from last month" }, icon: <IoChatbubblesOutline className="h-5 w-5 text-gray-400" /> },
    { title: "Total Ads", value: "+573", growth: { percent: "201", period: "since last hour" }, icon: <FaChartLine className="h-5 w-5 text-gray-400" /> },
  ];
  const formatDollar = (value) => `$${value}`;
  const legendItems = [
    { label: "SMS", color: "bg-green-600" },
    { label: "WhatsApp", color: "bg-blue-600" },
    { label: "RCS", color: "bg-[#1C398E]" },
    { label: "Voice", color: "bg-red-600" },
    { label: "Email", color: "bg-purple-600" },
    { label: "Ads", color: "bg-gray-600" },
    { label: "Bot", color: "bg-pink-600" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar aria-label="Default sidebar example" className="w-64">
        <img src="/Logo.png" alt="Logo" className="p-4" />
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
        {/* Navbar */}
        <Navbar fluid rounded className="border-b shadow-xs border-gray-200 px-4">
          <NavbarBrand href="#">
            <div className="flex items-center gap-2">
              <HiInbox className="h-5 w-5 text-[#09090B] dark:text-white" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Inbox
              </span>
            </div>
          </NavbarBrand>
          <div className="flex items-center gap-4">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            {/* Profile Dropdown */}
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar img="/image.png" rounded />}
            >
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>
          </div>
        </Navbar>

        {/* Dashboard Content */}
        <main className="p-6  overflow-y-auto">
          {/* Top Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-3">
              {/* Date Range Button */}
              <div className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-gray-600 dark:text-gray-300">
                <HiCalendar className="h-4 w-4" />
                <span>
                  {formatDate(dateRange.start)} – {formatDate(dateRange.end)}
                </span>
              </div>

              {/* Download Button */}
              <Button className="bg-[#18181B] hover:bg-[#27272A] text-white">
                Download
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 -ml-[1rem]">
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">
                Overview
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
                Analytics
              </button>
            </div>
          </div>


          <div className="grid grid-cols-4 gap-6">
            {cards.map((card, i) => (
              <Card key={i} className="relative p-4 shadow-md">

                <div className="absolute -mt-[5rem] ml-[18.6rem]">
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



          <div className="grid grid-cols-2 gap-6 mt-6 shadow-lg">
            {/* Recent Interactions */}
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                General Interactions
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                  {/* Removed CartesianGrid */}
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280" }}
                    tickFormatter={formatDollar}  // formatting Y axis tick
                  />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Bar dataKey="value" fill="#000000" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              {/* Legend */}
              <div className="flex justify-center gap-8 text-xs mt-16">
                {legendItems.map(({ label, color }) => (
                  <span key={label} className="flex items-center gap-1 text-gray-600 mt-[2rem]">
                    <span className={`w-2 h-2 rounded-full ${color}`}></span> {label}
                  </span>
                ))}
              </div>
            </div>

            {/* General Interactions */}
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                General Interactions
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                  {/* Removed CartesianGrid */}
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280" }}
                    tickFormatter={formatDollar}
                  />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Bar dataKey="value" fill="#000000" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              {/* Legend */}
              <div className="flex justify-center gap-8 text-xs mt-2">
                {legendItems.map(({ label, color }) => (
                  <span key={label} className="flex items-center gap-1 text-gray-600 mt-[2rem]">
                    <span className={`w-2 h-2 rounded-full ${color}`}></span> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>



          <div className="mt-10 shadow-md rounded-lg p-4">
            <h3 className="text-md font-bold text-[#09090B] mb-1">
              Last 10 Campaigns
            </h3>
            <p className="text-sm text-[#71717A] mb-4 font-medium">
              You made 14 campaigns this month.
            </p>

            <div className="overflow-auto">
              <Table >
                <TableHead>
                  <TableRow>
                    <TableHeadCell>User</TableHeadCell>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <TableHeadCell key={index}>Campaign</TableHeadCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {campaigns.map((user, idx) => (
                    <TableRow key={idx} className="">
                      {/* First column with WhatsApp and Dot */}
                      <TableCell className="whitespace-nowrap font-medium  flex items-center gap-3">
                        <Avatar
                          img={user.avatar}
                          alt="User avatar"
                          rounded
                          size="sm"
                        />
                        <div>
                          <div>{user.name}</div>
                          <div className="text-xs text-gray-500">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full"></span> {/* Green dot */}
                          <span className="text-xs text-gray-600">WhatsApp</span> {/* WhatsApp Text */}
                        </div>
                      </TableCell>                {Array.from({ length: 8 }).map((_, i) => (
                        <TableCell key={i}>
                          <div className="text-xs text-gray-500">2,55,23,189</div>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>


      </div>
    </div>
  );
}
