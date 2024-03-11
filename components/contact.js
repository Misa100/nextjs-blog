import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGlobe } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="container bg-white mx-auto my-6 p-6 shadow-md">
      <div className="bg-gray-100 py-6 dark:bg-gray-800 ">
        <div className="max-w-screen-md mx-auto px-4 dark:bg-gray-800 ">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 dark:text-white">Contact Us</h2>
          <div className="flex justify-between">
            <div className="w-full space-y-6 bg-gray-200 p-8 shadow-md">
              <h1 className="mb-3 text-lg font-semibold text-gray-600">Send us a message</h1>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white" required />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white" required />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Messages</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white" required></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#10B981] hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                </div>
              </form>
            </div>
            <div className="w-full space-y-6 bg-white p-8 shadow-md dark:bg-gray-300">
              <h2 className="text-lg font-semibold dark:text-gray-800">Contact Information</h2>
              <hr />
              <p className="mb-4 dark:text-gray-800">We are open for any suggestion or just to have a chat</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#10B981] text-white">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div className="ml-3 text-left">
                    <p className="dark:text-gray-800"><span className="font-semibold dark:text-gray-800">Address:</span> Antananarivo, Madagascar </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#10B981] text-white">
                    <FaPhone className="text-xl" />
                  </div>
                  <div className="ml-3 text-left">
                    <p><span className="font-semibold dark:text-gray-800">Phone:</span> <a href="tel://1234567920" className="text-blue-600 hover:underline">+ 1235 2355 98</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#10B981] text-white">
                    <FaPaperPlane className="text-xl" />
                  </div>
                  <div className="ml-3 text-left">
                    <p><span className="font-semibold dark:text-gray-800">Email:</span> <a href="mailto:info@yoursite.com" className="text-blue-600 hover:underline">info@yoursite.com</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#10B981] text-white">
                    <FaGlobe className="text-xl" />
                  </div>
                  <div className="ml-3 text-left">
                    <p><span className="font-semibold dark:text-gray-800">Website:</span> <a href="#" className="text-blue-600 hover:underline">yoursite.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
