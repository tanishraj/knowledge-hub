## Learn Webpack

- This repo is useful for understanding web-pack with examples

## Initial Commands for basic setup of Webpack

- npm init -y [Create initial package.json file]
- npm install webpack webpack-cli --save-dev
- npx webpack [which will take our script at `src/index.js` as the [entry point](https://webpack.js.org/concepts/entry-points), and will generate `dist/main.js` as the [output](https://webpack.js.org/concepts/output)]
- npx webpack --config webpack.config.js [build your project against webpack.config.js]
- npm install --save-dev style-loader css-loader [In order to work with CSS webpack uses loaders]
- npm install --save-dev csv-loader xml-loader [used when you are loading the csv data or xml data]
- npm install --save-dev webpack-dev-server [Love reload and automatically recompile and loads the code]
-

## Why webpack?

In this example, There are implicit dependencies between the `<script>` tags. Our `index.js` file depends on `lodash` being included in the page before it runs. This is because `index.js` never explicitly declared a need for `lodash`; it assumes that the global variable `_` exists.

## Modules

The [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements have been standardized in [ES2015](https://babeljs.io/docs/en/learn/). They are supported in most of the browsers at this moment, however there are some browsers that don't recognize the new syntax. But don't worry, webpack does support them out of the box.

Behind the scenes, webpack actually "**transpiles**" the code so that older browsers can also run it. If you inspect `dist/main.js`, you might be able to see how webpack does this, it's quite ingenious! Besides `import` and `export`, webpack supports various other module syntaxes as well, see [Module API](https://webpack.js.org/api/module-methods) for more information.

Note that webpack will not alter any code other than `import` and `export` statements. If you are using other [ES2015 features](http://es6-features.org/), make sure to [use a transpiler](https://webpack.js.org/loaders/#transpiling) such as [Babel](https://babeljs.io/) or [Bublé](https://buble.surge.sh/guide/) via webpack's [loader system](https://webpack.js.org/concepts/loaders/).

## Loading CSS

In order to `import` a CSS file from within a JavaScript module, you need to install and add the [style-loader](https://webpack.js.org/loaders/style-loader) and [css-loader](https://webpack.js.org/loaders/css-loader) to your [`module` configuration](https://webpack.js.org/configuration/module):

## Loading Fonts

The Asset Modules will take any file you load through them and output it to your build directory. This means we can use them for any kind of file, including fonts. Let's update our `webpack.config.js` to handle font files:

## Loading Data

Another useful asset that can be loaded is data, like JSON files, CSVs, TSVs, and XML. Support for JSON is actually built-in, similar to NodeJS, meaning `import Data from './data.json'` will work by default. To import CSVs, TSVs, and XML you could use the [csv-loader](https://github.com/theplatapi/csv-loader) and [xml-loader](https://github.com/gisikw/xml-loader). Let's handle loading all three:

## Loading .json

It's possible to import any `toml`, `yaml` or `json5` files as a JSON module by using a [custom parser](https://webpack.js.org/configuration/module/#ruleparserparse) instead of a specific webpack loader.

## Output Management

So far we've manually included all our assets in our `index.html` file, but as your application grows and once you start [using hashes in filenames](https://webpack.js.org/guides/caching) and outputting [multiple bundles](https://webpack.js.org/guides/code-splitting), it will be difficult to keep managing your `index.html` file manually. However, a few plugins exist that will make this process much easier to manage.

We can see that webpack generates our `print.bundle.js` and `index.bundle.js` files, which we also specified in our `index.html` file. if you open `index.html` in your browser, you can see what happens when you click the button.

But what would happen if we changed the name of one of our entry points, or even added a new one? The generated bundles would be renamed on a build, but our `index.html` file would still reference the old names. Let's fix that with the [`HtmlWebpackPlugin`](https://webpack.js.org/plugins/html-webpack-plugin).

## Setting up HtmlWebpackPlugin

Before we do a build, you should know that the `HtmlWebpackPlugin` by default will generate its own `index.html` file, even though we already have one in the `dist/` folder. This means that it will replace our `index.html` file with a newly generated one. Let's see what happens when we do an `npm run build`:

## Development
