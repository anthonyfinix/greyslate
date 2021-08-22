import StarIcon from '@material-ui/icons/Star';

const style = { width: 15, height: 15, color:"#ffc33c" }

const getStarRatings = (rating = []) => {
  let stars = [];
  for (let i = 0; Math.floor(rating) > i; i++) {
    stars.push(<StarIcon style={style} />);
  }
  return stars;
};

export default getStarRatings;
