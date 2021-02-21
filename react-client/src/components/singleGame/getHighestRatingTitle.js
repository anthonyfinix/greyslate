const getHighestRatingTitle = (
  ratingsArray = [{ title: "Should try", percentage: 0 }]
) => {
  let highestRating = ratingsArray[0];

  ratingsArray.forEach((rating) => {
    if (rating.percentage > highestRating.percentage) {
        highestRating = rating;
    }
  });
  return highestRating.title;
};

export default getHighestRatingTitle;
