import { motion } from "framer-motion";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-screen h-230 lg:h-100 bg-black-primary shadow-18-4">
      <div className="container h-full mx-auto flex gap-14 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div>
          <img
            className="w-full h-88 lg:h-72"
            src="./img/logo.webp"
            alt="Rick and Morty logo"
            title="Rick and Morty logo"
          />
        </div>

        <div className="w-4/5 h-42 lg:w-auto px-10 lg:px-12 flex gap-10 items-center rounded-md bg-white">
          <ImSearch
            className="text-gray-500"
            size="24"
            title="search for episodes"
          />
          <input
            className="w-full h-full font-poppins text-16 lg:text-18 text-black-default rounded-md"
            type="search"
            name="episode_search"
            id="episode_search"
            placeholder="Busque pelo nome do episódio"
          />
        </div>

        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          className="w-3/4 h-42 lg:w-auto flex gap-8 lg:gap-10 items-center py-6 px-12 rounded-md bg-red-primary"
        >
          <AiFillHeart size="22" color="#fff" />
          <Link
            className="font-poppins text-16 lg:text-18 text-white"
            to="/favorite"
          >
            Episódios favoritos
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
