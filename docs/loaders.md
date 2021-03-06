# Loaders

They make possible to import files into your `JavaScript` bundle other that JS itsenf, such as `Typescript`, images, `css`, `scss`, etc.

### Apply Loaders
They live in the `module` entry of your `webpack` config. In these you add a `test` regular expression that will test file names and try to load them with the `loaders` define in the `use` loader pipe:
```json
{
	module: {
		rules: [{
			test: /\.(jpg|jpeg|png)$/,
			use: ['file-loader']
		}],
	}
}
```

### Relevant Loaders
#### File Loader
Handles image and static files in general.
#### CSS Loader
Reads the content of a CSS file and returns them into a JS friendly way, doesn't do anything else.
#### Style Loader
Injects the content of the `CSS Loader` returned `object` into a JS file. 

#### Babel Loader
Compiles ES down to a prior version. We can use `presets` to decide to which version to compile, for example `@babel/preset-env` compiles down to `ES5`. You will need **at least** to start playing with babel the following deps:
```
yarn add -D @babel/core babel-loader @babel/preset-env
```
We can use `plugins` and `proposal plugins` to extend and add yet-to-be-incorporated transpiling features.

### Order of execution
`Webpack` invoques loaders from right to left, so in `use: ['style-loader', 'css-loader', 'sass-loader']`, we will begin by `'sass-loader'` and finish by `'style-loader'`.