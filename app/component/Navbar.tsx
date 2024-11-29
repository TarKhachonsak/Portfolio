import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-2xl font-bold">
          <a href="/" aria-label="Home">
            Khachonsak
          </a>
        </div>
        <div className="m-8 flex items-center gap-4 text-2xl">
          <a
            href="https://www.instagram.com/n.nsen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/TarKhachonsak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100086170933966"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </nav>
    </>
  );
}
