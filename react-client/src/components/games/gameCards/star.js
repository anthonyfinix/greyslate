import star from "../../../assets/star.svg";

const getStarRatings = (rating = []) => {
  let stars = [];
  for (let i = 0; Math.floor(rating) > i; i++) {
    stars.push(<img src={star} alt="star" />);
  }
  return stars;
};


export default getStarRatings;