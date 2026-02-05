"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, User, Home, Info } from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Clock, label: "Time Slot", href: "/time-slot" },
  { icon: Info, label: "About Us", href: "/about-us" },
  { icon: User, label: "Log in", href: "/login" },
];

export default function GlassDock() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3">
      <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        {items.map((item) => (
          <DockItem key={item.href} {...item} />
        ))}
      </div>
    </nav>
  );
}

function DockItem({ icon: Icon, label, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-label={label}
      className="relative group flex flex-col items-center"
    >
      {/* Square Tooltip Label */}
      <span className="pointer-events-none absolute -top-14 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 ease-out">
        <span className="relative whitespace-nowrap text-xs font-medium text-white px-4 py-2 rounded-md bg-white/10 border border-white/15 shadow-xl">
          {label}
        </span>
      </span>

      {/* Glow */}
      <span
        className={`absolute inset-0 rounded-md transition-all duration-300 ${
          isActive
            ? "opacity-100 bg-white/15"
            : "opacity-0 group-hover:opacity-100 bg-white/20"
        }`}
      >
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-tl-2xl rounded-tr-2xl bg-[#2A9D8F] " />
      </span>

      {/* Icon */}
      <span
        className={`relative z-10 p-3 rounded-full text-white transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 ${isActive ? "-translate-y-1.5 scale-110" : ""}`}
      >
        <Icon size={22} />
      </span>
    </Link>
  );
}
