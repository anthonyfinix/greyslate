import React from "react";

const Ratings = ({ rating }) => {
  let barColor;
  if (rating.title === "exceptional") barColor = "#dc8a00";
  if (rating.title === "recommended") barColor = "#028403";
  if (rating.title === "meh") barColor = "#9a9a9a";
  if (rating.title === "skip") barColor = "#4e1010";
  return (
    <div className="elements-wrapper">
      <div className="row">
        <p className="rating-title">{rating.title}</p>
        <p className="count">{rating.count}</p>
        <p className="percent">{rating.percent}%</p>
      </div>
      <div className="rating-bar" style={{ width: `${rating.percent}%`, backgroundColor: barColor }} />
    </div>
  );
};

export default Ratings;
