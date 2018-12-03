# Basic performance test 

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install
```

Then go to properties.js file and change the url as you see fit

```javascript
module.exports = {
  url: <TEST_URL>
};

```

## Usage

```bash
node index.js 
```

## Result
You should see a JSON like this:

```javascript
{ responseEnd: 1105,
  domInteractive: 1363,
  domContentLoadedEventEnd: 1364,
  loadEventEnd: 2553 }
```

Understanding metrics
https://www.w3.org/TR/navigation-timing/
https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming


Code kinda stolen from:
https://michaljanaszek.com/blog/test-website-performance-with-puppeteer
