import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  AtSymbolIcon,
  SpeakerWaveIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Pfp from "../assets/crystalpfp.jpg";
import Hero from './hero';

const socials = [
  { name: 'Instagram', description: 'Check Out My Lastest Work', href: 'https://www.instagram.com/_lllabmug/?hl=en', icon: AtSymbolIcon },
  { name: 'Sound Cloud', description: 'Listen Now', href: 'https://soundcloud.com/lllabmug', icon: SpeakerWaveIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className={`bg-white py-4 shadow-md ${showHeader ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 fixed top-0 left-0 w-full z-10`}>
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1 justify-center">
            <button
              onClick={() => setShowHeader(!showHeader)}
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flex lg:flex-1 justify-center">
            <a href="https://soundcloud.com/lllabmug" className="-m-1.5 p-1.5">
              <span className="sr-only">GumBall</span>
              <img
                alt=""
                src={Pfp}
                className="h-8 w-auto rounded-full ring-2 ring-white"
              />
            </a>
          </div>
          <div className="flex lg:flex-1 justify-center">
            {socials.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm font-semibold hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div className="flex-auto">
                  <a href={item.href} className="text-gray-900 group-hover:text-indigo-600">
                    {item.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </header>
      <div className={`hero-container transition-all duration-300 ${showHeader ? 'pt-20' : 'pt-0'}`}>
        <Hero />
      </div>
    </div>
  );
}