import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 text-white text-lg">
      <div className="flex flex-row flex-wrap justify-between max-w-5xl mx-auto">
        <a href="mailto:minddonyy@gmail.com" className="hover:underline">
          minddonyy@gmail.com
        </a>
        <p className="hover:underline">&copy;minddonyy&apos;s devlog</p>
        <div>
          <ul className="flex flex-row flex-wrap justify-center gap-2">
            <li className="hover:bg-white/20 rounded-lg">
              <a
                className="p-1"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiFillGithub size="2rem" />
                </span>
              </a>
            </li>
            <li className="hover:bg-white/20 rounded-lg">
              <a
                className="p-1"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiOutlineInstagram size="2rem" />
                </span>
              </a>
            </li>
            <li className="hover:bg-white/20 rounded-lg">
              <a
                className="p-1"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiOutlineYoutube size="2rem" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;