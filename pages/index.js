// pages/index.js
import Head from 'next/head';
import Image from 'next/image'
import ContactSection from '../components/contact';
import AboutSection from '../components/about';
import HomeSection from '../components/home';
import ScrollToTopButton from '../components/top';
import ThemeChanger from '../components/darkswitch';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Tailwind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-[#10B981] p-4 flex justify-between items-center flex-wrap">
        <h1 className="text-2xl md:text-3xl font-semibold dark:text-white">Welcome to Tailwind</h1>
        <nav>
          <ul className="flex space-x-2 md:space-x-4">
            <li><a href="#home" className="text-sm md:text-base dark:text-white">Home</a></li>
            <li><a href="#about" className="text-sm md:text-base dark:text-white">About</a></li>
            <li><a href="#contact" className="text-sm md:text-base dark:text-white">Contact</a></li>
            <ThemeChanger />
          </ul>
        </nav>
      </header>
      <section className="min-h-screen bg-gray-200 dark:bg-[#3f4a61] mx-auto p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
            <h2 className="title-font md:text-4xl text-3xl font-medium  text-gray-800 dark:text-white mb-4">Upgrade Your Blogging Experience</h2>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Discover the perfect blend of design flexibility and development efficiency with Next.js and Tailwind CSS. Create responsive, visually appealing blogs with ease, and take your online presence to the next level.
            </p>
            <a href="#home" className="bg-[#10B981] text-white px-6 py-3 rounded-lg shadow hover:bg-[#0f8157] transition-all md:mt-3">Get Started</a>
        </div>
        <div className="md:w-1/2 md:mt-0 ms-5 mt-5">
          <Image src="/5.jpg" alt="Blog Example" width={700} height={465} layout="responsive" className="rounded-lg shadow-xl" />
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
