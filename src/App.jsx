import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "./actions/index.js";

export default function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getEpisodes());
    return () => {};
  }, []);

  const episodes = useSelector((state) => state.episodes);

  return (
    <div className="App">
      {episodes.map((episode) => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
        </div>
      ))}
    </div>
  );
}
