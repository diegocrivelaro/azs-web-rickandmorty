import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEpisodes } from "../actions/index.js";

export default function EpisodeCard() {
  /*
    Generate random numbers within a range
  */
  const randomNumbersRange = (max) => {
    return Math.floor(Math.random() * (max - 1 + 1) * 1);
  };

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getEpisodes());
    return () => {};
  }, []);

  const allEpisodes = useSelector((state) => state.episodes);

  return (
    <div className="grid gap-y-28 gap-x-16 grid-cols-1 md:grid-cols-2">
      {allEpisodes.map((episode) => {
        /*
          Number of characters in each episode
        */
        const numberOfCharacters = episode.characters.length;

        return (
          <div className="w-500 h-226 mx-auto flex rounded-md shadow-8-2">
            <div className="h-full">
              <img
                className="w-full h-full object-cover rounded-md"
                src={
                  episode.characters[randomNumbersRange(numberOfCharacters)]
                    .image
                }
                alt="Character who participated in this episode"
                title="Character who participated in this episode"
              />
            </div>

            <div className="px-14 py-14">
              <h3 className="font-poppins text-28 font-semibold text-gray-600">
                {episode.name}
              </h3>
              <ul className="mt-10">
                <li className="font-poppins text-16 text-gray-600">
                  Número do episódio:{" "}
                  <span className="text-red-primary font-medium">
                    {episode.episode}
                  </span>
                </li>
                <li className="font-poppins text-16 text-gray-600">
                  Data que lançou:{" "}
                  <span className="text-red-primary font-medium">
                    {episode.air_date}
                  </span>
                </li>
                <li className="font-poppins text-16 text-gray-600">
                  Quantidade de personagens:{" "}
                  <span className="text-red-primary font-medium">
                    {numberOfCharacters}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
