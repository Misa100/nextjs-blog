// pages/index.js
import Head from 'next/head';
import Image from 'next/image'
import ContactSection from '../components/contact';
import AboutSection from '../components/about';
import HomeSection from '../components/home';
import ScrollToTopButton from '../components/top';
import ThemeChanger from '../components/darkswitch';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Welcome to Tailwind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-[#10B981] p-4 flex justify-between items-center flex-wrap">
        <h1 className="text-2xl md:text-3xl font-semibold dark:text-white">Welcome to Tailwind</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black dark:text-white">
          Menu
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#home" className="text-sm md:text-base dark:text-white">Home</a></li>
            <li><a href="#about" className="text-sm md:text-base dark:text-white">About</a></li>
            <li><a href="#contact" className="text-sm md:text-base dark:text-white">Contact</a></li>
            <li className="mt-2 md:mt-0"><ThemeChanger /></li>
          </ul>
        </nav>
      </header>
      <section id="home" className="bg-gray-200 mx-auto p-6 dark:bg-[#3f4a61]">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Upgrade Your Blogging Experience
          </h1>
          <p className="mb-8 leading-relaxed dark:text-gray-100">Discover the perfect blend of design flexibility and development efficiency with Next.js and Tailwind CSS. Create responsive, visually appealing blogs with ease, and take your online presence to the next level.</p>
          <div className="flex justify-center">
            <a href="#about" className="inline-flex text-white bg-[#10B981] border-0 py-2 px-6 focus:outline-none hover:bg-[#0f8157] rounded text-lg">Get Started</a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image alt=""src="/5.jpg"
            width={700}
            height={500}
            className="object-cover object-center rounded"
            quality={100}
          />
        </div>
      </div>
      </section>
      <HomeSection />
      <AboutSection />
      <ContactSection />
      <ScrollToTopButton />
      <footer className="bg-gray-200 p-2 text-center dark:text-gray-100 dark:bg-[#3f4a61]">
        <p>&copy; 2024 Tailwind CSS Example</p>
      </footer>
    </div>
  );
}
