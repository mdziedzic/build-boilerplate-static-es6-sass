# Build Boilerplate: Static/ES6/SASS

A boilerplate for building a static app/website with ES6 and SASS.

This project was created to enable the easy, setup-free use of ES6 and SASS while creating a static website/app.

## Features

- Dev-server to aid development by automatically refreshing the browser whenever an edit is made to any of the source files.
- Build script that:
  - Minifies, concatenates, and bundles all JavaScript and CSS files.
  - Converts all ES6 to browser friendly ES5.
  - Converts SASS to CSS and adds vendor prefixes to CSS rules.
  - Compresses images.

# Installation

The only development dependency of this project is [Node.js](https://nodejs.org). Once Node is installed, simply...

```
git clone https://github.com/mdziedzic/build-boilerplate-static-es6-sass.git
cd build-boilerplate-static-es6-sass
npm install
```

# Usage

## Development

A sample static website is included in `source`. These files are meant to be replaced by your files. The only constraint is that there must be a `source/index.js` and `source/index.html` file. The rest of your files can be arranged in a directory structure within `source` to your liking.

`npm run start` to start up the dev-server. You can view the site in a browser at: `http://localhost:8080`. As you edit the files in `source` your browser will be updated.

## Build

`npm run build` to create a production build of your site in a `build` directory. This is a static build so it can be opened directly in your browser.

# Notes

## JavaScript, SASS, CSS files

This project uses Webpack which relies on a dependency graph. What this means as far as this project is concerned is that all JavaScript, SASS, and CSS files must be imported in `index.js` (or in files that can be accessed via `index.js`). Take a look at the sample included with the project at `source/index.js` for an example of how to do this.

## HTML and images

You don't need to do anything for the HTML and image files apart from placing them somewhere in `source`. (Obviously images must be referenced by the HTML files and all HTML files must be accessible via `index.html`).

## Image Compression

The build script compresses the images. If you do not want the images to be compressed when using `npm run build`, simply remove the `--compress` flag in the `postbuild` script in `package.json`.

## Supported Browsers

Use the `browserslist` file to list what browsers your site supports. This affects what vendor prefixes get applied to your CSS, among other things. (See [https://github.com/ai/browserslist](https://github.com/ai/browserslist) for more information on how to use this file).

# Contributing

## Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/mdziedzic/build-boilerplate-static-es6-sass/issues) to report any bugs or file feature requests.

# Author

Michael Dziedzic ([micaheldziedzic.com](http://michaeldziedzic.com))

# License

The code is available under the [MIT license](LICENSE.txt).
