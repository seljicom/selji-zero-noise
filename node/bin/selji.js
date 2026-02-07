#!/usr/bin/env node

const { confidenceScore, detectReviewNoise, buildAmazonQuery } = require('../src');

const args = process.argv.slice(2);
const cmd = args[0];

try {
  if (cmd === 'score') {
    console.log(confidenceScore(JSON.parse(args[1])));
  } else if (cmd === 'noise') {
    console.log(JSON.stringify(detectReviewNoise(JSON.parse(args[1])), null, 2));
  } else if (cmd === 'query') {
    console.log(buildAmazonQuery({ keywords: args.slice(1) }));
  } else {
    console.log('SELJI Zero-Noise CLI');
  }
} catch (e) {
  console.error('Error:', e.message);
}
