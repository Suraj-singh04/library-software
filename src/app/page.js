<<<<<<< homepage
"use client";
import Slider from "../components/PublicFacing/Slider";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
=======
import Link from "next/link";
>>>>>>> main

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
<<<<<<< homepage
    <div className="text-white min-h-screen">
      <nav className="w-full bg-white/10 backdrop-blur-md px-6 md:px-16 py-3 shadow-md relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-xl" />
            <h1 className="text-xl font-semibold underline underline-offset-4 decoration-[#2A9D8F]">
              The Name
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href={'#'}>
            <button className="text-lg hover:text-gray-300 transition cursor-pointer">
              Sign up
            </button>
            </Link>
            <Link href={'/login'}>
            <button className="bg-white/20 w-30 border border-white/30 px-4 py-1.5 rounded-lg text-lg hover:bg-white/30 transition cursor-pointer">
              Sign in
            </button>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl">
            <Link href={'#'}>
            <button className="text-lg w-30 text-center hover:text-gray-300 transition cursor-pointer">
              Sign up
            </button>
            </Link>
            <Link href={'/login'}>
            <button className="bg-white/20 text-center w-30 border border-white/30 px-4 py-1.5 rounded-lg text-lg hover:bg-white/30 transition cursor-pointer">
              Sign in
            </button>
            </Link>
          </div>
        )}
      </nav>

      <h1 className="text-center px-4 py-5 leading-tight">
        <span className="block text-sm sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
          WELCOME TO
        </span>
        <span className="block mt-2 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Smart Library Management System
        </span>
      </h1>

      <p className="text-center px-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
        An intelligent digital platform that streamlines book management, seat
        reservations, and member tracking, enabling libraries to operate
        efficiently while providing students and staff with a seamless, modern,
        and organized experience.
      </p>
      <Slider />
      <div className="flex justify-center mt-10">
        <Link href={'#'}>
        <button className="bg-white/10 cursor-pointer py-3 px-8  w-50 border border-white/20 rounded-lg hover:bg-white/20 transition duration-300">
          Get Start
        </button>
        </Link>
=======
      <div>
          <main>
              <Link href="/login">
                  <button> Go to login page</button>
              </Link>
          </main>
>>>>>>> main
      </div>
    </div>
  );
}
