import React, { useEffect, useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import icon from '@/assets/kominfo7.png';
import Image from 'next/image';
import { Navbar } from 'flowbite-react';
import { Link as ScrollLink } from 'react-scroll';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FixNavigation = () => {
  const [isActive, setIsActive] = useState(false);
  const handleScrollToFooter = () => {
    const footer = document.getElementById('Footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isActive
          ? 'bg-white shadow-md text-gray-800'
          : 'bg-transparent text-gray-800'
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Image className="h-8 w-auto" src={icon} alt="Your Company" />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8 justify-center items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center border-b-2 border-transparent  px-1 pt-1 text-sm font-medium "
                  >
                    Beranda
                  </Link>

                  {/* Dropdown Profil */}
                  <Menu as="div" className="relative">
                    <MenuButton className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700">
                      Profil
                    </MenuButton>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute z-10 mt-2 w-48 origin-top bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/struktur-organisasi"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Struktur Organisasi
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/visi-misi"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Visi Misi
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/profil-dinas"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Profil Dinas
                            </Link>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>

                  {/* Dropdown Berita */}
                  <Menu as="div" className="relative">
                    <MenuButton className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700">
                      Berita
                    </MenuButton>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute z-10 mt-2 w-48 origin-top bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/berita-semarang"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Berita Semarang
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/berita-transparasi"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Berita Transparasi
                            </Link>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>

                  <Link
                    href="/ppid"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700"
                  >
                    PPID
                  </Link>

                  {/* Dropdown Gallery */}
                  <Menu as="div" className="relative">
                    <MenuButton className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700">
                      Gallery
                    </MenuButton>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute z-10 mt-2 w-48 origin-top bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/Gallery-foto"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Foto
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/Gallery-video"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Video
                            </Link>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>

                  <ScrollLink
                    to="Footer"
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700"
                  >
                    Contact
                  </ScrollLink>

                  {/* Dropdown Download */}
                  <Menu as="div" className="relative">
                    <MenuButton className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-gray-700">
                      Download
                    </MenuButton>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute z-10 mt-2 w-48 origin-top bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/dwnld-regulasi"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Regulasi
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              href="/dwnld-materi"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Materi
                            </Link>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2  bg-indigo-50">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Beranda
              </Disclosure.Button>
              <Disclosure as="div" className="relative">
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
                  Profil
                </Disclosure.Button>
                <DisclosurePanel className="pl-6">
                <Disclosure.Button
                    as="a"
                    href="/profil-dinass"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Profil Dinas
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/struktur-navigasi"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Struktur Organisasi
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/visi-misi"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Visi Misi
                  </Disclosure.Button>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="relative">
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
                  Berita
                </Disclosure.Button>
                <DisclosurePanel className="pl-6">
                  <Disclosure.Button
                    as="a"
                    href="/berita-semarang"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Berita Semarang
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/berita-transparasi"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Berita Transparasi
                  </Disclosure.Button>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure.Button
                as="a"
                href="/ppid"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                PPID
              </Disclosure.Button>
              <Disclosure as="div" className="relative">
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
                  Gallery
                </Disclosure.Button>
                <DisclosurePanel className="pl-6">
                  <Disclosure.Button
                    as="a"
                    href="/Gallery-foto"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Foto
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/Gallery-video"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Video
                  </Disclosure.Button>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure.Button
                as="a"
                href="#Footer"
                onClick={handleScrollToFooter}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Contact
              </Disclosure.Button>
              <Disclosure as="div" className="relative">
                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
                  Download
                </Disclosure.Button>
                <DisclosurePanel className="pl-6">
                  <Disclosure.Button
                    as="a"
                    href="/dwnld-regulasi"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Regulasi
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/dwnld-materi"
                    className="block py-2 text-sm text-gray-700"
                  >
                    Materi
                  </Disclosure.Button>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default FixNavigation;
