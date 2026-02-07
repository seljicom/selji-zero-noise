# selji-zero-noise

Minimal utilities for Zero-Noise product research.

This package provides small helpers to:
- score product confidence
- detect review noise signals
- generate cleaner Amazon search queries

Built as part of the SELJI Zero-Noise Shopping project.

Website: https://selji.com

## Install
npm install selji-zero-noise

## Usage
```js
const {
  confidenceScore,
  detectReviewNoise,
  buildAmazonQuery
} = require('selji-zero-noise');
