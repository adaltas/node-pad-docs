---
path: /contribute
title: Contribution
navtitle: Contribution
keywords: ['intro','page']
sort: 400
---

# Contribution

## Introduction

You are encouraged to contribute to Node.js PAD. Node.js PAD is an open source project hosted on [GitHub](https://github.com/adaltas/node-pad) originally written by [Adaltas](http://www.adaltas.com/en/home/).

Contributions go far beyond pull requests and commits. we are thrilled to receive a variety of other contributions including the following:

* Write and publish your own actions
* Write articles and blog posts, create tutorial and spread the words
* Submit new ideas of features and documentation
* Submitting documentation updates, enhancements, designs, or bugfixes
* Submitting spelling or grammar fixes
* Additional unit or functional tests
* Help answering questions and issues on GitHub

## Development

Tests are executed with mocha. To install it, simple run `npm install` followed by `npm test`.
It will install mocha and its dependencies in your project "node_modules" directory and run the test suite.
The tests run against the CoffeeScript source files.

To generate the JavaScript files, run `npm run build`.

The test suite is run online with [Travis](https://travis-ci.com) against the versions 0.10 and 0.11 of Node.js.

## Testing

Clone the repo, install the development dependencies and run the suite:

```js
git clone http://github.com/wdavidw/node-pad.git
npm install
npm run test
```

## Bugs

Where to Find Known Issues
We are using GitHub Issues for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

## Contributors

Bellow is a non-restrictive list of contributors:

* David Worms: <https://github.com/adaltas>
* Sean Lang: <https://github.com/slang800>
* Piglovesyou: <https://github.com/piglovesyou>
* Joshyrobot: <https://github.com/joshyrobot>
* Matthew Dapena-Tretter: <https://github.com/matthewwithanm>
* Jake Verbaten: <https://github.com/Raynos>

Please create an issue if you feel you deserve to be part of it.
