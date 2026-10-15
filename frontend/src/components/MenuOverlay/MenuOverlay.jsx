import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import AnimateBtn from "../Buttons/AnimateBtn";

gsap.registerPlugin();

const links = [
  { label: "Collections", href: "#gallery", index: "01" },
  { label: "The Atelier", href: "#welcome", index: "02" },
  { label: "Timepieces", href: "#collections", index: "03" },
  { label: "Complications", href: "#activities", index: "04" },
  { label: "Feedback", href: "#feedback", index: "05" },
  { label: "Reserve Yours", href: "#reserve", index: "06" },
];

const MenuOverlay = () => {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      if (!overlayRef.current) return;

      if (open) {
        // Curtain drops down like a watch dial cover
        gsap.fromTo(
          overlayRef.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.9,
            ease: "power4.inOut",
          }
        );
        // Second sweep — the "polished bezel" sheen following the curtain
        gsap.fromTo(
          overlayRef.current.querySelector(".menu-sheen"),
          { xPercent: "-120%" },
          { xPercent: "120%", duration: 1.4, ease: "power2.inOut", delay: 0.15 }
        );
        // Clock-hand reveal: links swing in with a slight rotation
        gsap.fromTo(
          overlayRef.current.querySelectorAll(".menu-link-item"),
          { yPercent: 120, rotate: 4, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.07,
            delay: 0.45,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          overlayRef.current.querySelectorAll(".menu-footer-el"),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.8 }
        );
      } else {
        gsap.to(overlayRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.7,
          ease: "power4.inOut",
        });
      }
    },
    { dependencies: [open] }
  );

  return (
    <>
      {/* Fullscreen overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-[60] flex-col justify-center bg-[#121110] overflow-hidden ${open ? "flex" : "hidden pointer-events-none"}`}
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {/* sweeping sheen */}
        <div className="menu-sheen pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

        {/* giant faded dial ring backdrop */}
        <div className="pointer-events-none absolute -right-[15vw] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full border border-[#f4efe7]/[0.05]">
          <div className="absolute inset-[6%] rounded-full border border-[#f4efe7]/[0.04]" />
          <div className="absolute inset-[14%] rounded-full border border-[#f4efe7]/[0.03]" />
        </div>

        <nav className="relative flex flex-col gap-1 px-[8vw]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="menu-link-item group flex items-baseline gap-6 overflow-hidden py-1 w-fit"
            >
              <span className="text-[0.65rem] text-[#b1a696] tracking-widest font-bold group-hover:text-[#f4efe7] transition-colors duration-300">
                {l.index}
              </span>
              <span className="text-[#f4efe7] text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight transition-all duration-500 group-hover:text-[#b1a696] group-hover:translate-x-3">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="menu-footer-el absolute bottom-8 left-[8vw] text-[0.7rem] text-[#b1a696]">
          CHRONOS® — Geneva · Paris · Tokyo
        </div>
        <div className="menu-footer-el absolute bottom-8 right-[8vw] text-[0.7rem] text-[#b1a696]">
          Est. 1924
        </div>
      </div>

      {/* Toggle button (fixed, above overlay) */}
      <div
        ref={btnRef}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70]"
      >
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-fit h-10 p-1 flex items-center justify-end gap-2 bg-[#f4efe7] rounded-4xl cursor-pointer group transition-transform duration-300 hover:scale-105"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="pl-4 text-[#2a2725]">
            <AnimateBtn btnName={open ? "Close" : "Menu"} />
          </span>
          <span className="bg-[#2a2725] rounded-full p-2 block">
            {open ? (
              <IoMdClose className="text-[#b1a696] transition-transform duration-500 group-hover:rotate-90" />
            ) : (
              <IoMdMenu className="text-[#b1a696] transition-transform duration-500 group-hover:rotate-[360deg]" />
            )}
          </span>
        </button>
      </div>
    </>
  );
};

export default MenuOverlay;
