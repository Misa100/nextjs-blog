// Importing Image from Next.js for better image optimization
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="text-gray-600 body-font dark:bg-[#3f4a61]">
      <div className="bg-gray-200 mx-auto flex px-5 py-24 items-center justify-center dark:bg-[#3f4a61] flex-col">
        <Image 
          alt="team collaboration"
          src="/4.jpg" // Make sure to replace this with your actual image path
          width={600}
          height={400}
          className="mb-10 object-cover object-center rounded"
          quality={100}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Who We Are</h2>
          <p className="mb-8 leading-relaxed dark:text-gray-100">At the heart of our agency is a team of passionate SEO specialists and content creators dedicated to bringing your brand&apos;s story to life. We combine innovative strategies with proven techniques to elevate your online presence, connecting you with your audience in meaningful ways. Discover the difference that expertise, creativity, and a little bit of magic can make.</p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-white bg-[#10B981] border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
