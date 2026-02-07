module.exports = function detectReviewNoise(reviews = []) {
  let flags = [];
  const short = reviews.filter(r => (r.text || '').length < 30).length;
  if (short / reviews.length > 0.4) flags.push('high_short_review_ratio');
  return { noise: flags.length, flags };
};
