import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaG } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-4 border-t dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        {/*Left Column*/}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 leading-tight">
            Let's create Clean and Scalable applications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            start by{" "}
            <span className="text-orange-500 font-semibold">Hello</span>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:contact.deshkaustubh@gmail.com" className="text-gray-500 hover:text-red-400 text-2xl" title="Contact Me">
              <FaEnvelope/>
            </a>
            <a href="https://linkedin.com/in/deshkaustubh" className="text-blue-500 hover:text-red-400 text-2xl" title="LinkedIn">
              <FaLinkedin/>
            </a> 
            <a href="https://github.com/deshkaustubh" className="text-black-500 hover:text-red-400 text-2xl" title="GitHub">
              <FaGithub/>
            </a> 
          </div>
        </div>
        <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-4 border-t dark:border-gray-700 mt-8">
          <p>© {new Date().getFullYear()} K.D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}