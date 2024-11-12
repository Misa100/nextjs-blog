// Importing Image from Next.js for better image optimization
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="text-gray-600 body-font dark:bg-[#3f4a61]">
        <div className="mx-auto flex px-14 lg:py-16 4xl:py-10 xl:py-32 3xl:py-44 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font 3xl:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">About Us
            </h1>
            <p className="3xl:text-2xl 3xl:mt-4 mb-8 leading-relaxed dark:text-gray-300 text-justify 4xl:text-center">At the heart of our agency is a team of passionate SEO specialists and content creators dedicated to bringing your brand&apos;s story to life. We combine innovative strategies with proven techniques to elevate your online presence, connecting you with your audience in meaningful ways.</p>
            <div className="flex justify-center">
              <a href="#about" className="inline-flex text-white bg-[#10B981] border-0 py-2 px-6 focus:outline-none hover:bg-[#0f8157] rounded text-lg">Get in Touch</a>
            </div>
          </div>
          <div className="w-1/2 4xl:w-full 4xl:mb-10">
            <Image alt=""src="/4.jpg"
              width={900}
              height={900}
              className="object-cover object-center rounded-md"
              quality={100}
            />
          </div>
        </div>
    </section>
  );
}
