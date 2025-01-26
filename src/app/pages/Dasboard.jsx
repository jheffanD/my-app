"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "@/app/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { FlipWords } from "@/app/components/ui/flip-words";

import Management from "./Management";
import Report from "./Report";
import Chart from "./Chart"

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard"); // State untuk menentukan halaman yang aktif

  const links = [
    {
      label: "Dashboard",
      value: "Dashboard",
  
      icon: (
        <IconBrandTabler className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Management",
      value: "Management",
     
      icon: (
        <IconUserBolt className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Report",
      value: "Report",
      icon: (
        <IconSettings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Profile",
      value: "Profile",
      icon: (
        <IconArrowLeft className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}>
      {/* Sidebar */}
      <Sidebar>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
            <Logo />
            <div className='mt-8 flex flex-col gap-2'>
              {/* Daftar tautan utama */}
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={{
                    label: link.label,
                    href: "#", // Pastikan `href` selalu tersedia dengna menggunakana link.href (Href tetap "#", sehingga tidak berpindah halaman)
                    icon: link.icon,
                    onClick: () => setActivePage("Dashboard"), // Jika ingin menggunakan navigasi state gunakan link.value
                  }}
                  className={cn(
                    "cursor-pointer",
                    activePage === link.value
                      ? "bg-gray-200 dark:bg-neutral-700"
                      : ""
                  )}
                />
              ))}
            </div>
          </div>

          {/* Bagian bawah sidebar */}
          <div>
            <SidebarLink
              link={{
                label: "Jeffan Dasa",
                href: "#",
                icon: (
                  <Image
                    src='https://assets.aceternity.com/manu.png'
                    className='h-7 w-7 flex-shrink-0 rounded-full'
                    width={50}
                    height={50}
                    alt='Avatar'
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Konten Utama setiap pages pada dasboarad*/}
      <div className='flex-1 p-4'>
        {/* <DashboardContent /> */}
        {activePage === "Dashboard" && <DashboardContent />}
        {activePage === "Dashboard" && <Management />}
        {activePage === "Dashboard" && <Chart />}
        {/* {activePage === "Profile" && <Chart />} */}
      </div>
    </div>
  );

  function SidebarLink({ link, className }) {
    return (
      <Link
        href={link.href || "#"} // Pastikan `href` memiliki fallback default
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700",
          className
        )}
        onClick={link.onClick} // Tetap mendukung fungsi klik jika diberikan
      >
        {link.icon}
        <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
          {link.label}
        </span>
      </Link>
    );
  }
}

// Komponen Logo
export const Logo = () => {
  return (
    <Link
      href='#'
      className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'>
      <div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='font-medium text-black dark:text-white whitespace-pre'>
        Dashboard
      </motion.span>
    </Link>
  );
};

// Komponen Halaman Dashboard
const DashboardContent = () => {
  const words = ["Like", "View", "Subscribe"];
  return (
    <div className='p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-md mb-5'>
      <h1 className='flex text-xl font-semibold text-black dark:text-white justify-center pb-3'>
      Profile Overview
      <FlipWords words={words} />
      </h1>
    </div>
  );
};
