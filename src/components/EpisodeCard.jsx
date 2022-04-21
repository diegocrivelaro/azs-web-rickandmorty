/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEpisodes, setFavorite } from "../actions/index.js";
import BtnFavorite from "./BtnFavorite.jsx";

const randomNumbersRange = (max) => {
  return Math.floor(Math.random() * (max - 1 + 1) * 1);
};

function Card({ episode }) {
  const [random] = useState(randomNumbersRange(episode.characters.length));

  const dispatch = useDispatch();
  const allFavorites = useSelector((state) => state.favorites);

  return (
    <div className="w-500 h-226 mx-auto flex rounded-md shadow-8-2">
      <div className="w-204 h-full">
        <img
          className="w-full h-full object-cover rounded-md"
          src={episode.characters[random].image}
          alt="Character who participated in this episode"
          title="Character who participated in this episode"
        />
      </div>

      <div className="w-304 px-14 py-14 flex flex-col justify-between">
        <h3 className="font-poppins text-28 font-semibold text-gray-600">
          {episode.name}
        </h3>
        <ul>
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
              {episode.characters.length}
            </span>
          </li>
        </ul>
        <BtnFavorite
          onClick={() =>
            dispatch(
              setFavorite({
                id: episode.id,
                favorite: allFavorites[episode.id]
                  ? !allFavorites[episode.id].favorite
                  : false,
              })
            )
          }
          checked={
            allFavorites[episode.id] ? allFavorites[episode.id].favorite : false
          }
        />
      </div>
    </div>
  );
}

export default function EpisodeCard() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getEpisodes());
    return () => {};
  }, []);

  const allEpisodes = useSelector((state) => state.episodes);

  return (
    <div className="grid gap-y-28 gap-x-16 grid-cols-1 md:grid-cols-2">
      {allEpisodes.map((episode) => (
        <Card episode={episode} key={episode.id} />
      ))}
    </div>
  );
}
