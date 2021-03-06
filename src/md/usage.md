---
path: /usage
title: Usage
description: Options relative to the pad package
keywords: ['pad', 'options', 'usage']
sort: 100
---

# Usage

## Left padding: `pad(length, text, [options])`

Left padding occurs when the first argument is a number and the second argument is a string.

```js
var pad = require("pad")

pad(5, "pad", "-") //  "--pad"
```

## Right padding: `pad(text, length, [options])`

Right padding occurs when the first argument is a string and the second argument is a number.

```js
var pad = require("pad")

pad("pad", 5, "-") //  "pad--"
```

## Bundles

Node Pad comes in multiple flavours depending on your target environment:

* CommonJS: `dist/pad.cjs.js`   
  Bundle used by Node.js and compatible with ES5. It is declared inside the `package.json` by the `main` property and used by default with `require("pad")` in a Node.js environment.
* ES module: `dist/pad.esm.js`   
  Bundle using the ECMAScript standard defined in ES6 for working with modules. The path to the ES module is declared inside the `package.json` by the `module` property for ESM-aware tools like [Rollup](https://rollupjs.org) and [webpack 2+](https://webpack.js.org/).
* UMD: `dis/pad.umd.js`
  Bundle in the Universal Module Definition (UMD), a format compatible with both AMD and CommonJS.

The CommonJS syntax to import Node Pad is:

```js
const pad = require("pad/dist/pad.cjs.js")
// Or simply
const pad = require("pad")
```

While the ES Modules syntax is:

```js
import pad from "pad/dist/pad.esm.js"
// Or for ESM-aware tools
import pad from "pad"
```

## Options

Options are provided as a third argument and are all optional. A string argument it is interpreted as the "char" option.

* `char` (string)

The character used to fill the gap.

**Example:**

```js
var pad = require("pad")

pad(6, "234", "0") // "000234"
```

* `colors (boolean)` (boolean)

Adjust to hidden terminal color characters.

* `strip` (boolean)

Remove characters from text if length smaller than text length, default to "false".

**Example:**

```js
var pad = require("pad")

pad("abcdef", 2, { strip: true }) // "ab"
pad(2, "abcdef", { strip: true }) // "ef"
```

* `fixed_width` (boolean)

An optimization option to disable the usage of the [wcwidth](https://www.npmjs.com/package/wcwidth) package to handle the discovery of characters using more than one column for display.

```js
var pad = require("pad")

const chars = Buffer.from("e6938de4bd9c", "hex").toString()
pad(6, chars, { char: "0" }) // "00操作"
pad(6, chars, { char: "0", fixed_width: true }) // "0000操作"
```

* `wcwidth_options` (object)

Options passed to the [wcwidth](https://www.npmjs.com/package/wcwidth) package used to calculate the display width of characters using more than one column.

**Example:**

```js
var pad = require("pad")

pad(String.fromCharCode(0) + "a字的", 10, {
  char: "0",
  wcwidth_options: { nul: 0 },
}) // "a字的00000"
pad(String.fromCharCode(0) + "a字的", 10, {
  char: "0",
  wcwidth_options: { nul: 2 },
}) // "a字的000"
```

```js
var pad = require("pad")

pad("abc\n字的模块\ndef", 20, { char: "0", wcwidth_options: { control: -1 } })
/* Result:
abc
字的模块
def000000000000000000000
*/

pad("abc\n字的模块\ndef", 20, { char: "0", wcwidth_options: { control: 1 } })
/* Result:
abc
字的模块
def0000
*/
```
