// pages/index.js
import Head from 'next/head';
import Image from 'next/image'
import ContactSection from '../components/contact';
import AboutSection from '../components/about';
import HomeSection from '../components/home';
import ScrollToTopButton from '../components/top';
import ThemeChanger from '../components/darkswitch';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Welcome to Tailwind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-[#10B981] p-4 flex justify-between items-center">
      <h1 className="text-2xl lg:px-3 md:text-3xl font-semibold dark:text-white">Welcome to Tailwind</h1>
      {/* Menu and ThemeChanger */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black dark:text-white mr-3"
        >
          Menu
        </button>
        <ThemeChanger />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex flex-col lg:px-3 md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li><a href="#home" className="text-sm md:text-base dark:text-white">Home</a></li>
          <li><a href="#about" className="text-sm md:text-base dark:text-white">About</a></li>
          <li><a href="#contact" className="text-sm md:text-base dark:text-white">Contact</a></li>
          <li className="mt-2 md:mt-0"><ThemeChanger /></li>
        </ul>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-4/5 max-w-sm relative">
            {/* Close Icon */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-700 dark:text-white text-xl"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <ul
              className="space-y-4 mt-6 mb-3 flex flex-col items-center"
              aria-label="Mobile navigation"
              role="menu"
            >
              <li role="menuitem">
                <a href="#home" className="block text-center text-sm dark:text-white">
                  Home
                </a>
              </li>
              <div className="border-t-2 w-40 border-gray-300"></div>
              <li role="menuitem">
                <a href="#about" className="block text-center text-sm dark:text-white">
                  About
                </a>
              </li>
              <div className="border-t-2 w-40 border-gray-300"></div>
              <li role="menuitem">
                <a href="#contact" className="block text-center text-sm dark:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
      <section id="home" className="bg-gray-200 mx-auto p-6 dark:bg-[#3f4a61]">
        <div className="mx-auto flex px-5 lg:py-16 xl:py-32 3xl:py-40 md:flex-row flex-col items-center">
          <div className="4xl:mb-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font 3xl:text-5xl 4xl:py-6 4xl:mt-4 4xl:mb-2 text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Upgrade Your Blogging Experience
            </h1>
            <p className="3xl:text-2xl 3xl:mt-4 mb-8 leading-relaxed dark:text-gray-300 text-justify 4xl:text-center">Discover the perfect blend of design flexibility and development efficiency with Next.js and Tailwind CSS. Create responsive, visually appealing blogs with ease, and take your online presence to the next level.</p>
            <div className="flex justify-center">
              <a href="#about" className="inline-flex text-white bg-[#10B981] border-0 py-2 px-6 focus:outline-none hover:bg-[#0f8157] rounded text-lg">Get Started</a>
            </div>
          </div>
          <div className="w-1/2 4xl:w-full 4xl:mb-10">
            <Image alt=""src="/5.jpg"
              width={900}
              height={900}
              className="object-cover object-center rounded-md"
              quality={100}
            />
          </div>
        </div>
      </section>
      <HomeSection />
      <AboutSection />
      <ContactSection />
      <ScrollToTopButton />
      <footer className="bg-gray-200 p-2 text-center text-xl dark:text-gray-100 dark:bg-[#3f4a61]">
        <p>&copy; 2024 Tailwind CSS Example</p>
      </footer>
    </div>
  );
}
