# Development


### Serving the app
You need the following dependencies: `webpack`, `webpack-dev-server`, `webpack-cli`. Then you can run `webpack serve` and it will be served for development purposes on `localhost`.  
Configure your `scripts` in `package.json` like:
```
{
  "scripts": {
  	...
    "start": "webpack serve"
    ...
  },
}
```