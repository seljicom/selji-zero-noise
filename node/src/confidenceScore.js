module.exports = function confidenceScore(reviews = []) {
  if (!reviews.length) return 0;
  const ratings = reviews.map(r => Number(r.rating)).filter(Boolean);
  if (!ratings.length) return 0;
  const avg = ratings.reduce((a,b)=>a+b,0) / ratings.length;
  return Number((avg * Math.min(ratings.length / 100, 1)).toFixed(2));
};
