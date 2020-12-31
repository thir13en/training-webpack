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