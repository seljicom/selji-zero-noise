module.exports = function buildAmazonQuery({ keywords = [] }) {
  return keywords.join(' ');
};
