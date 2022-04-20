import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { getEpisodes } from "./actions/index.js";

import RoutesApp from "./routes.js";

export default function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getEpisodes());
    return () => {};
  }, []);

  /*   const episodes = useSelector((state) => state.episodes); */

  return (
    <div className="App">
      <RoutesApp />
    </div>
  );
}
