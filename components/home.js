import Image from 'next/image'

export default function HomeSection() {
    return (
      <section id="home" className="bg-gray-100 mx-auto p-6 dark:bg-[#1a202c]">
      <div className="mx-auto flex px-5 3xl:py-44 py-24 4xl:py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl 3xl:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Enhance Your Online Presence
          </h1>
          <p className="mb-8 3xl:text-2xl 3xl:mt-4 leading-relaxed dark:text-gray-100 text-justify 4xl:text-center">Elevate your visibility on the internet with our cutting-edge web writing and SEO solutions. Tailored to meet your unique needs, our personalized approach ensures maximum impact. Let us help you connect effectively with your audience.</p>
          <div className="flex justify-center">
            <a href="#about" className="inline-flex text-white bg-[#10B981] border-0 py-2 px-6 focus:outline-none hover:bg-[#0f8157] rounded text-lg">Discover Our Services</a>
          </div>
        </div>
        <div className="w-1/2 4xl:w-full 4xl:mb-10">
          <Image alt="Une stratégie SEO efficace"src="/2.jpg"
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

