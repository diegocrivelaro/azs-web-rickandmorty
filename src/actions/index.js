/* eslint-disable no-await-in-loop */
import { gql, request } from "graphql-request";

export const getEpisodes = () => {
  return async (dispatch) => {
    const query = gql`
      {
        episodes {
          info {
            pages
          }
        }
      }
    `;

    const response = await request(
      "https://rickandmortyapi.com/graphql",
      query
    );

    const episodes = [];

    for (let i = 1; i <= response.episodes.info.pages; i += 1) {
      const query = gql`
        {
          episodes(page: ${i}) {
            info {
              pages
            }
            results {
              id
              name
              air_date
              episode
              characters {
                id
                name
                image
              }
            }
          }
        }`;

      const response = await request(
        "https://rickandmortyapi.com/graphql",
        query
      );

      episodes.push(...response.episodes.results);
    }

    dispatch({
      type: "GET_EPISODES",
      payload: episodes,
    });
  };
};

export const setFavorite = (favorites) => {
  return {
    type: "SET_FAVORITE",
    payload: favorites,
  };
};

export const setChecked = (checked) => {
  return {
    type: "SET_CHECKED",
    payload: checked,
  };
};
