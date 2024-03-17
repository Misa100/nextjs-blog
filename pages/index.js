// pages/index.js
import Head from 'next/head';
import Image from 'next/image'
import ContactSection from '../components/contact';
import AboutSection from '../components/about';
import HomeSection from '../components/home';
import ScrollToTopButton from '../components/top';
import ThemeChanger from '../components/DarkSwitch';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Tailwind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-[#10B981] p-4 flex justify-between items-center flex-wrap">
        <h1 className="text-2xl md:text-3xl font-semibold">Welcome to Tailwind</h1>
        <nav>
          <ul className="flex space-x-2 md:space-x-4">
            <li><a href="#home" className="text-sm md:text-base">Home</a></li>
            <li><a href="#about" className="text-sm md:text-base">About</a></li>
            <li><a href="#contact" className="text-sm md:text-base">Contact</a></li>
            <ThemeChanger />
          </ul>
        </nav>
      </header>
      <section className="min-h-screen bg-gray-200 dark:bg-[#3f4a61] mx-auto p-6 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <p className="text-md md:text-lg dark:text-gray-100">This is a simple example of using Tailwind CSS with HTML. Get started by customizing this page!</p>
          <p className="text-md md:text-lg mt-4 dark:text-gray-100">More ...</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Image src="/3.jpg" alt="" width={630} height={300} />
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
