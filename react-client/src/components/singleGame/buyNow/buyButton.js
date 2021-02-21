import React from "react";

import xbox from "../../../assets/xbox.svg";
import playstation from "../../../assets/playstation.svg";
import nintendo from "../../../assets/nintendoSwitch.svg";
import apple from "../../../assets/apple.svg";
import epic from "../../../assets/epicGames.png";
import steam from "../../../assets/steam.svg";

const BuyButton = ({ name, url, slug }) => {
  let bgColor = "#1f1f1f";
  let img;
  if (slug === "apple-appstore") {
    img = <img alt="brand" width="16px" height="20px" src={apple} />;
  }
  if (slug === "epic-games") {
    img = <img alt="brand" width="16px" height="20px" src={epic} />;
  }
  if (slug === "nintendo") {
    bgColor = "red";
    img = <img alt="brand" width="20px" height="20px" src={nintendo} />;
  }
  if (slug === "xbox-store") {
    bgColor = "green";
    img = <img alt="brand" width="15px" height="15px" src={xbox} />;
  }
  if (slug === "xbox360") {
    bgColor = "green";
    img = <img alt="brand" width="15px" height="15px" src={xbox} />;
  }
  if (slug === "microsoft") {
    bgColor = "green";
  }
  if (slug === "playstation-store") {
    bgColor = "#004098";
    img = <img alt="brand" width="20px" height="20px" src={playstation} />;
  }
  if (slug === "steam") {
    bgColor = "#1d394f";
    img = <img alt="brand" width="20px" height="20px" src={steam} />;
  }
  return (
    <a
      className="buy-button"
      style={{ backgroundColor: bgColor }}
      href={url}
      target="_blank"
    >
      {slug === "nintendo" ? img : null}
      {slug === "xbox-store" ? img : null}
      {slug === "apple-appstore" ? img : null}
      {slug === "xbox360" ? img : null}
      {slug === "playstation-store" ? img : null}
      {slug === "steam" ? img : null}
      {slug === "epic-games" ? img : null}
      {name}
    </a>
  );
};

export default BuyButton;
