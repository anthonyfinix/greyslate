import star from "../../assets/star.svg";

const getStarRatings = (rating = []) => {
  let stars = [];
  for (let i = 0; Math.floor(rating) > i; i++) {
    stars.push(<img src={star} style={{marginRight:10}} width="15" height="15" alt="star" />);
  }
  return stars;
};

export default getStarRatings;
