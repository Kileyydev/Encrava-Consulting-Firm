"use client";

import { useEffect, useRef, useState } from "react";
import {
  Home,
  Settings,
  Boxes,
  BookOpen,
  Mail,
  Info,
  ChevronDown,
} from "lucide-react";

export default function TopNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // ORDER UPDATED HERE 👇
  const links = [
    { name: "Home", icon: Home },
    { name: "Services", icon: Settings },
    { name: "Resources", icon: BookOpen },
    { name: "About Us", icon: Info },
    { name: "Contact Us", icon: Mail },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
        setProductOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50" ref={wrapperRef}>

      <div className="backdrop-blur-xl bg-transparent border-b border-black/10 shadow-md">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LEFT LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-black flex items-center justify-center text-[10px] font-medium">
              E
            </div>
            <span className="text-sm font-medium text-black">
              Encrava
            </span>
          </div>

          {/* CENTER NAV */}
          <nav className="hidden md:flex items-center gap-8">

            {/* Home + Services */}
            {links.slice(0, 2).map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center gap-2 text-[13px] font-normal text-black hover:opacity-60 transition"
                >
                  <Icon size={16} />
                  {item.name}
                </a>
              );
            })}

            {/* PRODUCTS (NOW AFTER SERVICES) */}
            <div className="relative">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center gap-1 text-[13px] font-normal text-black hover:opacity-60 transition"
              >
                <Boxes size={16} />
                Products
                <ChevronDown size={14} />
              </button>

              {productOpen && (
                <div className="absolute top-9 left-0 bg-#7BE09C border border-black/10 shadow-lg w-44 py-1">

                  <a className="block px-3 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20">
                    Encrava Shield
                  </a>

                  <a className="block px-3 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20">
                    Encrava Intel
                  </a>

                </div>
              )}
            </div>

            {/* Remaining links */}
            {links.slice(2).map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center gap-2 text-[13px] font-normal text-black hover:opacity-60 transition"
                >
                  <Icon size={16} />
                  {item.name}
                </a>
              );
            })}

          </nav>

          {/* RIGHT CTA */}
          <button className="hidden md:block px-4 py-1.5 text-[12px] font-medium text-black bg-[#7BE09C] hover:opacity-80 transition">
            Book Consultation
          </button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-black text-xl"
          >
            {mobileOpen ? "−" : "+"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-black/10 bg-white/40 backdrop-blur-xl">

            <div className="flex flex-col gap-3 pt-3">

              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href="#"
                    className="flex items-center gap-2 text-[13px] text-black font-normal"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon size={16} />
                    {item.name}
                  </a>
                );
              })}

              {/* PRODUCTS */}
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center gap-2 text-[13px] text-black font-normal"
              >
                <Boxes size={16} />
                Products
                <ChevronDown size={14} />
              </button>

              {productOpen && (
                <div className="ml-6 flex flex-col gap-2">

                  <a
                    className="px-3 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    Encrava Shield
                  </a>

                  <a
                    className="px-3 py-2 text-[13px] text-black hover:bg-[#7BE09C]/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    Encrava Intel
                  </a>

                </div>
              )}

              {/* CTA */}
              <button
                className="mt-2 px-4 py-2 text-[12px] font-medium bg-[#7BE09C] text-black"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </button>

            </div>
          </div>
        )}

      </div>
    </header>
  );
}