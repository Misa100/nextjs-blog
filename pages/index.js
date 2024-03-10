// pages/index.js
import Head from 'next/head';
import Image from 'next/image'
import ContactSection from '../components/contact';
import AboutSection from '../components/about';
import HomeSection from '../components/home';
import ScrollToTopButton from '../components/top';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Tailwind</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-[#10B981] p-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Welcome to Tailwind</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="container bg-white mx-auto my-6 p-6 shadow-md flex items-center">
        <div className="flex-1">
          <p className="text-lg">This is a simple example of using Tailwind CSS with HTML. Get started by customizing this page!</p>
          <p className="text-lg mt-4">More ...</p>
        </div>
        <div>
        <Image src="/3.jpg" alt="" width={630} height={300} />
        </div>
      </section>
      <HomeSection />
      <AboutSection />
      <ContactSection />
      <ScrollToTopButton />
      <footer className="bg-gray-200 p-2 text-center">
        <p>&copy; 2024 Tailwind CSS Example</p>
      </footer>
    </div>
  );
}
