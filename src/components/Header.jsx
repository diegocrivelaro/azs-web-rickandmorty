import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <div>
        <img src="./img/logo.png" alt="" />
      </div>
      <div>
        <input type="search" name="" id="" />
      </div>
      <div>
        <Link to="/favorite">Episódios favoritos</Link>
      </div>
    </div>
  );
}
