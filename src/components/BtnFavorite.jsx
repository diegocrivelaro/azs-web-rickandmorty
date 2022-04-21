/* eslint-disable react/prop-types */
import React from "react";
import { AiFillHeart } from "react-icons/ai";

export default function BtnFavorite({ checked = false, onClick = () => {} }) {
  return !checked ? (
    <div className="w-full flex flex-row gap-6 items-center justify-center py-4 rounded-md bg-red-primary">
      <AiFillHeart color="#fff" size="22" />
      <button onClick={onClick} className="text-18 text-white" type="submit">
        Favoritar
      </button>
    </div>
  ) : (
    <div className="w-full flex flex-row gap-6 items-center justify-center py-4 rounded-md bg-orange-600">
      <AiFillHeart color="#fff" size="22" />
      <button onClick={onClick} className="text-18 text-white" type="submit">
        Favoritado
      </button>
    </div>
  );
}
