export const calculateAverage = (ratings: number[]) => {
  if (ratings.length === 0) return 0;
  const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
  const average = totalRating / ratings.length;
  return parseFloat(average.toFixed(1));
};
