"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Phone, Twitter } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-8 px-4 ">
      {/* Left Section */}
      <div className="col-span-4 md:col-span-2 w-full lg:space-y-12 space-y-6 mt-20 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl"> HELLO I'M MUNNA</h1>

        <div className="text-violet-500">
          <TypeAnimation
            className="text-2xl md:text-4xl font-bold"
            sequence={[
              "A FULL STACK WEB DEVELOPER ",
              1000,
              "Frontend & Backend Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-2xl md:text-4xl p-4 rounded-4xl  border-2 w-max ">
          <a
            href="https://www.facebook.com/md.munna.362879/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Facebook />
          </a>
          <a
            href="https://github.com/md-munna-khan/Md.munna-mia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/munna-mia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <Linkedin />
          </a>
          <a
            href="https://x.com/munnaKhan140695"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Twitter />
          </a>
          <a
            href="https://wa.me/01867418698"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <Phone />
          </a>
        </div>

        {/* Contact and Resume Button */}
        <div className="inline-flex justify-center md:justify-center gap-4 mt-6">
          <a
            href="#contact"
            className="items-center border border-violet-500 lg:p-3 inline-flex 
             rounded-full text-sm px-3 py-2 hover:bg-violet-500 transition duration-300"
          >
            CONTACT ME
          </a>
          <a
            href="/web-resume.pdf"
            download="/web-resume.pdf"
            className="items-center border border-violet-500  lg:p-3 inline-flex 
             rounded-full text-sm px-3 py-2 hover:bg-violet-500 transition duration-300"
          >
            RESUME
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:col-span-2 lg:col-span-2 col-span-4 pt-8">
        <div className="relative md:w-[500px] md:h-[500px] h-[300px] w-[300px] rounded-full shadow-2xl mx-auto flex justify-center items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-full h-full border-t-4 border-b-4 border-violet-500 rounded-full"
          ></motion.div>
          <Image
            src="/my img.jpg"
            alt="MY Portfolio Picture"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
